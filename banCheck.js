console.log("banCheck.js loaded on page: " + window.location.pathname);

// Function to enforce ban check using custom user ID from localStorage
function enforceBanCheck() {
  // Debug logging function (consistent with index.html)
  function debugLog(message, type = 'info') {
    console.log(`[${type.toUpperCase()}] banCheck.js: ${message}`);
  }

  debugLog("Starting ban check.");

  // Get current user ID from localStorage (matches index.html's approach)
  const currentUserId = localStorage.getItem('currentUserId');
  debugLog(`Current user ID: ${currentUserId || 'None'}`);

  // Check if Firebase and Firestore are available
  if (typeof firebase === 'undefined' || !firebase.firestore) {
    debugLog("Firebase or Firestore not initialized.", 'error');
    // Allow access if on index.html or banned.html; otherwise, no redirect
    if (!window.location.pathname.includes('index.html') && !window.location.pathname.includes('banned.html')) {
      debugLog("Firebase not available, but no redirect enforced for non-critical pages.");
    }
    return;
  }

  const db = firebase.firestore();

  if (currentUserId) {
    // User ID exists, check ban status
    debugLog(`Checking ban status for user ID: ${currentUserId}`);
    db.collection('users').doc(currentUserId).get()
      .then(doc => {
        if (doc.exists) {
          const userData = doc.data();
          debugLog(`User data fetched: ${JSON.stringify(userData)}`);
          if (userData.banned) {
            // Skip ban enforcement on admin.html and banned.html to avoid redirect loops
            if (!window.location.pathname.includes('admin.html') && !window.location.pathname.includes('banned.html')) {
              debugLog(`User is banned. Redirecting to banned.html with message: ${userData.banMessage}`);
              const banMessage = encodeURIComponent(userData.banMessage || 'You have been banned from ZRI.info.');
              window.location.href = `banned.html?message=${banMessage}`;
            } else {
              debugLog("Skipping ban enforcement on admin.html or banned.html");
            }
          } else {
            debugLog("User is not banned. Access allowed.");
          }
        } else {
          debugLog("User document not found.", 'warning');
          // Do not redirect to index.html; allow access unless page requires authentication
          debugLog("No redirect enforced; page access depends on page-specific rules.");
        }
      })
      .catch(error => {
        debugLog(`Error checking ban status: ${error.message}`, 'error');
        // Do not redirect on error; allow access unless page requires authentication
        debugLog("No redirect enforced due to error; page access depends on page-specific rules.");
      });
  } else {
    // No user logged in
    debugLog("No user ID in localStorage. No ban check required.");
    // Do not redirect; allow access unless page requires authentication
    debugLog("No redirect enforced; page access depends on page-specific rules.");
  }
}

// Ensure ban check runs after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  debugLog("DOM fully loaded, initiating ban check.");
  if (typeof firebase === 'undefined' || !firebase.firestore) {
    debugLog("Firebase or Firestore not initialized. Retrying after 1 second.", 'warning');
    setTimeout(() => {
      if (typeof firebase !== 'undefined' && firebase.firestore) {
        debugLog("Firebase initialized on retry. Running ban check.");
        enforceBanCheck();
      } else {
        debugLog("Firebase failed to initialize. No ban check enforced.", 'error');
        // No redirect; allow access unless page requires authentication
      }
    }, 1000);
  } else {
    debugLog("Firebase initialized. Running ban check.");
    enforceBanCheck();
  }
});