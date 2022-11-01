const express = require('express');
const TrainRouter = express.Router();

//? 컨트롤러 분함
const FiveStationTrain = require('./TrainController/FiveStationTrain');
const TwoStaionTrain = require('./TrainController/TwoStaionTrain');
const SixStationTrain = require('./TrainController/SixStationTrain');
const SevenStationTrain = require('./TrainController/SevenStationTrain');
const EightStationTrain = require('./TrainController//EightStationTrain');
const ThreeStationTrain =  require('./TrainController/ThreeStationTrain');
const NineStationTrain = require('./TrainController/NineStationTrain');
const FourStationTrain = require('./TrainController/FourStationTrain');
const OneStationTrain = require('./TrainController/OneStationTrain');

//! 음... 이게 몇몇호선 API응답이 없다고나왔는데 갑자기 되네...

//! 시간복잡도 API는 열차도착시간같은거 일단 없음.. 왜냐 그거추가하면 API 4개요청해야됨 ..

TrainRouter.get('/one/:stationName/:way/:fest' , OneStationTrain.OneStation); //? 시간복잡도 API
//* 완성 

TrainRouter.get('/two/:stationName/:way' , TwoStaionTrain.TwoStation); //? 실시간요청가능 API
//* 완성

TrainRouter.get('/three/:stationName/:way' , ThreeStationTrain.ThreeStationTrain); //? 실시간 요청가능
//* 완성 

TrainRouter.get('/four/:stationName/:way' , FourStationTrain.FourStation); //? 시간복잡도 API
//* 완성 

TrainRouter.get('/five/:stationName/:way' , FiveStationTrain.FiveStation); //? 실시간통계성 요청가능 API
//*완성

TrainRouter.get('/six/:stationName/:way' , SixStationTrain.SixStation); //? 안됬었는데 실시간 통계성 요청가능 API
//* 완성

TrainRouter.get('/seven/:stationName/:way' , SevenStationTrain.SevenStation);//? 실시간통계성 요청가능 API
//*완성

TrainRouter.get('/eight/:stationName/:way' , EightStationTrain.EightStation);//? 실시간통계성 요청가능 API
//*완성

TrainRouter.get('/nine/:stationName/:way/:fest' , NineStationTrain.NineStation); //? 시간복잡도 API
//* 완성 


module.exports = TrainRouter;