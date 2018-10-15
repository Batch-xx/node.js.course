/*jshint esversion: 6 */ 
console.log('Starting notes.js');
const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    try{
        let notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    }catch(e){
    }

    var duplicateNotes = notes.filter((note) =>  note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }

};

let getAll = () => {
    console.log('Getting all notes');
};

let getNotes = title => {
    console.log(`Getting note ${title}`);
};

let removeNote = title => {
    console.log(`Removing note ${title}`);
};

module.exports = {
    addNote,
    getAll,
    getNotes,
    removeNote
};