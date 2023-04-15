import express from 'express';
import TemplateEngine from './util/TemplateEngine.js';
import path from 'path';

const app = express();
app.use(express.json());


const frontPagePath = path.join(process.cwd(), 'public', 'pages', 'frontpage', 'frontpage.html');
const frontPage = TemplateEngine.renderPage(TemplateEngine.readPage(frontPagePath), {
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