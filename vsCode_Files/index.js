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

function dropdownBar() {
    const dropdown = document.querySelector('#dropdownList').classList.toggle('show')
    window.onclick = (event) => {
        if (!event.target.matches('.dropdownBtn')) {
            let dropdownMenue = dropdown
            for (let i = 0; i < dropdown.length; i++) {
                let openMenue = dropdownMenue[i]
                if (openMenue.classList.contains('show')) {
                    openMenue.classList.remove('show')
                }
            }
        }
    }
}

// https://pokeapi.co/api/v2/pokemon/


//pokemon test api
//     async function fetchPokemon() {
//         const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
//         const data = await response.json()
//         console.log(data)
//         renderPokemonData(data.results)
//     }

//     function renderPokemonData(pokemonList) {
//         pokemonList.forEach(pokemon => {
//             const ul = document.querySelector('#pleaseWork')
//             const li = document.createElement('li')
//             li.innerHTML= pokemon.name
//             ul.append(li)
//         })
//     }
// fetchPokemon()

document.addEventListener('DOMContentLoaded', () => {
    const foodList = document.getElementById('foodList');
    const foodSearchBtn = document.querySelector('#findFood')
    foodSearchBtn.addEventListener('click', (event) => {
        searchFood()
    })
async function getFood() {
    try {
        const searchTerm = document.getElementById('searchInput').value;
        const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&page_size=10&json=true`;
        const response = await fetch(url);
        const result = await response.json();
        displayFoodResults(result);
    } catch (error) {
        console.error(error);
    }
}
function searchFood() {
    foodList.textContent = ''
        getFood();
    
}

function displayFoodResults(result) {
    const foodList = document.getElementById('foodList');

    if (!result.products || result.products.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No results found';
        foodList.appendChild(li);
        return; 
    }

    result.products.slice(0, 3).forEach(product => {
        const li = document.createElement('li');
        const foodLabel = document.createElement('span');
        const foodImage = document.createElement('img');
        const nutrients = document.createElement('p');
        foodLabel.textContent = product.product_name;
        foodImage.src = product.image_url;

        // Extract nutrient information and format it
        const nutrientInfo = product.nutriments;
        const formattedNutrients = Object.entries(nutrientInfo)
            .map(([key, value]) => `${key}: ${value}`)
            .join(`\n`);
        nutrients.textContent = formattedNutrients;

        li.appendChild(foodImage);
        li.appendChild(foodLabel);
        li.appendChild(nutrients);
        foodList.appendChild(li);


    })
}
})

const form3 = document.querySelector('#searchForm')
form3.addEventListener('submit', (event) => {
    event.preventDefault()
    const activity5 = demo1.value
    const equipment7 = demo2.value
    postNewAdventure(activity5, equipment7)
    form3.reset()
    // console.log(activity5, equipment7)
})


async function postNewAdventure(activity5, equipment7) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            acti: activity5,
            equip: equipment7
        })
    }

    const response = await fetch('http://localhost:3000', options)
    const data = await response.json()
    console.log(data)
}

