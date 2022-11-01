const express = require('express');
const cors = require('cors');
const { swaggerUi, specs } = require("./swagger/swagger")
const TrainRouter = require('./TrainRoutes/TrainRouter');

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))
app.use('/api/subway' , TrainRouter);


app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors);

/**
 * @swagger
 * tags:
 *   name: Subway
 *   description: 지하철 복잡도 제공
 */
app.get('test',(req,res)=>{
    
})

app.listen(8080 , ()=>{
    console.log('server ON');
})