const geoCode = (address , callback) => {   // return nothing i.e undefined 
    setTimeout(() => {
        return {
            latitude: 0 ,
            longitutude: 0 ,
        }
    }, 1000);
}

// console.log(geoCode("India")) 

const geoCode2 = (address , callback) => {   // rather than returning we use callback by the user to excute
    setTimeout(() => {
        const data = {
            latitude: 0 ,
            longitutude: 0 ,
        }
        callback(data)
    }, 1000);
}

geoCode2("India" , (data) => {
    console.log(data) 
})

