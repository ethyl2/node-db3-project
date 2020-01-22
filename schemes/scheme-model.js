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
    return db('steps')
        .join('schemes', 'steps.scheme_id', 'schemes.id')
        .where({ 'schemes.id': id})
        .select('schemes.id', 'schemes.scheme_name', 'steps.id as step_number', 'steps.instructions')
        .orderBy('step_number');
}

/* 
    Expects a scheme object.
    Inserts scheme into the database.
    Resolves to the newly inserted scheme, including id.
*/
function add(scheme) {
    return db('schemes').insert(scheme)
        .then(ids => {
            return findById(ids[0]);
        })
}

/* 
    Expects a changes object and an id.
    Updates the scheme with the given id.
    Resolves to the newly updated scheme object.
*/
function update(changes, id) {
    return db('schemes').where({ id }).update(changes)
        .then(() => {
            return findById(id);
        })
}

function remove(id) {

}