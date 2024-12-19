const express = require('express'); 
const connectDB = require('./database');
const app = express(); 
const PORT = 5001; 
const restaurant = require("./routes/restaurants");
const cors = require('cors');


app.use(cors({origin: true, credentials: true}));
app.use(express.json())
app.use("/restaurants", restaurant);

// Connect to MongoDB
connectDB();

app.get("/", (req, res) =>{
    res.send("Welcome to API :)")
})

app.listen(PORT, () => {
    console.info(`Server listening on PORT: ${PORT}`)
})