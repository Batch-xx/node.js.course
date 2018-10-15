/*jshint esversion: 6 */ 
console.log('Starting notes.js');
const fs = require('fs');

let fetchNotes = () => {
    try{
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch(e){
        return [];
    }
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) =>  note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }else{
        console.log(`File already exist: ${note.title}`);
    }   
};

let getAll = () => {
    console.log('Getting all notes');
};

let getNotes = title => {
    console.log(`Getting note ${title}`);
};

let removeNote = title => {
    // fetch notes
    let notes = fetchNotes();

    if(notes.length === 0) return false;

    // remove notes
    var filteredNotes = notes.filter((note) => note.title !== title);

    saveNotes(filteredNotes);

    console.log(`Removing note ${title}`);
    return filteredNotes != notes;

};

module.exports = {
    addNote,
    getAll,
    getNotes,
    removeNote
};