import express from 'express';
import PageGenerator from './util/PageGenerator.js';


const app = express();
app.use(express.json());



app.get('/', (req, res) => {
    res.send(PageGenerator.frontPage);
});


app.listen(process.env.PORT || 8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server is running on port ${8080}`);
});