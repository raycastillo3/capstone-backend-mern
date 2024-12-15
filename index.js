const express = require('express'); 
const app = express(); 
const PORT = 5050; 

app.get("/", (req, res) =>{
    res.send("Welcome to API :)")
})

app.listen(PORT, () => {
    console.info(`Server listening on PORT: ${PORT}`)
})