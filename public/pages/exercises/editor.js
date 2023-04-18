const editorElement = document.getElementById("editor");
const language = window.location.href.split("/")[4];
let editor = ace.edit(editorElement);
const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (darkMode) {
    editor.setTheme("ace/theme/dracula");
} else {
    editor.setTheme("ace/theme/github");
}
if (language === "html") {
    editor.session.setMode("ace/mode/html");
} else if (language === "javascript") {
    editor.session.setMode("ace/mode/javascript");
} else if (language === "css") {
    editor.session.setMode("ace/mode/css");
} else if (language === "python") {
    editor.session.setMode("ace/mode/python");
} else if (language === "java") {
    editor.session.setMode("ace/mode/java");
}
editor.setOptions({
    showLineNumbers: true,
    showGutter: true,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true
});

// Check if the screen width is less than or equal to 768 pixels (the width of most tablets and mobile devices)
if (window.innerWidth <= 768) {
    editor.setOption("fontSize", "12pt"); // set font size to 14pt on mobile devices
} else {
    editor.setOption("fontSize", "14pt"); // set font size to 16pt on desktop devices
}

export { editor };

