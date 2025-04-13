function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();


    // Format With Leading Zeros 
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    document.getElementById("clock").textContent = `${hours}:${minutes}`;
}