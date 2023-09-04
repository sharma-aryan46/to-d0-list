const express = require('express');
const mongoose = require('mongoose');
const dotEnv = require('dotenv');
const app = express();
const cors = require('cors');


// configure express to recieve the form data
app.use(express.json()) ;

//configure dotenv
dotEnv.config ({path : './.env'});

//host
const hostname = process.env.HOST_NAME;
//PORT
const port = process.env.PORT;


//use cors
app.use(cors());


//lets import routes
const todoItemRoute = require('./routes/todoItems');


//lets connect to monodb
mongoose.connect(process.env.MONGO_DB_URL)
.then(() => console.log('database connected'))

.catch(err => console.log(err) )



app.use('/', todoItemRoute)


//add port and connect to server
app.listen( port , hostname , () => {
    console.log(`Express server is started at http://${hostname}.${port}`);
});

