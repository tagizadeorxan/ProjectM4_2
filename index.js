let select = document.querySelector("#select");
select.addEventListener("change", getdata);
let input = document.getElementById("input");
input.addEventListener("change",editdata);
let sorthigh = document.getElementById("sorthigh");
let sortlow = document.getElementById("sortlow");
sorthigh.addEventListener("click",sorthighest);
sortlow.addEventListener("click",sortlowest);

let currencies = [];
let datas = {};
async function getdata(evt) {
    evt.preventDefault();
    datas = {};
    let currency = evt.target.value;
    await fetch(`https://api.ratesapi.io/api/latest?base=${currency}`).then(data => data.json()).then((data) => {
        datas = data.rates;
    })
    console.log(datas);
    showconverter(evt);
}

function showconverter(evt) {
    evt.preventDefault();
    let currency = evt.target.value;
    currencies = [];
    let options = document.querySelectorAll("option");
    let table = document.getElementById("table");
    table.innerHTML = "";
    options.forEach(element => {
        if (element.value != currency) {
            currencies.push(element);
        }
    })
    currencies.shift();
    for (let i = 0; i < currencies.length; i++) {
        let row = table.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = currencies[i].value;
        cell2.innerHTML = Number(datas[currencies[i].value]).toFixed(2);
    }
    let container = document.getElementById("container");
    container.appendChild(table);

}



function editdata() {
    let table = document.getElementById("table");
    table.innerHTML = "";
    for (let i = 0; i < currencies.length; i++) {
        let row = table.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = currencies[i].value;
        cell2.innerHTML = (Number(datas[currencies[i].value])*Number(input.value)).toFixed(2);
    }
    let container = document.getElementById("container");
    container.appendChild(table);
}


function sorthighest(){
let table = document.getElementById("table");
let rows = document.querySelectorAll("tr");
let arrayRows=[];
rows.forEach(element=> arrayRows.push(element));
arrayRows.sort((a,b)=> Number(a.textContent.substring(3)) >Number(b.textContent.substring(3)) ? -1 :1)
arrayRows.forEach(element => table.appendChild(element));
}

function sortlowest(){
let table = document.getElementById("table");
let rows = document.querySelectorAll("tr");
let arrayRows=[];
rows.forEach(element=> arrayRows.push(element));
arrayRows.sort((a,b)=> Number(a.textContent.substring(3)) <Number(b.textContent.substring(3)) ? -1 :1)
arrayRows.forEach(element => table.appendChild(element));
}



function deleteRow(){

}