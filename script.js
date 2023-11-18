//adds users activities 
const form1 = document.querySelector('#activityForm')
    form1.addEventListener('submit', (event) => {
    event.preventDefault()
    logActivity(event.target.activities.value)
    form1.reset()
});

const logActivity = (activity) => {
    let li = document.createElement('li')
    li.textContent = activity
    document.querySelector('#activitySubmit').appendChild(li)
}

//adds users equipment 
const form2 = document.querySelector('#equipmentForm')
form2.addEventListener('submit', (event) => {
    event.preventDefault()
    logEquipment(event.target.equipment.value)
    form2.reset()
});

const logEquipment = (equipment1) => {
    let li = document.createElement('li')
    li.textContent = equipment1
    document.querySelector('#equipmentSubmit').appendChild(li)
}

//loop trough the food api
async function fetchAPI (url)  {
 const response = await fetch(url)

 let data = await response.json()
 console.log(data)
        data.product.forEach(food => {
            const ul = document.querySelector('#foodList')
            const li = document.createElement('li')
            li.textContent = food.nutrient_levels
        });
        
}

console.log(fetchAPI('https://world.openfoodfacts.org/api/v0/product/737628064502.json'))
// console.log(fetchAPI('http://127.0.0.1:3000/users'))

//add drop down menue for facts list
// const dropDownFactBar = () => {
// let facts = [
//     '30 days is the approximate time one can live without food',
//     'Add 37 to the number of chirps a cricket makes in 15 seconds to determine the approximate temperature',
//     'Humans should have eight cups of water each day',
//     'The body loses heat twenty-five times faster in water than it does in air',
//     'Three is the universal signal number for distress.',
//     'At the moment you realize you are lost you should S.T.O.P. (Sit, Think, Observe, and Plan)',
//     '1 WHISTLE BLAST is International Whistle Code for “Where are you?”'
//   ];
//   facts.forEach(fact => {
//     let option = document.createElement('option');
//     option.textContent = fact;
//     adventureFacts.appendChild(option);
//   });

// const factList = document.getElementById('factList');
// adventureFacts.addEventListener('change', element => {
//     factList.textContent = element.target.value
//     factList.style.color = 'red'

// })
// }
// dropDownFactBar()
