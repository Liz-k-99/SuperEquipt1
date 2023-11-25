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
    li.addEventListener('click', event => event.target.remove())
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
    li.addEventListener('click', event => event.target.remove())
}




//fetch food api data
// const result = fetch('https://world.openfoodfacts.org/api/v0/product/737628064502.json')
//https://pokeapi.co/api/v2/pokemon/

// result
//     .then(res => res.json())
//     .then((data) => {
//         console.log(data)
//         data.product.forEach(pokemon => {
//             const ul = document.querySelector('#')
//             const li = document.createElement('li')
//             li.innerHTML= pokemon.food_type.join(', ')
//             ul.appendChild(li)
//         })

//     })
    async function fetchFood() {
        console.log('fetchfood')
        const response = await fetch('https://world.openfoodfacts.org/api/v0/product/737628064502.json')
        const data = await response.json()
        console.log(data)
        renderFood(data.product)
    }

    function renderFood(foodList) {
        foodList.forEach(pokemon => {
            const ul = document.querySelector('#food')
            const li = document.createElement('li')
            li.innerHTML= pokemon.food_type
            ul.appendChild(li)
        })
    }
fetchFood()
    


//html post set up
document.querySelector('#searchForm').addEventListener('submit',
handleSubmit)

function handleSubmit (event) {
    event.preventDefault()
    let activityObj = {
        activity:event.target.activity.value,
        equipment:event.target.equipment.value
    }
    renderActivity(activityObj)
    addActivities(activityObj)
}

//access html
const renderActivity = (activitydemo) => {
    //build activity 
    let card = document.createElement('div')
    card.innerHTML = `
    <h3>${activitydemo.name}</h3>
    <ul>
    <li>${activitydemo.equipment}</li>
    </ul>`

    document.querySelector('#searchForm').appendChild(card)
}

//fetch db json data 
function getActivities() {
    fetch('http://localhost:3000/activities')
    .then(response => response.json())
    .then(activityData => activityData.forEach(activitydemo => renderActivity(activitydemo)))

}


//post data
function addActivities (activityObj) {
    fetch('http://localhost:3000/activities',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(activityObj)
    })
    .then(response => response.json())
    .then(activitydemo => console.log(activitydemo))

}

getActivities()
//addActivities()
//drop down menue for facts list
