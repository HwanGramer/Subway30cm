/**
 * @swagger
 * paths:
 *  /api/subway/one/:stationName/:way/:fest:
 *    get:
 *      summary: "1호선 역 시간별 복잡도 제공(실시간아님)"
 *      description: "GET방식"
 *      tags: [Subway]
 *      parameters:
 *      - in: query
 *        name: stationName
 *        required: true
 *        description: 1호선 역이름ex) 도봉산
 *        schema:
 *          type: string
 *      - in: query
 *        name: way
 *        required: true
 *        description: 열차방향 '상행' or '하행'
 *        schema:
 *          type: string
 *      - in: query
 *        name: fest
 *        required: true
 *        description: 0 -> 일반열차 1 -> 급행열차
 *        schema:
 *          type: number
 *      responses:
 *        "200":
 *          description: 1호선 지하철 GET요청 
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    suc:
 *                      type: boolean
 *                    data : 
 *                       type : object
 *                       example : {                   
 *                          "BokJobDo": {
 *                           "suc": true,
 *                           "aver": 23,
 *                           "line": [
 *                               9,
 *                               13,
 *                               29,
 *                               33,
 *                               22,
 *                               22,
 *                               39,
 *                               25,
 *                               14,
 *                               22
 *                           ]
 *                           }
 *                       }
 *        "400":
 *          description: 실패시
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    suc:
 *                      type: boolean
 *                      example : false
 *                    aver : 
 *                       type : string
 *                       example : "준비중입니다"
 *                    line : 
 *                       type : string
 *                       example : "준비중입니다"
 *                             
 *                                             
 */
 //!-----------------------------------------------------------------------------------------------------------------------------
/**
 * @swagger
 * paths:
 *  /api/subway/two/:stationName/:way:
 *    get:
 *      summary: "2호선 역 실시간 복잡도"
 *      description: "GET방식"
 *      tags: [Subway]
 *      parameters:
 *      - in: query
 *        name: stationName
 *        required: true
 *        description: 2호선 역이름ex) 잠실
 *        schema:
 *          type: string
 *      - in: query
 *        name: way
 *        required: true
 *        description: 열차방향 '상행' or '하행' 2호선경우 상행이면 '외선' , 하행이면 '내선'으로 백엔드에서 바뀜
 *        schema:
 *          type: string
 *      responses:
 *        "200":
 *          description: 2호선 지하철 GET요청 
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    suc:
 *                      type: boolean
 *                      example : true
 *                    data : 
 *                       type : object
 *                       example : {
 *                          "order": 0,
 *                          "updnLine": "역방향",
 *                          "trainNumber": "열차번호", 
 *                          "trainLineNm": "성수행 - 선릉방면", 
 *                          "stationNm": "진입역이름",  
 *                          "arrivaltime": "남은시간(초)",  
 *                          "msg1": "도착시간 !!!msg1 ,msg2는 다른내용이 나올 수 있음",   
 *                          "msg2": "이전역또는 전전역 !!!msg1 ,msg2는 다른내용이 나올 수 있음",         
 *                          "subWayStatus": "도착코드 (0:진입, 1:도착, 2:출발, 3:전역출발, 4:전역진입, 5:전역도착, 99:운행중)", 
 *                          "BokJobDo": {
 *                           "suc": true, 
 *                           "aver": 23, 
 *                           "line": [
 *                               9,
 *                               13,
 *                               29,
 *                               33,
 *                               22,
 *                               22,
 *                               39,
 *                               25,
 *                               14,
 *                               22
 *                           ]
 *                           }
 *                       }
 *        "400":
 *          description: 실패시
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    suc:
 *                      type: boolean
 *                      example : false
 *                    msg : 
 *                       type : string
 *                       example : "열차정보가없습니다"
 *                             
 *                                             
 */
