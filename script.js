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
    array = names.split(', ');
    playerName = array[Math.floor(Math.random() * array.length)];
    console.log(playerName);
    output.textContent = `"${playerName}"`;
};

const kidsTruth = [ 'King Kong (1933)',
'Citizen Kane (1941)',
'Vertigo (1958)',
'The Third Man (1949)',
'Floating Weeds (1959)',
'Casablanca (1942)',
'Singin\' in the Rain (1952)',
'Tokyo Story (1953)',
'Raging Bull (1980)',
'2001: A Space Odyssey (1968)',
'La Dolce Vita (1960)',
'Apocalypse Now (1979)',
'Aguirre: The Wrath of God (1972)',
'The General (1926)',
'The Tree of Life (2011)',
'The Decalogue (1989)',
'Synecdoche, New York (2008)'];

const kidsDare = [ 'King Kong (1933)',
'Citizen Kane (1941)',
'Vertigo (1958)',
'The Third Man (1949)',
'Floating Weeds (1959)',
'Casablanca (1942)',
'Singin\' in the Rain (1952)',
'Tokyo Story (1953)',
'Raging Bull (1980)',
'2001: A Space Odyssey (1968)',
'La Dolce Vita (1960)',
'Apocalypse Now (1979)',
'Aguirre: The Wrath of God (1972)',
'The General (1926)',
'The Tree of Life (2011)',
'The Decalogue (1989)',
'Synecdoche, New York (2008)'];

const adultsTruth = [ 'King Kong (1933)',
'Citizen Kane (1941)',
'Vertigo (1958)',
'The Third Man (1949)',
'Floating Weeds (1959)',
'Casablanca (1942)',
'Singin\' in the Rain (1952)',
'Tokyo Story (1953)',
'Raging Bull (1980)',
'2001: A Space Odyssey (1968)',
'La Dolce Vita (1960)',
'Apocalypse Now (1979)',
'Aguirre: The Wrath of God (1972)',
'The General (1926)',
'The Tree of Life (2011)',
'The Decalogue (1989)',
'Synecdoche, New York (2008)'];

const adultsDare = [ 'King Kong (1933)',
'Citizen Kane (1941)',
'Vertigo (1958)',
'The Third Man (1949)',
'Floating Weeds (1959)',
'Casablanca (1942)',
'Singin\' in the Rain (1952)',
'Tokyo Story (1953)',
'Raging Bull (1980)',
'2001: A Space Odyssey (1968)',
'La Dolce Vita (1960)',
'Apocalypse Now (1979)',
'Aguirre: The Wrath of God (1972)',
'The General (1926)',
'The Tree of Life (2011)',
'The Decalogue (1989)',
'Synecdoche, New York (2008)'];

// const ageGroup = document.getElementById()

let QnOutput = document.querySelector('#truthDareQn');

function getTruthQn() {
    let truthQn = adultsTruth[Math.floor(Math.random() * adultsTruth.length)];
    QnOutput.textContent = `${truthQn}`;
}

function getDareQn() {
    let DareQn = adultsDare[Math.floor(Math.random() * adultsTruth.length)];
    QnOutput.textContent = `${DareQn}`;
}


