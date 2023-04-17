import PageGenerator from "./PageGenerator.js";

function renderExercisePage(req, res) {
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
        } else {
            res.send(PageGenerator.javascriptExercisesPage);
        }
    } else if (language === 'html') {
        const languageToShow = language.toUpperCase();
        if (subject === 'html-css-js') {
            const subjectToShow = subject.split("-").map(word => word.toUpperCase()).join(", ");
            res.send(PageGenerator.exercisePage(subjectToShow, languageToShow));
        } else if (subject === 'head-body') {
            const subjectToShow = subject.replace("-", " & ").split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
            res.send(PageGenerator.exercisePage(subjectToShow, languageToShow));
        } else if (subject === 'tags') {
            const subjectToShow = subject.charAt(0).toUpperCase() + subject.slice(1);
            res.send(PageGenerator.exercisePage(subjectToShow, languageToShow));
        } else if (subject === 'elements') {
            const subjectToShow = subject.charAt(0).toUpperCase() + subject.slice(1);
            res.send(PageGenerator.exercisePage(subjectToShow, languageToShow));
        } else if (subject === 'nesting') {
            const subjectToShow = subject.charAt(0).toUpperCase() + subject.slice(1);
            res.send(PageGenerator.exercisePage(subjectToShow, languageToShow));
        } else if (subject === 'attributes') {
            const subjectToShow = subject.charAt(0).toUpperCase() + subject.slice(1);
            res.send(PageGenerator.exercisePage(subjectToShow, languageToShow));
        } else if (subject === 'id-class') {
            const subjectToShow = subject.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
            res.send(PageGenerator.exercisePage(subjectToShow, languageToShow));
        } else if (subject === 'elements') {
            const subjectToShow = subject.charAt(0).toUpperCase() + subject.slice(1);
            res.send(PageGenerator.exercisePage(subjectToShow, languageToShow));
        } else if (subject === 'div-span') {
            const subjectToShow = subject.replace("-", " & ").split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
            res.send(PageGenerator.exercisePage(subjectToShow, languageToShow));
        } else if (subject === 'tables') {
            const subjectToShow = subject.charAt(0).toUpperCase() + subject.slice(1);
            res.send(PageGenerator.exercisePage(subjectToShow, languageToShow));
        } else if (subject === 'semantic') {
            const subjectToShow = subject.charAt(0).toUpperCase() + subject.slice(1);
            res.send(PageGenerator.exercisePage(subjectToShow, languageToShow));
        } else {
            res.send(PageGenerator.hmtlExercisesPage);
        }
    } else if (language === 'css') {
        const languageToShow = language.toUpperCase();
        if (subject === 'fundamentals') {
            const subjectToShow = subject.charAt(0).toUpperCase() + subject.slice(1);
            res.send(PageGenerator.exercisePage(subjectToShow, languageToShow));
        } else {
            res.send(PageGenerator.cssExercisesPage)
        }
    }
    else {
        res.send(PageGenerator.hmtlExercisesPage);
    }
}

export default {
    renderExercisePage
}