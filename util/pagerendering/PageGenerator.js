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
function contactPage(errorMessage = '', successMessage = '') {
    return TemplateEngine.renderPage(TemplateEngine.readPage(contactPagePath), {
        tabTitle: `Contact - CodeWarZone`,
        cssLink: `<link rel="stylesheet" href="/pages/contact/contact.css">`,
        scriptLink: `
        <script>
                    const errorResponse = document.getElementById('contact-error-response');
                    if ('${errorMessage}' !== '') {
                    errorResponse.style.display = 'block';
                    errorResponse.textContent = '${errorMessage}';
                    }
                </script>
                <script>
            const successResponse = document.getElementById('contact-success-response');
            if ('${successMessage}' !== '') {
            successResponse.style.display = 'block';
            successResponse.textContent = '${successMessage}';
            }
        </script>`,
    });
}

const exercisesPagePath = path.join(process.cwd(), 'public', 'pages', 'exercises', 'exercises.html');
const exercisesPage = TemplateEngine.renderPage(TemplateEngine.readPage(exercisesPagePath), {
    tabTitle: `Exercises - CodeWarZone`,
    cssLink: `<link rel="stylesheet" href="/pages/exercises/exercises.css">`,
});

const javascriptExercisesPagePath = path.join(process.cwd(), 'public', 'pages', 'exercises', 'javascript-exercises', 'javascript-exercises.html');
const javascriptExercisesPage = TemplateEngine.renderPage(TemplateEngine.readPage(javascriptExercisesPagePath), {
    tabTitle: `JavaScript Exercises - CodeWarZone`,
    cssLink: `<link rel="stylesheet" href="/pages/exercises/exercises.css">`,
});

const htmlExercisesPagePath = path.join(process.cwd(), 'public', 'pages', 'exercises', 'html-exercises', 'html-exercises.html');
const hmtlExercisesPage = TemplateEngine.renderPage(TemplateEngine.readPage(htmlExercisesPagePath), {
    tabTitle: `HTML Exercises - CodeWarZone`,
    cssLink: `<link rel="stylesheet" href="/pages/exercises/exercises.css">`,
});

const cssExercisesPagePath = path.join(process.cwd(), 'public', 'pages', 'exercises', 'css-exercises', 'css-exercises.html');
const cssExercisesPage = TemplateEngine.renderPage(TemplateEngine.readPage(cssExercisesPagePath), {
    tabTitle: `CSS Exercises - CodeWarZone`,
    cssLink: `<link rel="stylesheet" href="/pages/exercises/exercises.css">`,
});

const pageNotFoundPath = path.join(process.cwd(), 'public', 'pages', '404', '404.html');
const pageNotFound = TemplateEngine.renderPage(TemplateEngine.readPage(pageNotFoundPath), {
    tabTitle: `Page not found - CodeWarZone`,
    cssLink: `<link rel="stylesheet" href="/pages/404/404.css">`,
});

function exercisePage(subject, language) {
    return TemplateEngine.exercisePage({
        tabTitle: `JavaScript Variables - CodeWarZone`,
        subject: subject,
        language: language,
    });
}


export default {
    frontPage,
    aboutPage,
    contactPage,
    exercisesPage,
    pageNotFound,
    javascriptExercisesPage,
    exercisePage,
    hmtlExercisesPage,
    cssExercisesPage,
};