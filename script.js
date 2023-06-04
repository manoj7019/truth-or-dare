function submitForm() {
    document.getElementById('submitForm').submit();
}

let array;
let playerName;
let output = document.querySelector('#outputName');
const spinBtn = document.querySelector('#spinBtn');
const submitBtn = document.querySelector('#submitBtn');

function enableSubmit() {
    let names = document.getElementById('names');
    let isValid = true;

    for(var i=0; i<names.length; i++) {
        let changedNames = names[i];
        if(changedNames.value.trim() === '' || changedNames.value === null) {
            isValid = false;
            break;
        }
    }
    submitBtn.disabled = !isValid;
}


function setNames() {
    let names = document.getElementById('names').value;
    localStorage.setItem('names', names);
};

function getNames() {
    let names = localStorage.getItem('names');
    array = names.split(',');
    playerName = array[Math.floor(Math.random() * array.length)];
    console.log(playerName);
    output.textContent = `${playerName.toUpperCase()}`;
    tDoutput.textContent = `Choose 'Truth' or 'Dare'`;
};

const kidsTruth = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const kidsDare = ['z', 'y', 'x', 'w', 'v', 'u', 't'];

const adultsTruth = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const adultsDare = ['Z', 'Y', 'X', 'W', 'V', 'U', 'T'];

// const ageGroup = document.getElementById()

const tDoutput = document.querySelector('#selectTD');
const qnOutput = document.querySelector('#truthDareQn');

const ageSelect = document.getElementById('ageSelect');

function setValue() {
    const selectedAge = ageSelect.value;
    localStorage.setItem('selectedValue', selectedAge);
    // window.location.href = 'gamePage.html';
};

function getTruthQn() {
    const selectedAge = localStorage.getItem('selectedValue');
    console.log(selectedAge);
    let adultsTruthQn = adultsTruth[Math.floor(Math.random() * adultsTruth.length)];
    let kidsTruthQn = kidsTruth[Math.floor(Math.random() * kidsTruth.length)];

    if(selectedAge === 'Adults') {
        qnOutput.textContent = `"${adultsTruthQn}"`;
    } else if (selectedAge === 'Kids') {
        qnOutput.textContent = `"${kidsTruthQn}"`;
    } else {
        qnOutput.textContent = `Go select`;
    }
}

function getDareQn() {
    const selectedAge = localStorage.getItem('selectedValue');
    console.log(selectedAge);
    let adultsDareQn = adultsDare[Math.floor(Math.random() * adultsDare.length)];
    let kidsDareQn = kidsDare[Math.floor(Math.random() * kidsDare.length)];

    if(selectedAge === 'Adults') {
        qnOutput.textContent = `"${adultsDareQn}"`;
    } else if (selectedAge === 'Kids') {
        qnOutput.textContent = `"${kidsDareQn}"`;
    } else {
        qnOutput.textContent = `Go select`;
    }
}

function playSpin() {
    let spin = document.querySelector('#player');
    spin.play();
}

function playTruthDare() {
    let truthOrDare = document.querySelector('#truthDare');
    truthOrDare.play();
}