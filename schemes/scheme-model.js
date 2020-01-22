module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

const db = require('../data/db-config.js');

/* 
    Calling find returns a promise that resolves to an array of all schemes in the database.
    No steps are included.
*/
function find() {
    return db('schemes');
}

/*
    Expects a scheme id as its only parameter.
    Resolve to a single scheme object.
    On an invalid id, resolves to null.
*/
function findById(id) {
    return db('schemes').where({ id }).first()
        .then(response => {
            if (response === undefined) {
                return null;
            } else {
                return response;
            }
        });      
}

/*
    Expects a scheme id.
    Resolves to an array of all correctly ordered step for the given scheme: 
    [ 
        { id: 17, scheme_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest'}, 
        { id: 18, scheme_name: 'Find the Holy Grail', step_number: 2, instructions: '...and quest'}, 
        etc. 
    ].
    This array should include the scheme_name not the scheme_id.
*/

function findSteps(id) {

}

function add(scheme) {

}

function update(changes, id) {

}

function remove(id) {

}