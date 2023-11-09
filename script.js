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

const logEquipment = (equipment) => {
    let li = document.createElement('li')
    li.textContent = equipment
    document.querySelector('#equipmentSubmit').appendChild(li)
}