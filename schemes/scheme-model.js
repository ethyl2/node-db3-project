module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

const db = require('../data/db-config.js');

function find() {
    return db('schemes');
}

function findById() {

}

function findSteps(id) {

}

function add(scheme) {

}

function update(changes, id) {

}

function remove(id) {

}