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

app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server is running on port ${8080}`);
});