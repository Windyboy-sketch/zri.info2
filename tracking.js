// tracking.js
import { getFirestore, collection, getDocs, updateDoc, doc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const db = getFirestore();

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function getDeviceId() {
    const name = 'deviceId=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let cookie of cookieArray) {
        cookie = cookie.trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    const newId = generateUUID();
    document.cookie = `deviceId=${newId};path=/;max-age=31536000`;
    return newId;
}

function toISOString(value) {
    if (!value) return new Date().toISOString();
    if (typeof value === 'string') return value;
    if (value instanceof Date) return value.toISOString();
    if (value.toDate) return value.toDate().toISOString(); // Firestore Timestamp
    return new Date(value).toISOString();
}

async function getUsers() {
    try {
        const snapshot = await getDocs(collection(db, 'users'));
        return snapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                ...data,
                lastActive: toISOString(data.lastActive)
            };
        });
    } catch (error) {
        console.error('Error loading users:', error);
        return [];
    }
}

async function updateUserActivity() {
    const deviceId = getDeviceId();
    try {
        await updateDoc(doc(db, 'users', deviceId), {
            lastActive: new Date().toISOString() // Store as ISO string
        });
    } catch (error) {
        console.error('Error updating user activity:', error);
    }
}

async function isBanned() {
    const deviceId = getDeviceId();
    const users = await getUsers();
    const user = users.find(u => u.uid === deviceId);
    return user?.banned || false;
}

(async () => {
    if (await isBanned()) {
        document.body.innerHTML = '<h1 style="color: #ff6666; text-align: center; margin-top: 20%;">You have been banned from zri.info</h1>';
    } else {
        updateUserActivity();
        setInterval(updateUserActivity, 30000);
    }
})();