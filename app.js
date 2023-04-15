import express from 'express';
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send({data: 'Hello World!'});
});




app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Server is running on port ${8080}`);
});