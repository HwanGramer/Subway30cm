const express = require('express');
const cors = require('cors');
const { swaggerUi, specs } = require("./swagger/swagger")
const TrainRouter = require('./TrainRoutes/TrainRouter');

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))
app.use('/api/subway' , TrainRouter);


app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static('.next/server/pages'));

/**
 * @swagger
 * tags:
 *   name: Subway
 *   description: 지하철 복잡도 제공
 */

app.listen(8081 , ()=>{
    console.log('server ON 8081');
})