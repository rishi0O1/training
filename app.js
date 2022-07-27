const chalk = require("chalk") 
const yargs = require("yargs")

yargs.command({
    command: "add" ,
    description: "add new note" ,
    builder: {
        title: {
            description: "this is title " ,
            demandOption: true ,
            type: "string"
        },
        body: {
            description: "description of the note" ,
            demandOption: true ,
            type: "string"
        }
    },
    handler: (argv) => {
        console.log("Title : " , argv.title) 
        console.log("Description : " , argv.body) ;
    }
})

// remove command 
yargs.command({
    command: "remove" ,
    description: "remove new note" ,
    builder: {
        title: {
            description: "this is title "
        }
    },
    handler: (argv) => {
        console.log("remove notes from the list")
    }
})

// list command 
yargs.command({
    command: "list" ,
    description: "list new note" ,
    builder: {
        title: {
            description: "list all the notes"
        }
    },
    handler: (argv) => {
        console.log("list functionality called !!")
    }
})

// read functionality called 
yargs.command({
    command: "read" ,
    description: "read the notes" ,
    builder: {
        title: {
            description: "read the specifc note" ,
            demandOption: true ,
        },
    },
    handler: (argv) => {
        console.log("read specifc notes from the list by title")
    }
})

// console.log(yargs.argv) : here we accessing the argument then yargs need to parse instead we can call
yargs.parse() 
