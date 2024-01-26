let totalEl = document.getElementById("total")
let gross = 0;

let countEl = document.getElementById("count-el")
let count = 0


function increment() {
    count += 1
    countEl.textContent = count
    gross = gross + 1
    totalEl.textContent = gross
    console.log(count)
}

let countDec = document.getElementById("count-dec")
let countLess = 0


function decrement() {
    countLess += 1
    countDec.innerText = countLess
    gross -= 1
    totalEl.textContent = gross
    console.log(countLess)
}

function update() {
    gross = count - countLess
    totalEl.textContent = gross
}

let saveEl=document.getElementById("save-el")
function save() {
    let grossStr =  " " + gross + " - "
    saveEl.textContent += grossStr
    countEl.textContent = 0
    countDec.textContent = 0
    countLess = 0
    count = 0
    gross = 0
}
