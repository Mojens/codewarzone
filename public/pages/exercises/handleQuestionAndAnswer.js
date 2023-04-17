import { editor } from "./editor.js";
// Get the dropdown element and the container for the "get a new question" button
const difficultyDropdown = document.getElementById('difficulty');
const newQuestionContainer = document.createElement('div');
newQuestionContainer.classList.add('new-question-container');
const newQuestionButton = document.createElement('button');
newQuestionButton.innerText = 'Get a new question';

// Add event listener to the dropdown to show the "get a new question" button when it changes
difficultyDropdown.addEventListener('change', () => {
    if (!newQuestionContainer.contains(newQuestionButton)) {
        newQuestionContainer.appendChild(newQuestionButton);
        document.querySelector('.options').appendChild(newQuestionContainer);
    }
});

// Add event listener to the "get a new question" button to hide it when clicked
newQuestionButton.addEventListener('click', () => {
    newQuestionContainer.removeChild(newQuestionButton);
});


document.getElementById("run-code").addEventListener("click", () => {
    let code = editor.getValue();

    let output = '';
    let originalLog = console.log;
    console.log = function (value) {
        output += value + '\n';
        originalLog.apply(console, arguments);
    };

    try {
        eval(code);
        document.getElementById('output').textContent = output;
    } catch (err) {
        document.getElementById('output').textContent = err.message;
    }

    console.log = originalLog;
});
document.getElementById("clearBtn").addEventListener("click", () => {
    document.getElementById('output').textContent = '';
})

let questionElement = document.getElementById("question")
let answer = editor.getValue()