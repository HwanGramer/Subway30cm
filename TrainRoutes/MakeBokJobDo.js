//? 복잡도 생성 모듈 복잡도 생성 모듈 복잡도 생성 모듈 복잡도 생성 모듈 복잡도 생성 모듈 복잡도 생성 모듈 

const axios = require('axios');
const {BOKJOBDO,BOKJOBDO_KEY} = require('../config/API');

module.exports = (line , trainNumber)=>{
    return axios.get(`${BOKJOBDO}${line}/${trainNumber}`, { //? 복잡도 요청 
    headers: {
        accept: 'application/json',
        appKey: BOKJOBDO_KEY,
    }
    }).then((res)=>{
        const lineBokJob = res.data.data.congestionResult.congestionCar.split('|'); //? 문자열 배열로 만듬
        return {
            suc : true, //? 성공코드
            aver : res.data.data.congestionResult.congestionTrain, //? 열차평균 복잡도
            line : lineBokJob, //?라인별 복잡도
        }
    }).catch((err)=>{
        return { 
            suc : false,
            aver : '준비중입니다',
            line : '준비중입니다'
        }
    })
}