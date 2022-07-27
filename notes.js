const fs = require("fs")

const readDataFromJson = (path) => {
    console.log(path) ;
    const notesData = fs.readFileSync(path , {encoding: "ascii"}) 
    if(notesData == "") return { error: false , data: []} 
    try{
        let parsedData = JSON.parse(notesData) 
        return {
            "error": false ,
            "data": parsedData
        }
    }catch(e){
        return {
            error: true ,
            message: "error in parsing the File "
        } ;
    }
}

const writeDataToFile = (path , jsonData) => {
    fs.writeFileSync(path , JSON.stringify(jsonData))
}

module.exports = {
    readDataFromJson ,
    writeDataToFile
} ;