const swaggerUi = require("swagger-ui-express")
const swaggereJsdoc = require("swagger-jsdoc")

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "SubWay Project",
      description:
        "지하철 복잡도를 제공",
    },
    servers: [
      {
        url: "http://localhost:8080", // 요청 URL
      },
    ],
  },
  apis: ["./*.js", "./TrainRoutes/*.js","./TrainRoutes/TrainController/*.js"], //Swagger 파일 연동
}
const specs = swaggereJsdoc(options)

module.exports = { swaggerUi, specs }