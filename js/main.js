//script for the time left in deals of the day 

//starting timer conditionally 
// var timerInterval = null;
// if (!timerInterval) {
const outTimeLeft = () => {
    var deadline = new Date('sat aug 15 2020 11:00:08').getTime()
    var now = new Date().getTime()
    var timeLeft = deadline - now
    setInterval(function () {
        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var mins = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
        var secs = Math.floor(timeLeft % (1000 * 60) / 1000);
        console.log(`${days} days ${hours} hours ${mins} mins ${secs} secs`);

        //accessing DOM of time left alert 
        document.getElementById("time-left").innerHTML = `${days} Days ${hours} Hours ${mins} Mins ${secs} Secs`
    }, 1000);
}
outTimeLeft();
// }
