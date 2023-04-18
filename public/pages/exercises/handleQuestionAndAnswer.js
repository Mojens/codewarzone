import { editor } from "./editor.js";

setTimeout(() => {
    generateQuestion();
    document.querySelector('.exercise-window').classList.remove('animate');
}, 500);

document.getElementById("skip-btn").addEventListener("click", () => {
    document.getElementById("response").style.backgroundColor = "";
    document.getElementById("response-message").textContent = "";
    document.getElementById('question').innerHTML = DOMPurify.sanitize(`<p>Loading......</p>`);
    generateQuestion();
});

document.getElementById("submitAnswer").addEventListener("click", () => {
    validateQuestion();
})

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
    difficultyDropdown.value = difficultyDropdown.value;
});

newQuestionButton.addEventListener('click', () => {
    newQuestionContainer.removeChild(newQuestionButton);
    document.getElementById("response").style.backgroundColor = "";
    document.getElementById("response-message").textContent = "";
    document.getElementById('question').innerHTML = DOMPurify.sanitize(`<p>Loading......</p>`);
    document.getElementById('submitAnswer').style.display = 'block';
    generateQuestion();
});

document.getElementById("run-code").addEventListener("click", () => {
    console.log(questionElement.textContent.trimStart().trimEnd());
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
    editor.setValue('// Type your answer here');
})

async function generateQuestion() {
    const difficulty = difficultyDropdown.value;
    const language = document.getElementById('language').textContent.split(":")[1].trimStart().trimEnd();
    const subject = document.getElementById('subject').textContent.split(":")[1].trimStart().trimEnd()
    await fetch('/api/generatequestion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            language,
            subject,
            difficulty
        })
    })
        .then(res => res.json())
        .then(data => {
            document.getElementById('question').innerHTML = DOMPurify.sanitize(`<p>${data.data}</p>`);
        });
}
async function validateQuestion() {
    let questionElement = document.getElementById("question")
    let question = questionElement.textContent.trimStart().trimEnd()
    let answer = editor.getValue()

    await fetch('/api/validatequestion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            question,
            answer
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.result === 'Answer is correct!') {
                document.getElementById("response").style.backgroundColor = "green";
                document.getElementById("response-message").textContent = "Answer is correct!!";
                document.getElementById("submitAnswer").style.display = "none";
                newQuestionContainer.appendChild(newQuestionButton);
                document.querySelector('.options').appendChild(newQuestionContainer);
            } else {
                document.getElementById("response").style.backgroundColor = "red";
                document.getElementById("response-message").textContent = "Answer is incorrect! Try again, or skip the question";
            }
        });
}






let questionElement = document.getElementById("question")
let question = questionElement.textContent.trimStart().trimEnd()
let answer = editor.getValue()

