const express = require('express');


const app = express();

//TO: verbinde eine Datenbank 

//TODO: schreibe requests/responses


app.get('/', (req, res) => {
    res.send('request received');
});

app.listen(3050, "localhost", () => {
    console.log("bald ist Mittagspause")
})

