let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.textContent = count
}

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")

let name = "Sana Asaf welcome to this week's  "
let greeting = "Assignments  "

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = name + greeting



function save() {
  let countStr = count + " - "    
  saveEl.textContent += countStr    
  console.log(count)
  countEl.textContent = 0
  count = 0
}