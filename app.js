import express from 'express';
import PageGenerator from './util/pagerendering/PageGenerator.js';
import path from 'path';
import dotenv from 'dotenv';
import QuestionHandling from './util/openai/QuestionHandling.js';
import ContactMail from './util/mail/ContactMail.js';
import ExerciseRender from './util/pagerendering/ExerciseRender.js';


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
app.get('/exercises/:language?/:subject?', (req, res) => {
    ExerciseRender.renderExercisePage(req, res);
});

app.post("/api/generatequestion", async (req, res) => {
    const { language, subject, difficulty } = req.body;
    const question = await QuestionHandling.createQuestion(language, subject, difficulty);
    res.json({ data: question });
});

app.post('/api/validatequestion', async (req, res) => {
    const { question, answer } = req.body;
    try {
        const result = await QuestionHandling.validateQuestion(question, answer);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.post('/api/contact', async (req, res) => {
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