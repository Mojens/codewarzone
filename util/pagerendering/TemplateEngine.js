import fs from "fs";
import path from "path";

const navbarPath = path.join(process.cwd(), 'public', 'components', 'navbar', 'navbar.html');
const footerPath = path.join(process.cwd(), 'public', 'components', 'footer', 'footer.html');
const exercisePath = path.join(process.cwd(), 'public', 'components', 'exercisePage', 'exercisePage.html');

function renderPage(page, config = {}) {
    const navbar = fs.readFileSync(navbarPath).toString()
        .replace("$TAB_TITLE", config.tabTitle || "Upper")
        .replace("$CSS_LINK", config.cssLink || "")

    const footer = fs.readFileSync(footerPath).toString()
        .replace("$SCRIPT_LINK", config.scriptLink || "");

    return navbar + page + footer;
};

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString()
};

function exercisePage(config = {}) {
    const navbar = fs.readFileSync(navbarPath).toString()
        .replace("$TAB_TITLE", config.tabTitle || "Upper")
        .replace("$CSS_LINK", config.cssLink || `<link rel="stylesheet" href="/pages/exercises/exercisegame.css">`)

    const exerciseComponent = fs.readFileSync(exercisePath).toString()
        .replaceAll("$SUBJECT", config.subject || "")
        .replaceAll("$LANGUAGE", config.language || "")

    const footer = fs.readFileSync(footerPath).toString()
        .replace("$SCRIPT_LINK", config.scriptLink || `<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.17.0/ace.js"></script>
        <script type="module" src="/pages/exercises/editor.js"></script>
        <script type="module" src="/pages/exercises/handleQuestionAndAnswer.js"></script>`);

    return navbar + exerciseComponent + footer;
}


export default {
    renderPage,
    readPage,
    exercisePage
};