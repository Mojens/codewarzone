import fs from "fs";
import path from "path";

const navbarPath = path.join(process.cwd(), 'public', 'components', 'navbar', 'navbar.html');
const footerPath = path.join(process.cwd(), 'public', 'components', 'footer', 'footer.html');

function renderPage(page, config = {}) {
    const navbar = fs.readFileSync(navbarPath).toString()
        .replace("$TAB_TITLE", config.tabTitle || "Upper")
        .replace("$CSS_LINK", config.cssLink || "")
        .replace("$SCRIPT_LINK", config.scriptLink || "");

    const footer = fs.readFileSync(footerPath).toString()
        .replace("$SCRIPT_LINK", config.scriptLink || "");

    return navbar + page + footer;
};

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString()
};


export default {
    renderPage,
    readPage,
};