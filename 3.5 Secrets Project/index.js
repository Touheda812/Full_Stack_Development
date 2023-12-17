//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import bodyParser from "body-parser";
import express from "express"
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000; 

let userIsAuthorized = false; 

app.use(bodyParser.urlencoded({ extended: true }))

// ------------can be copies (above part) -----------------
//now write the function 
function checkPass(req, res, next){
    const password = req.body["password"];
    if(password === "ILoveProgramming"){
        userIsAuthorized = true; 
    }
    next()
}
app.use(checkPass)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/check", (req, res) => {
    if(userIsAuthorized){
        res.sendFile(__dirname + "/public/secret.html")
    }
    else{
        res.sendFile(__dirname + "/public/index.html")
    }
})

app.listen(port, ()=>{
    console.log(`Listening on Port, ${port}`);
})