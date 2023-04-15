import path from 'path';
import TemplateEngine from './TemplateEngine.js';

const frontPagePath = path.join(process.cwd(), 'public', 'pages', 'frontpage', 'frontpage.html');
const frontPage = TemplateEngine.renderPage(TemplateEngine.readPage(frontPagePath), {
    tabTitle: "Frontpage",
});

export default {
    frontPage
};