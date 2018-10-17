/*jshint esversion: 6 */ 

const fs = require("fs");
const _ = require("lodash");
const yargs = require('yargs');

const notes = require("./notes.js");


const argv = yargs.argv;
let command = process.argv[2];


let title = argv.title;



if (command === "add"){
    let note = notes.addNote(argv.title, argv.body);
    if(note){
        notes.logNote(note);
    }    
} else if (command === "list"){
    let allNotes = notes.getAll();
    console.log(`Printing  ${allNotes.length} notes()`);
    allNotes.forEach(note => {
        notes.logNote(note);
    });
} else if (command === "read"){
    let note = notes.getNote(title);
    if(note){
        notes.logNote(note);
    }else{
        console.log(`${title} not found!!!`);
    }
} else if (command === "remove"){   
    let hasNoteRemove = notes.removeNote(title);

    let msg = hasNoteRemove ? `Note ${title} was removed` : `Note ${title} was not found`;

    console.log(msg);
} else {
    console.log("Command not recognized");
}

