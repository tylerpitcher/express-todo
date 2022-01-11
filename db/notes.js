/*
    Main database file, contains functions to interact with db.
*/
const knex = require('./knex');

/*
    Add a new note to the db with the given email & data.
*/
function createNote(email, data) {
    return knex('notes').insert({
        email: email,
        data: data
    });
}

/*
    Get all notes created by the user with the email given.
*/
function getNotes(email) {
    return knex('notes').where('email', email);
}

/*
    Delete the note with the given id.
*/
function deleteNote(id) {
    return knex('notes').where('id', id).del();
}

module.exports = {
    createNote,
    getNotes,
    deleteNote
}