import express from 'express';
import TemplateEngine from './util/TemplateEngine.js';

const app = express();
app.use(express.json());

const frontPage = TemplateEngine.renderPage(TemplateEngine.readPage("./pages/frontpage/frontpage.html"), {
    tabTitle: "Frontpage",
});



app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(frontPage);
});


app.listen(process.env.PORT || 8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server is running on port ${8080}`);
});