import express from 'express';
import PageGenerator from './util/pagerendering/PageGenerator.js';
import path from 'path';
import dotenv from 'dotenv';
import QuestionHandling from './util/openai/QuestionHandling.js';
import ContactMail from './util/mail/ContactMail.js';


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
        const languageToShow = language.charAt(0).toUpperCase() + language.slice(1);
        if (subject === 'general-knowledge') {
            const subjectToShow = subject.charAt(0).toUpperCase() + subject.slice(1);
            res.send(PageGenerator.exercisePage(subjectToShow, languageToShow));

        } else if (subject === 'variables') {
            const subjectToShow = subject.charAt(0).toUpperCase() + subject.slice(1);
            res.send(PageGenerator.exercisePage(subjectToShow, languageToShow));
        } else if (subject === 'this') {
            const subjectToShow = subject.charAt(0).toUpperCase() + subject.slice(1);
            res.send(PageGenerator.exercisePage(subjectToShow, languageToShow));

        } else if (subject === 'window') {
            const subjectToShow = subject.charAt(0).toUpperCase() + subject.slice(1);
            res.send(PageGenerator.exercisePage(subjectToShow, languageToShow));

        } else if (subject === 'dom') {
            const subjectToShow = subject.toUpperCase()
            res.send(PageGenerator.exercisePage(subjectToShow, languageToShow));

        } else if (subject === 'functions') {
            const subjectToShow = subject.charAt(0).toUpperCase() + subject.slice(1);
            res.send(PageGenerator.exercisePage(subjectToShow, languageToShow));

        } else if (subject === 'objects') {
            const subjectToShow = subject.charAt(0).toUpperCase() + subject.slice(1);
            res.send(PageGenerator.exercisePage(subjectToShow, languageToShow));

        } else if (subject === 'arrays') {
            const subjectToShow = subject.charAt(0).toUpperCase() + subject.slice(1);
            res.send(PageGenerator.exercisePage(subjectToShow, languageToShow));

        } else if (subject === 'if-else') {
            const subjectToShow = subject.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-');
            res.send(PageGenerator.exercisePage(subjectToShow, languageToShow));

        } else if (subject === 'fetch-async-await') {
            const subjectToShow1 = subject.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(', ');
            const subjectToShow2 = subjectToShow1.replace(/,(?!.*,)/gmi, ' &');
            res.send(PageGenerator.exercisePage(subjectToShow2, languageToShow));
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

app.post('/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;
    ContactMail.sendMail(name, email, subject, message, res,
        PageGenerator, process.env.MAIL_USER, process.env.MAIL_PASS);
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