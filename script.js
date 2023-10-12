//this section will go in the journal to allow users to log where they have been
document.addEventListener('DOMContentLoaded', function () {
    const dataForm = document.getElementById('dataForm');
    const outputDiv = document.getElementById('output');

    let countryData = {
        countryNames: [],
        cityNames: [],
        townNames: []
    };

    // Function to update the display with the data
    function updateOutput() {
        outputDiv.textContent = JSON.stringify(countryData, null, 2);
    }

    updateOutput();

    dataForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const countriesInput = document.getElementById('countries');
        const citiesInput = document.getElementById('cities');
        const townsInput = document.getElementById('towns');

        const newCountries = countriesInput.value.split(',').map(country => country.trim());
        const newCities = citiesInput.value.split(',').map(city => city.trim());
        const newTowns = townsInput.value.split(',').map(town => town.trim());

        // Append new data to the existing data
        countryData.countryNames = countryData.countryNames.concat(newCountries);
        countryData.cityNames = countryData.cityNames.concat(newCities);
        countryData.townNames = countryData.townNames.concat(newTowns);

        // Clear the input fields
        countriesInput.value = '';
        citiesInput.value = '';
        townsInput.value = '';

        // Update the display with the combined data
        updateOutput();
    });
});


//console.log(placesVisited('Australi', 'Sydney','lane cove'));
let equipmentData;

const adventurePrep = (activity, equipment, food) => {
    equipmentData = {
        activityName: activity,
        equipmentName: equipment,
        foodName: food
    }
    return `Today I am going on a ${activity} adventure. I will need to pack ${equipment} and ${food}.`
}

//console.log(adventurePrep('camping', ['tent', 'shoes', 'map'], ['water','pasta']));
