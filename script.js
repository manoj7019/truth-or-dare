function submitForm() {
    document.getElementById('submitForm').submit();
}

let array;
let playerName;
let output = document.querySelector('#outputName');
const spinBtn = document.querySelector('#spinBtn');
const submitBtn = document.querySelector('#submitBtn');

function setNames() {
    let names = document.getElementById('names').value;
    localStorage.setItem('names', names);
};

function getNames() {
    let names = localStorage.getItem('names');
    array = names.split(', ');
    playerName = array[Math.floor(Math.random() * array.length)];
    console.log(playerName);
    output.textContent = `${playerName}`;
};




