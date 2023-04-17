import { editor } from "./editor.js";

const difficultyDropdown = document.getElementById('difficulty');
const newQuestionContainer = document.createElement('div');
newQuestionContainer.classList.add('new-question-container');
const newQuestionButton = document.createElement('button');
newQuestionButton.innerText = 'Get a new question';

difficultyDropdown.addEventListener('change', () => {
    if (!newQuestionContainer.contains(newQuestionButton)) {
        newQuestionContainer.appendChild(newQuestionButton);
        document.querySelector('.options').appendChild(newQuestionContainer);
    }
});

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