//!-----------------------------------------------------------------------------------------------------------------------------
/**
 * @swagger
 * paths:
 *  /api/subway/three/:stationName/:way:
 *    get:
 *      summary: "3호선 역 실시간 복잡도"
 *      description: "GET방식"
 *      tags: [Subway]
 *      parameters:
 *      - in: query
 *        name: stationName
 *        required: true
 *        description: 3호선 역이름ex) 원당
 *        schema:
 *          type: string
 *      - in: query
 *        name: way
 *        required: true
 *        description: 열차방향 '상행' or '하행'
 *        schema:
 *          type: string
 *      responses:
 *        "200":
 *          description: 3호선 지하철 GET요청 
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    suc:
 *                      type: boolean
 *                      example : true
 *                    data : 
 *                       type : object
 *                       example : {
 *                          "order": 0,
 *                          "updnLine": "역방향",
 *                          "trainNumber": "열차번호", 
 *                          "trainLineNm": "성수행 - 선릉방면", 
 *                          "stationNm": "진입역이름",  
 *                          "arrivaltime": "남은시간(초)",  
 *                          "msg1": "도착시간 !!!msg1 ,msg2는 다른내용이 나올 수 있음",   
 *                          "msg2": "이전역또는 전전역 !!!msg1 ,msg2는 다른내용이 나올 수 있음",         
 *                          "subWayStatus": "도착코드 (0:진입, 1:도착, 2:출발, 3:전역출발, 4:전역진입, 5:전역도착, 99:운행중)", 
 *                          "BokJobDo": {
 *                           "suc": true, 
 *                           "aver": 23, 
 *                           "line": [
 *                               9,
 *                               13,
 *                               29,
 *                               33,
 *                               22,
 *                               22,
 *                               39,
 *                               25,
 *                               14,
 *                               22
 *                           ]
 *                           }
 *                       }
 *        "400":
 *          description: 실패시
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    suc:
 *                      type: boolean
 *                      example : false
 *                    msg : 
 *                       type : string
 *                       example : "열차정보가없습니다"
 *                             
 *                                             
 */
//!-------------------------------------------------------------------------------------------------------------------------------
/**
 * @swagger
 * paths:
 *  /api/subway/four/:stationName/:way:
 *    get:
 *      summary: "4호선 역 시간별 복잡도 제공(실시간아님)"
 *      description: "GET방식"
 *      tags: [Subway]
 *      parameters:
 *      - in: query
 *        name: stationName
 *        required: true
 *        description: 4호선 역이름ex) 사당
 *        schema:
 *          type: string
 *      - in: query
 *        name: way
 *        required: true
 *        description: 열차방향 '상행' or '하행'
 *        schema:
 *          type: string
 *      responses:
 *        "200":
 *          description: 4호선 지하철 GET요청 
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    suc:
 *                      type: boolean
 *                    data : 
 *                       type : object
 *                       example : {                   
 *                          "BokJobDo": {
 *                           "suc": true,
 *                           "aver": 23,
 *                           "line": [
 *                               9,
 *                               13,
 *                               29,
 *                               33,
 *                               22,
 *                               22,
 *                               39,
 *                               25,
 *                               14,
 *                               22
 *                           ]
 *                           }
 *                       }
 *        "400":
 *          description: 실패시
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    suc:
 *                      type: boolean
 *                      example : false
 *                    aver : 
 *                       type : string
 *                       example : "준비중입니다"
 *                    line : 
 *                       type : string
 *                       example : "준비중입니다"
 *                             
 *                                             
 */
//!-------------------------------------------------------------------------------------------------------------------------------
/**
 * @swagger
 * paths:
 *  /api/subway/five/:stationName/:way:
 *    get:
 *      summary: "5호선 역 실시간 통계성 복잡도"
 *      description: "GET방식"
 *      tags: [Subway]
 *      parameters:
 *      - in: query
 *        name: stationName
 *        required: true
 *        description: 5호선 역이름ex) 신길
 *        schema:
 *          type: string
 *      - in: query
 *        name: way
 *        required: true
 *        description: 열차방향 '상행' or '하행'
 *        schema:
 *          type: string
 *      responses:
 *        "200":
 *          description: 5호선 지하철 GET요청 
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    suc:
 *                      type: boolean
 *                      example : true
 *                    data : 
 *                       type : object
 *                       example : {
 *                          "order": 0,
 *                          "updnLine": "역방향",
 *                          "trainNumber": "열차번호", 
 *                          "trainLineNm": "성수행 - 선릉방면", 
 *                          "stationNm": "진입역이름",  
 *                          "arrivaltime": "남은시간(초)",  
 *                          "msg1": "도착시간 !!!msg1 ,msg2는 다른내용이 나올 수 있음",   
 *                          "msg2": "이전역또는 전전역 !!!msg1 ,msg2는 다른내용이 나올 수 있음",         
 *                          "subWayStatus": "도착코드 (0:진입, 1:도착, 2:출발, 3:전역출발, 4:전역진입, 5:전역도착, 99:운행중)", 
 *                          "BokJobDo": {
 *                           "suc": true, 
 *                           "aver": 23, 
 *                           "line": [
 *                               9,
 *                               13,
 *                               29,
 *                               33,
 *                               22,
 *                               22,
 *                               39,
 *                               25,
 *                               14,
 *                               22
 *                           ]
 *                           }
 *                       }
 *        "400":
 *          description: 실패시
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    suc:
 *                      type: boolean
 *                      example : false
 *                    msg : 
 *                       type : string
 *                       example : "열차정보가없습니다"
 *                             
 *                                             
 */
