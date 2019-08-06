const fs = require('fs')
const yargs = require('yargs')
const notes = require('./notes.js')
const chalk = require('chalk')

//customize version
yargs.version('1.1.0')

//create add command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type: "string"
        },
        body : {
            describe : 'Note Body',
            demandOption : true,
            type : "string"
        }
    },
    handler (argv) {
        notes.addNote(argv.title,argv.body)
    }
})

//create remove command
yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    builder : {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: "string"
        }
    },
    handler  (argv) {
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command : 'list',
    describe : 'List all the notes',
    handler (){
        notes.listNote()
    }
})

//create read command
yargs.command({
    command : 'read',
    describe : 'Read your notes',
    handler (argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()

//thing to create : add , remove , read , list alongside provide help for every action
//console.log(yargs.argv)




// const validator = require('validator')
// console.log(validator.isURL('https://www.google.com'))
// console.log(chalk.green.bgRed(msg))
// console.log(chalk.black.bgYellow.bold(msg))
// console.log(chalk.black.bgGreen.bold(msg))







// const fs = require('fs')
// fs.writeFileSync('notes.txt','My name is Ravi!')
// fs.appendFileSync('notes.txt','\nI am the CEO of Individuals')
// const add = require('./utils.js')
// const sum = add(4,-3)
// console.log(sum)