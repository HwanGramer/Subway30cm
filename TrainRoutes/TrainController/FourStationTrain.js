//! 4호선 특 : 급행없음. 

const MakeStationCode = require('../MakeStationCode'); //?
const MakeTimeBokJobDo = require('../MakeTimeBokJobDo'); //? 시간복잡도 만들기 모듈
module.exports = {
    FourStation :async (req,res)=>{ 
       const StationCode =await MakeStationCode(req.params.stationName , '4호선'); //? 역이름 , 호선으로 코드찾아서 복잡도 찾아야됨.
       if(StationCode[0].suc === false){
           res.json({suc : false , msg : '500ERROR'});
       }
       const wayNum = (req.params.way === '상행' ? 0 : 1); //? 0 : 상행 , 1 : 하행
       const start = req.params.way === '상행' ? '오이도역' : '당고개역'  //? 상행이라면 오이도 출발 진접도착
       const end = req.params.way === '상행' ? '당고개역' : '오이도역' //?하행이라면 진접출발 오이도 도착
       
       const TimeBokJobDo = await MakeTimeBokJobDo(StationCode[0].FR_CODE , wayNum , start , end, 0); 
                                                //?역코드 , 방향 , 시작역 , 종착역 , 급행여부
        res.json(TimeBokJobDo);                                             
    }
}