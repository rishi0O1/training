const request = require('postman-request');


const geocode = function(address , callback) {
    const url = `http://api.weatherstack.com/current?access_key=be73be71f4d4ba1f9a2858615c54876e&query=${address}` 
    request(url , (err , res , body) => {
        if(err) callback("Unable to find the condition for the city" , undefined)
        else{
            callback(undefined , body)
        }
    })
}

module.exports = {
    geocode
}