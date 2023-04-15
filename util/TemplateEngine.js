import fs from "fs";

function renderPage(page, config = {}) {

    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
        .replace("$TAB_TITLE", config.tabTitle || "Upper")
        .replace("$CSS_LINK", config.cssLink || "")
        .replace("$SCRIPT_LINK", config.scriptLink || "");

    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
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