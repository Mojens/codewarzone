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

const contactPagePath = path.join(process.cwd(), 'public', 'pages', 'contact', 'contact.html');
const contactPage = TemplateEngine.renderPage(TemplateEngine.readPage(contactPagePath), {
    tabTitle: `Contact - CodeWarZone`,
    cssLink: `<link rel="stylesheet" href="/pages/contact/contact.css">`,
});

export default {
    frontPage,
    aboutPage,
    contactPage,
};