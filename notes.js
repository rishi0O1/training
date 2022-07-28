const fs = require("fs")

const removeNotes = function(title , path){
    console.log(title) 
    const res = readDataFromJson(path)
    if(res.error){
        console.log("unable to read file")
        return
    }
    const filterData = res.data.filter((note) => {
        return note.title !== title
    })
    writeDataToFile(path , filterData)
}

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

const listNotes = (path) => {
    const res = readDataFromJson(path)
    if(res.error){
        console.log("error while reading the file")
        return 
    }
    res.data.forEach((note) => {
        console.log(note) 
    }); 
}

module.exports = {
    readDataFromJson ,
    writeDataToFile ,
    removeNotes ,
    listNotes
} ;