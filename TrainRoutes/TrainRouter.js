const express = require('express');
const TrainRouter = express.Router();
const TrainController = require('./TrainController');

const FiveStationTrain = require('./TrainController/FiveStationTrain');
const TwoStaionTrain = require('./TrainController/TwoStaionTrain');
const SixStationTrain = require('./TrainController/SixStationTrain');
const SevenStationTrain = require('./TrainController/SevenStationTrain');
const EightStationTrain = require('./TrainController//EightStationTrain');

TrainRouter.get('/one/:stationName/:way' , TrainController.OneStation);

TrainRouter.get('/two/:stationName/:way' , TwoStaionTrain.TwoStation); //? TwoStaionTrain.TwoStation로 보냄 실시간요청가능 
//*완성

TrainRouter.get('/three/:stationName/:way' , TrainController.ThreeStation);


TrainRouter.get('/four/:stationName/:way' , TrainController.FourStation);


TrainRouter.get('/five/:stationName/:way' , FiveStationTrain.FiveStation); //? 실시간통계성 요청가능
//*완성

TrainRouter.get('/six/:stationName/:way' , SixStationTrain.SixStation);


TrainRouter.get('/seven/:stationName/:way' , SevenStationTrain.SevenStation);
//*완성

TrainRouter.get('/eight/:stationName/:way' , EightStationTrain.EightStation);
//*완성

TrainRouter.get('/nine/:stationName/:way' , TrainController.NineStation);

module.exports = TrainRouter;