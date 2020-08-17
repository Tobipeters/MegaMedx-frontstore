//script for the time left in deals of the day 
var alertDiv = document.getElementById("time-left")
//console.log(alertDiv)
const x = () => {
    setInterval(function () {
        var deadline = new Date('Mon Aug 24  2020 11:00:08').getTime()
        var now = new Date().getTime()
        var timeLeft = deadline - now
        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var mins = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
        var secs = Math.floor(timeLeft % (1000 * 60) / 1000);
        //console.log(`${days} Days ${hours} Hours ${mins} Mins ${secs} Secs `);
        //accessing DOM of time left alert 
        alertDiv.innerHTML = `${days} Days ${hours} Hours ${mins} Mins ${secs} Secs `
        if (timeLeft < 0) {
            //to stop the timer
            clearInterval(x);
            alertDiv.innerHTML = "EXPIRED";
        }
    }, 1000);
}

x();


