/*jshint esversion: 6 */ 

const fs = require("fs");
const _ = require("lodash");
const yargs = require('yargs');

const notes = require("./notes.js");

const titleOpt = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const argv = yargs
    .command('add','Adds a new note',{
        title: titleOpt,
        body: { 
            describe: 'Body of notes',
            demand: true,
            alias: 'b'
        }
    })
    .command('list','List all notes')
    .command('read', 'Read existing note',{title: titleOpt})
    .command('remove', 'Removes existing note',{title: titleOpt})
    .help()
    .argv;

let command = argv._[0];
let titleArg = argv.title;



if (command === "add"){
    let note = notes.addNote(argv.titleArg, argv.body);
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
    let note = notes.getNote(titleArg);
    if(note){
        notes.logNote(note);
    }else{
        console.log(`${titleArg} not found!!!`);
    }
} else if (command === "remove"){   
    let hasNoteRemove = notes.removeNote(titleArg);

    let msg = hasNoteRemove ? `Note ${titleArg} was removed` : `Note ${titleArg} was not found`;

    console.log(msg);
} else {
    console.log("Command not recognized");
}

