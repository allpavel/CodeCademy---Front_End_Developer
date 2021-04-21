const myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === ".\\images\\01 - Raketa Rakia Bar.png") {
        myImage.setAttribute('src', ".\\images\\02 - Supa Star.png")
    }
    if (mySrc === ".\\images\\02 - Supa Star.png") {
        myImage.setAttribute('src', ".\\images\\03 - Izbata tavern.png")
    }
    if (mySrc === ".\\images\\03 - Izbata tavern.png") {
        myImage.setAttribute('src', ".\\images\\01 - Raketa Rakia Bar.png")
    }
};

const myButton = document.querySelector('button');
const myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Greeting, ' + myName;
};

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Greeting, ' + storedName;
};

myButton.onclick = function() {
    setUserName();
};
