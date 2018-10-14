/*jshint esversion: 6 */
console.log('Starting note.js');

module.exports.addNote = () => {
    console.log('add note');
    return 'new note';
};

module.exports.add = (a,b)=>{
    let res = a+b;
    console.log(res);
    return res;
};