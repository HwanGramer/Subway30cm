const MakeStationCode = require('../MakeStationCode'); //?
const MakeTimeBokJobDo = require('../MakeTimeBokJobDo'); //? 시간복잡도 만들기 모듈
const FindLiveStation = require('../FindLiveStation'); //? 실시간 열차 도착 알려주는 모듈
module.exports = {
    NineStation :async (req,res)=>{
       const StationCode =await MakeStationCode(req.params.stationName , '9호선'); //? 역이름 호선으로 코드찾아줌.
       if(StationCode[0].suc === false){
           return res.json({suc : false , msg : '500ERROR'});
       }
       const fest = req.params.fest; //? 0 : 급행아님 , 1 : 급행 급행이라면 시작역하고 종착역 이름이 달라져야됨

       const LiveStation = fest==1 ? await FindLiveStation.findStation(1009,req.params.stationName , req.params.way ,'급행') : await FindLiveStation.findStation(1009,req.params.stationName , req.params.way)

       const wayNum = (req.params.way === '상행' ? 0 : 1); //? 0 : 상행 , 1 : 하행
       const start = fest == 0 ? (req.params.way === '상행' ? '중앙보훈병원역' : '개화역') : (req.params.way === '상행' ? '중앙보훈병원역' : '김포공항역'); //?급행여부에 맞는 일반열차에 상행이라면 중앙보훈병에서 개화로 출발.
       const end = fest == 0 ? (req.params.way === '상행' ? '개화역' : '중앙보훈병원역') : (req.params.way === '상행' ? '김포공항역' : '중앙보훈병원역');

       
       const TimeBokJobDo = await MakeTimeBokJobDo(StationCode[0].FR_CODE , wayNum , start , end, fest); 
                                                //?역코드 , 방향 , 시작역 , 종착역 , 급행여부
        if(LiveStation.suc == false){
            return res.json(TimeBokJobDo);
        }else{
            LiveStation.data.BokJobDo = TimeBokJobDo;
            return res.json(LiveStation);                                           
        }
    }
}