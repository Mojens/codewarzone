import path from 'path';
import TemplateEngine from './TemplateEngine.js';

const frontPagePath = path.join(process.cwd(), 'public', 'pages', 'frontpage', 'frontpage.html');
const frontPage = TemplateEngine.renderPage(TemplateEngine.readPage(frontPagePath), {
    tabTitle: `CodeWarZone`,
    cssLink: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">`,
    scriptLink: `
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://www.mattboldt.com/demos/typed-js/js/typed.custom.js"></script>
    <script src="/pages/frontpage/frontpage.js"></script>
    `,
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

const exercisesPagePath = path.join(process.cwd(), 'public', 'pages', 'exercises', 'exercises.html');
const exercisesPage = TemplateEngine.renderPage(TemplateEngine.readPage(exercisesPagePath), {
    tabTitle: `Exercises - CodeWarZone`,
    cssLink: `<link rel="stylesheet" href="/pages/exercises/exercises.css">`,  
});

const javascriotExercisesPagePath = path.join(process.cwd(), 'public', 'pages', 'javascript-exercises', 'javascript-exercises.html');
const javascriotExercisesPage = TemplateEngine.renderPage(TemplateEngine.readPage(javascriotExercisesPagePath), {
    tabTitle: `JavaScript Exercises - CodeWarZone`,
    cssLink: `<link rel="stylesheet" href="/pages/exercises/exercises.css">`, 
});

const pageNotFoundPath = path.join(process.cwd(), 'public', 'pages', '404', '404.html');
const pageNotFound = TemplateEngine.renderPage(TemplateEngine.readPage(pageNotFoundPath), {
    tabTitle: `Page not found - CodeWarZone`,
    cssLink: `<link rel="stylesheet" href="/pages/404/404.css">`,
});

export default {
    frontPage,
    aboutPage,
    contactPage,
    exercisesPage,
    pageNotFound,
    javascriotExercisesPage
};