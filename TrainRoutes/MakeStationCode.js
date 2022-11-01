const {STATIONCODE_URL} = require('../config/API');
const axios = require('axios');


module.exports = (stationName , hosun)=>{ //? 역이름이랑 호선이름 받는다.  역이름 코드 찾아줌.
    return axios.get(STATIONCODE_URL + `${stationName}/${hosun}`).then((res)=>{
        return res.data.SearchSTNBySubwayLineInfo.row.filter((element)=>{
            return element.STATION_NM == stationName;
        });
    }).catch((err)=>{
        return [{suc : false , msg : '역이름을 찾을 수 없음'}];
    })
}
