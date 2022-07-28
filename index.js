const request = require('postman-request');

const url = `http://api.weatherstack.com/current?access_key=be73be71f4d4ba1f9a2858615c54876e&query=india` 

request(url , (err , res , body) => {
    body = JSON.parse(body) 
    const curentData = body.current 
    console.log(curentData)
})