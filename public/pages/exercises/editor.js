const editorElement = document.getElementById("editor");
let editor = ace.edit(editorElement)
editor.setTheme("ace/theme/cobalt")
editor.session.setMode("ace/mode/javascript")
editor.setOptions({
    fontSize: "16pt",
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible: true,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true
})


export { editor }
