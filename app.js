const textElement = document.querySelector('[data-text]');
const button = document.querySelector('[data-button]');
const input = document.querySelector('[data-input]');

const textArray = ['Hello', 'Please', 'Check', 'This', 'Out'];
const newTextArray = []; // array to push the letters into it

let currentTextIndex = 0;// traverse individual index of the word
let currentWordIndex = 0; // traverse word
let typeTimer;
const textArrayLength = textArray.length;
const FUNC_TIME = 200;
let isLetterRemoval = false;

input.addEventListener('input', updateValue);
function updateValue(e){
    button.addEventListener('click', handleInput(e.target.value))
}
function handleInput(value){
    console.log(value);
}


// primary function to create the typewriter effect
function typeWriterEffect(){
    // checking till the word length of the array length
    if(currentWordIndex < textArrayLength){
        if(!isLetterRemoval && currentTextIndex < textArray[currentWordIndex].length){
            newTextArray.push(textArray[currentWordIndex][currentTextIndex]);
            currentTextIndex = currentTextIndex + 1;
            textElement.textContent = newTextArray.join('');
        }
        if(isLetterRemoval && currentTextIndex <= textArray[currentWordIndex].length){
            newTextArray.pop(textArray[currentWordIndex][currentTextIndex]);
            currentTextIndex = currentTextIndex - 1;
            textElement.textContent = newTextArray.join('');
        }
        // reverse removal of the text
        if(currentTextIndex === textArray[currentWordIndex].length){
            isLetterRemoval = true;
        }
        if(currentTextIndex === 0){
            isLetterRemoval = false;
            currentWordIndex++;
        }
    };
};

typeTimer = setInterval(typeWriterEffect, FUNC_TIME);

