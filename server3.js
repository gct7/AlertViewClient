import express from "express";

const app = express();
//pug
app.set('view engine', 'ejs');

import userRouter from './routes/users.js';
app.use('/users', userRouter);


app.get('/', (req, res) => {
    console.log('Home Page');
    // res.sendStatus(200);
    // res.send('Hi there!');
    //res.status(200).send('Hi there!');
    
    // res.status(500).json({message: 'Server Error'});

    //res.json({message: "Hello World from Express!"});

    // res.sendFile('index.html', {root: __dirname});

    //res.download('./index.js');

    res.render("index", {title: "Home Page", message: "Hello World from Express!"});

});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});