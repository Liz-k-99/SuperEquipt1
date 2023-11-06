// const tableRow = (text) => {
//     let tableRows = document.createElement('td')
//     let tr = document.querySelector('table').appendChild(tableRows)
//     for(let i=0; i<=4;i++){
//         return tableRows[i]
//     }
//     tr.innerHTML(text)
// }
// onclick = tableRow

const tableColumn = (text) => {
    let tableColumns = document.createElement('tr');
    let tc = document.querySelector('table').appendChild(tableColumns)
    tc.innerHTML(text)
}

//onclick = tableColumn