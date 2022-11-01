const MakeStationCode = require('../MakeStationCode'); //?
const MakeTimeBokJobDo = require('../MakeTimeBokJobDo'); //? 시간복잡도 만들기 모듈

module.exports = {
    OneStation :async (req,res)=>{
       const StationCode =await MakeStationCode(req.params.stationName , '1호선'); //? 역이름 호선으로 코드찾아줌.
       if(StationCode[0].suc === false){
           return res.json({suc : false , msg : '500ERROR'});
       }

       const fest = req.params.fest; //? 0 : 급행아님 , 1 : 급행 급행이라면 시작역하고 종착역 이름이 달라져야됨
       const wayNum = (req.params.way === '상행' ? 0 : 1); //? 0 : 상행 , 1 : 하행
       
       if( StationCode[0].FR_CODE[0]=='P' ){ //! ----> 경부선 예외처리 
            const start = fest == 0 ? (req.params.way === '상행' ? '서동탄역' : '광운대역') : (req.params.way === '상행' ? '천안역' : '서울역'); //?급행여부에 맞는 일반열차에 상행이라면 중앙보훈병에서 개화로 출발.
            const end = fest == 0 ? (req.params.way === '상행' ? '광운대역' : '신창역') : (req.params.way === '상행' ? '서울역' : '천안역');
            // console.log(start + '->' + end + '급형여부 : ' + fest + '방향 : ' + wayNum);
            const TimeBokJobDo = await MakeTimeBokJobDo(StationCode[0].FR_CODE , wayNum , start , end, fest); 
            return res.json(TimeBokJobDo);
                                                    //?역코드 , 방향 , 시작역 , 종착역 , 급행여부
       }else{ //! ----> 소요산 - 구로 , 경인선
            const start = fest == 0 ? (req.params.way === '상행' ? '인천역' : '소요산역') : (req.params.way === '상행' ? '인천역' : '동두천역'); //?급행여부에 맞는 일반열차에 상행이라면 중앙보훈병에서 개화로 출발.
            const end = fest == 0 ? (req.params.way === '상행' ? '소요산역' : '인천역') : (req.params.way === '상행' ? '동두천역' : '인천역');
            // console.log(start + '->' + end + '급형여부 : ' + fest + '방향 : ' + wayNum);
            const TimeBokJobDo = await MakeTimeBokJobDo(StationCode[0].FR_CODE , wayNum , start , end, fest); 
                                                    //?역코드 , 방향 , 시작역 , 종착역 , 급행여부
            return res.json(TimeBokJobDo);  
       }

    }
}