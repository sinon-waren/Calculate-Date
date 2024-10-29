document.getElementById('calcul').addEventListener('click', function () {
    const dateUser = document.getElementById("date-user").value; 
    if (!dateUser){
        alert("Be sure to enter a date before clicking on the calculate button"); 
        return; 
    }

    const ageDetails = agecalculate(new Date(dateUser)); 

    document.getElementById('result').value = ageDetails.years + " ans";
    document.getElementById('result-month').value = ageDetails.months + " month";
    document.getElementById('result-days').value = ageDetails.days + " days";
    document.getElementById('result-hours').value = ageDetails.hours + " hours"; 
    document.getElementById('result-minutes').value = ageDetails.minutes + " min"; 
    document.getElementById('result-seconds').value = ageDetails.seconds + " s"; 
}); 

function agecalculate (dateUser) {
    const dateNow = new Date();
    let years = dateNow.getFullYear() - dateUser.getFullYear(); 
    let months = dateNow.getMonth() - dateUser.getMonth(); 
    let days = dateNow.getDate() - dateUser.getDate();
    let hours = dateNow.getHours() - dateUser.getHours();
    let minutes = dateNow.getMinutes() - dateUser.getMinutes(); 
    let seconds = dateNow.getSeconds() - dateUser.getSeconds(); 


    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds
    };
}