//!-------------------------------------------------------------------------------------------------------------------------------
/**
 * @swagger
 * paths:
 *  /api/subway/six/:stationName/:way:
 *    get:
 *      summary: "6호선 역 실시간 통계성 복잡도"
 *      description: "GET방식"
 *      tags: [Subway]
 *      parameters:
 *      - in: query
 *        name: stationName
 *        required: true
 *        description: 6호선 역이름ex) 이태원
 *        schema:
 *          type: string
 *      - in: query
 *        name: way
 *        required: true
 *        description: 열차방향 '상행' or '하행'
 *        schema:
 *          type: string
 *      responses:
 *        "200":
 *          description: 6호선 지하철 GET요청 
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    suc:
 *                      type: boolean
 *                      example : true
 *                    data : 
 *                       type : object
 *                       example : {
 *                          "order": 0,
 *                          "updnLine": "역방향",
 *                          "trainNumber": "열차번호", 
 *                          "trainLineNm": "성수행 - 선릉방면", 
 *                          "stationNm": "진입역이름",  
 *                          "arrivaltime": "남은시간(초)",  
 *                          "msg1": "도착시간 !!!msg1 ,msg2는 다른내용이 나올 수 있음",   
 *                          "msg2": "이전역또는 전전역 !!!msg1 ,msg2는 다른내용이 나올 수 있음",         
 *                          "subWayStatus": "도착코드 (0:진입, 1:도착, 2:출발, 3:전역출발, 4:전역진입, 5:전역도착, 99:운행중)", 
 *                          "BokJobDo": {
 *                           "suc": true, 
 *                           "aver": 23, 
 *                           "line": [
 *                               9,
 *                               13,
 *                               29,
 *                               33,
 *                               22,
 *                               22,
 *                               39,
 *                               25,
 *                               14,
 *                               22
 *                           ]
 *                           }
 *                       }
 *        "400":
 *          description: 실패시
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    suc:
 *                      type: boolean
 *                      example : false
 *                    msg : 
 *                       type : string
 *                       example : "열차정보가없습니다"
 *                             
 *                                             
 */
//!-------------------------------------------------------------------------------------------------------------------------------
/**
 * @swagger
 * paths:
 *  /api/subway/seven/:stationName/:way:
 *    get:
 *      summary: "7호선 역 실시간 통계성 복잡도"
 *      description: "GET방식"
 *      tags: [Subway]
 *      parameters:
 *      - in: query
 *        name: stationName
 *        required: true
 *        description: 7호선 역이름ex) 건대입구
 *        schema:
 *          type: string
 *      - in: query
 *        name: way
 *        required: true
 *        description: 열차방향 '상행' or '하행'
 *        schema:
 *          type: string
 *      responses:
 *        "200":
 *          description: 7호선 지하철 GET요청 
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    suc:
 *                      type: boolean
 *                      example : true
 *                    data : 
 *                       type : object
 *                       example : {
 *                          "order": 0,
 *                          "updnLine": "역방향",
 *                          "trainNumber": "열차번호", 
 *                          "trainLineNm": "성수행 - 선릉방면", 
 *                          "stationNm": "진입역이름",  
 *                          "arrivaltime": "남은시간(초)",  
 *                          "msg1": "도착시간 !!!msg1 ,msg2는 다른내용이 나올 수 있음",   
 *                          "msg2": "이전역또는 전전역 !!!msg1 ,msg2는 다른내용이 나올 수 있음",         
 *                          "subWayStatus": "도착코드 (0:진입, 1:도착, 2:출발, 3:전역출발, 4:전역진입, 5:전역도착, 99:운행중)", 
 *                          "BokJobDo": {
 *                           "suc": true, 
 *                           "aver": 23, 
 *                           "line": [
 *                               9,
 *                               13,
 *                               29,
 *                               33,
 *                               22,
 *                               22,
 *                               39,
 *                               25,
 *                               14,
 *                               22
 *                           ]
 *                           }
 *                       }
 *        "400":
 *          description: 실패시
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    suc:
 *                      type: boolean
 *                      example : false
 *                    msg : 
 *                       type : string
 *                       example : "열차정보가없습니다"
 *                             
 *                                             
 */
