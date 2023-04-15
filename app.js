import express from 'express';
import TemplateEngine from './util/TemplateEngine.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const frontPage = TemplateEngine.renderPage(TemplateEngine.readPage("./public/pages/frontpage/frontpage.html"), {
    tabTitle: "Frontpage",
});



app.get('/test', (req, res) => {
    res.send(frontPage);
});


app.listen(process.env.PORT || 8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server is running on port ${8080}`);
});