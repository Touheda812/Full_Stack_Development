import express from "express"; 
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    // console.log(req.rawHeaders);
    res.send('<h1>Hello WOrld</h1>')
});

app.get('/about', (req, res)=>{
    // console.log(req.rawHeaders);
    res.send('<h1>Hello WOrld</h1><p>My name is Touheda</p>')
});

app.get('/contact', (req, res)=>{
    // console.log(req.rawHeaders);
    res.send('<h1>Contact Me</h1><p>Phone: +1 123456789</p>')
});

app.listen(port, () => {
    console.log(`The server has started on port ${port}`);
})