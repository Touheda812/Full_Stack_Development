import express from "express"

const app = express(); 
const port = 3000;

app.get('/', (res, req) =>{
    const today = new Date("December 03, 2023 11:13:00");
    const day = today.getDay();
    
    // console.log(day);
    let type = "a weekday"
    let adv = "it's time to work hard"

if(day === 0 || day === 6){
    type = "the weekend";
    adv = "it's time to have some fun"

}

    req.render("index.ejs", {
        dayType: type,
        advice: adv
    })
})

app.listen(port, ()=>{
    console.log(`Serving running on port ${port}`);
})