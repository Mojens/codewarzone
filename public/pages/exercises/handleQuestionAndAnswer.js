import { editor } from "./editor.js";
document.getElementById("run-code").addEventListener("click", () => {
     let code = editor.getValue();

     let output = '';
     let originalLog = console.log;
     console.log = function(value) {
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

let questionElement = document.getElementById("question")
let answer = editor.getValue()