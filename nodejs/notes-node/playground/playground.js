/*jshint esversion: 6 */ 

// let obj = {
//     name: 'Brian'
// };

// const stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(obj);

// let personString = '{"name": "Brian" ,"age": 25}';
// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

let originalNote = {
    title: 'Some title',
    body: 'Some body'
};

let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');


console.log(typeof originalNote);
console.log(originalNote.title); 