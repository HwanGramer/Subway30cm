
const FindLiveStation = require('../FindLiveStation'); //? 실시간 열차 도착 알려주는 모듈
const MakeBokJobDo = require('../MakeBokJobDo'); //? 함수임

module.exports = {
    SixStation :async (req,res)=>{                  
        const liveStation = await FindLiveStation.findStation(1006,req.params.stationName , req.params.way);  //? 실시간 도착모듈
        console.log(liveStation);
        if(liveStation.suc){ //? 열차정보가 있다면 복잡도 생성
            const BokJobDo = await MakeBokJobDo(6 , liveStation.data.trainNumber); //? 복잡도 생성
            liveStation.data.BokJobDo = BokJobDo;
            res.json(liveStation);
        }else{ //! 열차정보가 없다면
            res.json({suc : false , msg : '열차정보가없습니다'});
        }
    },
}