const {geocode} = require('./geocode')
console.log(geocode)
geocode("India" , (err , body) => {
    if(err) console.error(err) 
    else {
        console.log(body)
    }
})