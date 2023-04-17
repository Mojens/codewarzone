const editorElement = document.getElementById("editor");
let editor = ace.edit(editorElement)
editor.setTheme("ace/theme/cobalt")
editor.session.setMode("ace/mode/javascript")

export { editor }
