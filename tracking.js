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

function getUsers() {
    try {
        const users = localStorage.getItem('users');
        return users ? JSON.parse(users) : {};
    } catch (error) {
        console.error('Error loading users:', error);
        return {};
    }
}

function saveUsers(users) {
    try {
        localStorage.setItem('users', JSON.stringify(users));
    } catch (error) {
        console.error('Error saving users:', error);
    }
}

function updateUserActivity() {
    const deviceId = getDeviceId();
    const users = getUsers();
    users[deviceId] = {
        lastActive: new Date().toISOString(),
        banned: users[deviceId]?.banned || false
    };
    saveUsers(users);
}

function isBanned() {
    const deviceId = getDeviceId();
    const users = getUsers();
    return users[deviceId]?.banned || false;
}

if (isBanned()) {
    document.body.innerHTML = '<h1 style="color: #ff6666; text-align: center; margin-top: 20%;">You have been banned from zri.info</h1>';
} else {
    updateUserActivity();
    setInterval(updateUserActivity, 30000);
}