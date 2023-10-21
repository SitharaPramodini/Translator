const express = require('express');
const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const cors = require('cors');
const axios = require("axios");



require("dotenv").config();


const app = express();

//import routes
const postRoutes = require('./routes/posts');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//app middleware
app.use(postRoutes);

const PORT = 8070;
const DB_URL = process.env.MONGODB_URL;

mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});


const synonymsRouter = require('./routes/synonyms.js'); 
const antonymsRouter = require('./routes/antonyms.js'); 

//synonyms                
app.use('/synonyms', synonymsRouter);

//antonyms
app.use('/antonyms', antonymsRouter);

//routes
const translateRoute = require("./routes/translater_route");
app.use("/translate-controller", translateRoute);
