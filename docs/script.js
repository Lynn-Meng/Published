function updateTimer() {
    const startDate = new Date("2022-07-10T00:00:00"); // Restaurant opening date
    const now = new Date();
    
    let diff = Math.floor((now - startDate) / 1000); // Difference in seconds

    const days = Math.floor(diff / (24 * 60 * 60));
    diff %= (24 * 60 * 60);
    
    const hours = Math.floor(diff / (60 * 60));
    diff %= (60 * 60);
    
    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;

    const formattedTime = `${days} D and ${hours} H ${minutes} Min and ${seconds} s`;

    document.getElementById("timer").textContent = formattedTime;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Run the function immediately
updateTimer();
