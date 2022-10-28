const axios = require('axios');
const {LIVE_STATION} = require('../config/API');

//? 호선번호 , 역이름 , 하행인지상행인지
module.exports ={ findStation : (subWayNum,stationName,way)=>{ //? 실시간 호선에 맞는 열차찾기 모듈
    return axios.get(LIVE_STATION+stationName).then((res)=>{
        
        const arrivalSubway = res.data.realtimeArrivalList.filter((element)=>{ //? 동명인 역이름 거르기 
            return (element.subwayId == subWayNum) && (element.updnLine == way);
        }) 

        const result = {
            //? 데이터 가공 
            suc : true,
            data : {
                order : 0,
                updnLine : arrivalSubway[0].updnLine,
                trainNumber : arrivalSubway[0].btrainNo,
                updnLine : arrivalSubway[0].updnLine,
                trainLineNm : arrivalSubway[0].trainLineNm,
                stationNm : arrivalSubway[0].statnNm,
                arrivaltime : arrivalSubway[0].barvlDt,
                msg1 : arrivalSubway[0].arvlMsg2,
                msg2 : arrivalSubway[0].arvlMsg3,
                subWayStatus : arrivalSubway[0].arvlCd
            }
        }
        return result
    }).catch((err)=>{
        return result = {suc : false , msg: '현재열차정보가없습니다'};
    })

    }
}
