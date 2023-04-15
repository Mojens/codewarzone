import express from 'express';
const app = express();
app.use(express.json());


app.get('/test', (req, res) => {
    return res.status(200).json({
        title: "Express Testing",
        message: "The app is working properly!",
      });
});


app.listen(process.env.PORT || 8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server is running on port ${8080}`);
});