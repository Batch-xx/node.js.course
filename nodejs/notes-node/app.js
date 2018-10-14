/*jshint esversion: 6 */

console.log('Starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

let res = notes.addNote();
console.log(res);

const filteredArray = _.uniq(['Brian', 1,'Brian', 1,2,3,4]);
console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString("Brian"));

// let addRes = notes.add(1,3);


// let user = os.userInfo();

// fs.appendFile('greeting.txt', `Hello ${user.username}. You are ${notes.age}` ,(err => {
//     if(err){
//         console.log('unable to write to file');
//     }
// }));
