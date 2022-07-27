const fs = require("fs") 
const noteFilePath = "./notes.txt" 

const notesBuffer = fs.readFileSync(noteFilePath , {encoding: "ascii"}) 
const notes = JSON.parse(notesBuffer) 

console.log(notes)
// const books = [] 

// const book = {
//     title: "harry potter" ,
//     writter: "JK Rowling" ,
// }
// books.push(book) ;
// books.push(book) ;
// books.push(book) ;
// const bookString = JSON.stringify(books) 

// console.log(bookString) ;

// fs.writeFileSync(noteFilePath , bookString)