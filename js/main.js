//script for the time left in deals of the day 
var alertDiv = document.getElementById("time-left")
//console.log(alertDiv)
const x = () => {
    setInterval(function () {
        var deadline = new Date('Sun aug 15  2020 11:00:08').getTime()
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
//Stepper functionalities for Prime vendor sign up
var secondStep = document.getElementById('second-step')
var secondStepDiv = document.getElementById('step-two-div')
var firstStepDiv = document.getElementById("step-one-div")
//business information
displayPersonContact = () => {
    secondStep.className += " active";
    firstStepDiv.style.display = "none"
    secondStepDiv.style.display = "block"
    // console.log(secondStepDiv)
}
displayBusinessInfo = () => {
    secondStep.classList.remove("active")
    secondStepDiv.style.display = "none"
    firstStepDiv.style.display = "block"

    // console.log(secondStepDiv)
}

