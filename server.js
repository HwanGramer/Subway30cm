const express = require('express');
const cors = require('cors');

const TrainRouter = require('./TrainRoutes/TrainRouter');

const app = express();

app.use('/api/subway' , TrainRouter);

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors);

app.listen(8080 , ()=>{
    console.log('server ON');
})