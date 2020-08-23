let express = require('express')
let mongoose = require('mongoose')
let bodyParser = require('body-parser')
let cors = require('cors')
let app = express()
let port = 3000
let url = 'mongodb://tartarus:mongoflixDBatlas112233@localhost/DB'
let URL = "mongodb+srv://mongoFlix:mongoflixDBatlas112233@mongoflix.0pbiv.mongodb.net/DB"
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Importe Routes
let movieRoute = require('../routes/Movie.js')
app.use("/", movieRoute);


//Connection to the DB
let db = mongoose.connection
mongoose.connect(
    URL,
    { useUnifiedTopology: true , useNewUrlParser: true }, 
    () => {
        console.log("Connected to the DB: "+URL) 
    }
);

app.listen(port, () => {
    console.log("[RESTAPI activated] \nPort:"+port)
})