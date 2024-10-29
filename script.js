document.getElementById('calcul').addEventListener('click', function() {
    const dateNaissance = document.getElementById('date-user').value;
    if (!dateNaissance) {
        alert("Veuillez saisir une date de naissance.");
        return;
    }

    const ageDetails = calculerAge(new Date(dateNaissance));
    document.getElementById('result').value = ageDetails.years + " ans";
    document.getElementById('result-month').value = ageDetails.months + " month";
    document.getElementById('result-days').value = ageDetails.days + " days";
    document.getElementById('result-hours').value = ageDetails.hours + " hours";
    document.getElementById('result-minutes').value = ageDetails.minutes + " min";
    document.getElementById('result-seconds').value = ageDetails.seconds + " s";
});

function calculerAge(dateNaissance) {
    const dateActuelle = new Date();
    let years = dateActuelle.getFullYear() - dateNaissance.getFullYear();
    let months = dateActuelle.getMonth() - dateNaissance.getMonth();
    let days = dateActuelle.getDate() - dateNaissance.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(dateActuelle.getFullYear(), dateActuelle.getMonth(), 0);
        days += lastMonth.getDate(); // Get last month days
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const hours = dateActuelle.getHours() - dateNaissance.getHours();
    const minutes = dateActuelle.getMinutes() - dateNaissance.getMinutes();
    const seconds = dateActuelle.getSeconds() - dateNaissance.getSeconds();

    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds
    };
}