import path from 'path';
import TemplateEngine from './TemplateEngine.js';

const frontPagePath = path.join(process.cwd(), 'public', 'pages', 'frontpage', 'frontpage.html');
const frontPage = TemplateEngine.renderPage(TemplateEngine.readPage(frontPagePath), {
    tabTitle: `CodeWarZone`,
});

const aboutPagePath = path.join(process.cwd(), 'public', 'pages', 'about', 'about.html');
const aboutPage = TemplateEngine.renderPage(TemplateEngine.readPage(aboutPagePath), {
    tabTitle: `About - CodeWarZone`,
});

export default {
    frontPage,
    aboutPage,
};