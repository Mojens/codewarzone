import express from 'express';
import PageGenerator from './util/PageGenerator.js';
import path from 'path';
import dotenv from 'dotenv';
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
    res.send(PageGenerator.contactPage);
});
app.get('/exercises', (req, res) => {
    res.send(PageGenerator.exercisesPage);
  });
app.get('/exercises/:language/:subject?', (req, res) => {
    const language = req.params.language;
    const subject = req.params.subject;

    if (language === 'javascript') {
        if (subject === 'general-knowledge') {
            res.send({ message: 'General Knowledge' });

        } else if (subject === 'variables') {
            res.send({ message: 'Variables' });

        } else if (subject === 'this') {
            res.send({ message: 'This' });

        } else if (subject === 'window') {
            res.send({ message: 'Window' });

        } else if (subject === 'dom') {
            res.send({ message: 'DOM' });

        } else if (subject === 'functions') {
            res.send({ message: 'Functions' });

        } else if (subject === 'objects') {
            res.send({ message: 'Objects' });

        } else if (subject === 'arrays') {
            res.send({ message: 'Arrays' });

        } else if (subject === 'if-else') {
            res.send({ message: 'If-Else' });

        } else if (subject === 'fetch-async-await') {
            res.send({ message: 'Fetch, Async & Await' });
        }
        else {
            res.send(PageGenerator.javascriptExercisesPage);
        }
    } else {
        res.send(PageGenerator.exercisesPage);
    }
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