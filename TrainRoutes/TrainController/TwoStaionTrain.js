//! 2호선 특징 : 성수지선 , 신정지선 빼고 전부 열차번호앞자리 2로 바꿔야됨,
const FindLiveStation = require('../FindLiveStation'); //? 실시간 열차 도착 알려주는 모듈
const NoTouchNumberStation = ['성수','용답','신답','용두','신설동','신도림','도림천','양천구청','신정네거리','까치산']; //? 열차번호 이거뺴고 나머지 앞자리 2로바꿔야됨
const MakeBokJobDo = require('../MakeBokJobDo');

module.exports = {
    TwoStation :async (req,res)=>{    //? 2호선임. 2호선은 내선 , 외선으로 따짐 상행이라면 외선 , 하행이라면 내선
        let way = req.params.way;
        if(way=='하행'){ 
            way='내선';
        }else{
            way = '외선';
        }
                                                            //? 호선번호 , 역이름 , 하행인지상행인지
        const liveStation = await FindLiveStation.findStation(1002,req.params.stationName , way);  //? 실시간 도착모듈

        if(!liveStation.suc){ //? 열차정보조회 실패시 
            res.json({suc : false , msg : '열차정보가없습니다'});
            return
        }else{
            if(!NoTouchNumberStation.includes(liveStation.data.stationNm)){ //?여기서 만약 성수지선이나 신정지선 걸러내야됨
                liveStation.data.trainNumber = `2${liveStation.data.trainNumber[1]}${liveStation.data.trainNumber[2]}${liveStation.data.trainNumber[3]}`
                //?여기서 2호선의 본선열차 열차번호 앞자리 2로바꿔야됨. 왜 데이터가 이렇게 오는지 모르겠지만 서울시가 잘못한게맞음...
            }

            const BokJobDo =await MakeBokJobDo(2 , liveStation.data.trainNumber) //? 복잡도 생성에 보낼거는 1. 호선번호 , 2. 열차번호
            liveStation.data.BokJobDo = BokJobDo;
            res.json(liveStation);
        }
    },
}