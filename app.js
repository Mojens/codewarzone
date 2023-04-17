import express from 'express';
import PageGenerator from './util/PageGenerator.js';
import path from 'path';
import dotenv from 'dotenv';
import QuestionHandling from './util/openai/QuestionHandling.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), '/public')));



app.get('/', (req, res) => {
    res.send(PageGenerator.frontPage);
});
app.get('/about', (req, res) => {
    res.send(PageGenerator.aboutPage);
});
app.get('/contact', (req, res) => {
    res.send(PageGenerator.contactPage());
});
app.get('/exercises', (req, res) => {
    res.send(PageGenerator.exercisesPage);
});
app.get('/exercises/:language/:subject?', (req, res) => {
    const language = req.params.language;
    const subject = req.params.subject;

    if (language === 'javascript') {
        if (subject === 'general-knowledge') {
            res.send(PageGenerator.javascriptExercisesPage);

        } else if (subject === 'variables') {
            res.send(PageGenerator.javascriptExercisesPage);

        } else if (subject === 'this') {
            res.send(PageGenerator.javascriptExercisesPage);

        } else if (subject === 'window') {
            res.send(PageGenerator.javascriptExercisesPage);

        } else if (subject === 'dom') {
            res.send(PageGenerator.javascriptExercisesPage);

        } else if (subject === 'functions') {
            res.send(PageGenerator.javascriptExercisesPage);

        } else if (subject === 'objects') {
            res.send(PageGenerator.javascriptExercisesPage);

        } else if (subject === 'arrays') {
            res.send(PageGenerator.javascriptExercisesPage);

        } else if (subject === 'if-else') {
            res.send(PageGenerator.javascriptExercisesPage);

        } else if (subject === 'fetch-async-await') {
            res.send(PageGenerator.javascriptExercisesPage);
        }
        else {
            res.send(PageGenerator.javascriptExercisesPage);
        }
    } else {
        res.send(PageGenerator.exercisesPage);
    }
});

app.post("/generatequestion", async (req, res) => {
    const { language, subject, difficulty } = req.body;
    console.log(language, subject, difficulty)
    const question = await QuestionHandling.createQuestion(language, subject, difficulty);
    res.json({ question });
});

app.post('/validatequestion', async (req, res) => {
    const { question, answer } = req.body;
    try {
        const result = await QuestionHandling.validateQuestion(question, answer);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});






app.post('/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    /*
    Skal ændres til status osv, mangler bare nodemailer
    if (name.length < 2) {
        const errorMessage = 'An has occurred. Please try again later.';
        res.send(PageGenerator.contactPage(errorMessage, ''));
        return;
    } else {
        const successMessage = 'Your message has been sent!';
        res.send(PageGenerator.contactPage('', successMessage));
    }
    */

    const errorMessage = 'An has occurred. Please try again later.';
    res.send(PageGenerator.contactPage(errorMessage, ''));
});

app.get('*', (req, res) => {
    res.send(PageGenerator.pageNotFound);
});

app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server is running on port ${8080}`);
});