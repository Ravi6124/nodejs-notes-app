const fs = require('fs')
const chalk = require('chalk')
const getNotes = () =>"Your notes ..."

const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=>note.title === title)
    const duplicateNote = notes.find((note)=>note.title===title)
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.green.inverse('Your note is added'))
    }else{
        console.log(chalk.red.inverse('Note title taken'))
    }
   
    //console.log(duplicateNotes)
    saveNotes(notes)
    //console.log(notes)
}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note)=>note.title !== title)
    // var i = notes.length
    // while(i--){
    //     if(notes[i]&&notes[i]['title']===title)notes.splice(i,1)
    // }
     if(notes.length == notesToKeep.length)console.log(chalk.red.bold.inverse("No notes Found"))
     else console.log(chalk.green.bold.inverse("Note removed"))

    saveNotes(notesToKeep)
    //console.log(notes)
}

const listNote = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse('YOUR NOTES :'))
    notes.forEach((note)=>console.log(chalk.cyan.bold(note.title,note.body)))
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note)=>note.title===title)
    if(note){
    console.log(chalk.inverse(title))
    console.log(note.body)
    }else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const loadNotes = () => {

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJsON)
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}