//!-------------------------------------------------------------------------------------------------------------------------------
/**
 * @swagger
 * paths:
 *  /api/subway/eight/:stationName/:way:
 *    get:
 *      summary: "8호선 역 실시간 통계성 복잡도"
 *      description: "GET방식"
 *      tags: [Subway]
 *      parameters:
 *      - in: query
 *        name: stationName
 *        required: true
 *        description: 8호선 역이름ex) 가락시장
 *        schema:
 *          type: string
 *      - in: query
 *        name: way
 *        required: true
 *        description: 열차방향 '상행' or '하행'
 *        schema:
 *          type: string
 *      responses:
 *        "200":
 *          description: 8호선 지하철 GET요청 
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    suc:
 *                      type: boolean
 *                      example : true
 *                    data : 
 *                       type : object
 *                       example : {
 *                          "order": 0,
 *                          "updnLine": "역방향",
 *                          "trainNumber": "열차번호", 
 *                          "trainLineNm": "성수행 - 선릉방면", 
 *                          "stationNm": "진입역이름",  
 *                          "arrivaltime": "남은시간(초)",  
 *                          "msg1": "도착시간 !!!msg1 ,msg2는 다른내용이 나올 수 있음",   
 *                          "msg2": "이전역또는 전전역 !!!msg1 ,msg2는 다른내용이 나올 수 있음",         
 *                          "subWayStatus": "도착코드 (0:진입, 1:도착, 2:출발, 3:전역출발, 4:전역진입, 5:전역도착, 99:운행중)", 
 *                          "BokJobDo": {
 *                           "suc": true, 
 *                           "aver": 23, 
 *                           "line": [
 *                               9,
 *                               13,
 *                               29,
 *                               33,
 *                               22,
 *                               22,
 *                               39,
 *                               25,
 *                               14,
 *                               22
 *                           ]
 *                           }
 *                       }
 *        "400":
 *          description: 실패시
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    suc:
 *                      type: boolean
 *                      example : false
 *                    msg : 
 *                       type : string
 *                       example : "열차정보가없습니다"
 *                             
 *                                             
 */
//!-------------------------------------------------------------------------------------------------------------------------------
/**
 * @swagger
 * paths:
 *  /api/subway/nine/:stationName/:way/:fest:
 *    get:
 *      summary: "9호선 역 시간별 복잡도 제공(실시간아님)"
 *      description: "GET방식"
 *      tags: [Subway]
 *      parameters:
 *      - in: query
 *        name: stationName
 *        required: true
 *        description: 9호선 역이름ex) 여의도
 *        schema:
 *          type: string
 *      - in: query
 *        name: way
 *        required: true
 *        description: 열차방향 '상행' or '하행'
 *        schema:
 *          type: string
 *      - in: query
 *        name: fest
 *        required: true
 *        description: 0 -> 일반열차 1 -> 급행열차
 *        schema:
 *          type: number
 *      responses:
 *        "200":
 *          description: 9호선 지하철 GET요청 
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    suc:
 *                      type: boolean
 *                    data : 
 *                       type : object
 *                       example : {                   
 *                          "BokJobDo": {
 *                           "suc": true,
 *                           "aver": 23,
 *                           "line": [
 *                               9,
 *                               13,
 *                               29,
 *                               33,
 *                               22,
 *                               22,
 *                               39,
 *                               25,
 *                               14,
 *                               22
 *                           ]
 *                           }
 *                       }
 *        "400":
 *          description: 실패시
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    suc:
 *                      type: boolean
 *                      example : false
 *                    aver : 
 *                       type : string
 *                       example : "준비중입니다"
 *                    line : 
 *                       type : string
 *                       example : "준비중입니다"
 *                             
 */
 //!-----------------------------------------------------------------------------------------------------------------------------