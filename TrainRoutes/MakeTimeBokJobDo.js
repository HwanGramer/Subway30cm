//? 시간 복잡도 생성 1호선 , 9호선 , 4호선 해당


//? 쓰읍 쩝 .... 시간 복잡도 왜 OPEN API 칸별이랑 평균이랑 나눠놓은거지? 존나 귀찮게 하네 진짜 두개 여기서 호출해서 합쳐서 나가야겠다. 


const axios = require('axios');
const {TRAINTIMEBOKJOBDO , BOKJOBDO_KEY , CARTIMEBOKJOBDO} = require('../config/API');

const WEEK = {
    0 : 'SUN',
    1 : 'MON',
    2 : 'TUE',
    3 : 'WED',
    4 : 'THU',
    5 : 'FRI',
    6 : 'SAT'
}


module.exports = (stationCode , way , start , end , fest)=>{ //? 역코드 , 방향 , 시작역 , 종착역 , 급행여부 
    const date = new Date();
    let Hours = date.getHours();
    if(Hours < 10) Hours = '0' + Hours; //? API에서 한자리숫자 앞에 0붙혀줘야된다... 

    const minutes = date.getMinutes() >= 10 ? date.getMinutes().toString().split('')[0] : 0; //? 현재 분의 앞자리 구하기

    return axios.get(`${TRAINTIMEBOKJOBDO}${stationCode}?dow=${WEEK[date.getDay()]}&hh=${Hours}`, { //? 평균 시간별복잡도 요청 
    headers: {
        accept: 'application/json',
        appKey: BOKJOBDO_KEY,
    }
    }).then((res)=>{
        //? 0 : 상행 , 1 : 하행
        console.log(start + '->' + end)
        const data = res.data.contents.stat.filter((element)=>{
            return element.updnLine == way && element.directAt == fest && element.startStationName == start && element.endStationName == end; 
        });

        const trainBokjobdo = data[0]?.data[minutes]; //? 분마다 출력되는데 위에 minutes로 분 앞자리 나눔. 다음 칸별 복잡도 구하면 된다. 
        
        // console.log(trainBokjobdo);
        
        if(data.length > 0){ //? 데이터가 구해졌다면 이제 칸별 복잡도 요청을 한다.
            return axios.get(`${CARTIMEBOKJOBDO}${stationCode}?dow=${WEEK[date.getDay()]}&hh=${Hours}`, { //? 평균 시간별복잡도 요청 
                headers: {
                    accept: 'application/json',
                    appKey: BOKJOBDO_KEY,
                }
            }).then((res)=>{
                const carData = res.data.contents.stat.filter((element)=>{
                    return element.updnLine == way && element.directAt == fest && element.startStationName == start && element.endStationName == end; 
                });
                if(carData.length > 0){ //? 칸별데이터가 성공적으로 나왔다면 이제 칸별 , 평균데이터를 합쳐서 보내주자
                    return {
                        suc : true,
                        data : {
                            BokJobDo : {
                                suc : true,
                                aver : trainBokjobdo.congestionTrain,
                                line : carData[0].data[minutes].congestionCar
                            }
                        }
                    }
                }else{ //? 칸별 데이터가 없다면
                    return { 
                        suc : false,
                        aver : '준비중입니다',
                        line : '준비중입니다'
                    }
                }
            })
        }else{
            return { 
                suc : false,
                aver : '준비중입니다',
                line : '준비중입니다'
            }
        }
    }).catch((err)=>{
        console.log(err);
        return { 
            suc : false,
            aver : '준비중입니다',
            line : '준비중입니다'
        }
    })
}