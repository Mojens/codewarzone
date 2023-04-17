const editorElement = document.getElementById("editor");
let editor = ace.edit(editorElement);
editor.setTheme("ace/theme/cobalt");
editor.session.setMode("ace/mode/javascript");
editor.setOptions({
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible: true,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true
});

// Check if the screen width is less than or equal to 768 pixels (the width of most tablets and mobile devices)
if (window.innerWidth <= 768) {
    editor.setOption("fontSize", "12pt"); // set font size to 14pt on mobile devices
} else {
    editor.setOption("fontSize", "16pt"); // set font size to 16pt on desktop devices
}

export { editor };

