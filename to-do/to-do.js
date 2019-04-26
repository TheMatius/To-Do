const fs = require('fs');
const colors = require('colors');

let listToDo = [];

const create = (desc) => {
    loadDB();

    if (listToDo.findIndex(task => task.desc === desc) >= 0) {
        console.log('This task is already in the list.'.red);
        return;
    }

    let toDo = {
        desc,
        done: false
    };
    listToDo.push(toDo);
    saveDB();

    return toDo;
};

const getList = () => {
    loadDB();
    return listToDo;
};

const loadDB = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
};

const saveDB = () => {
    let data = JSON.stringify(listToDo);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;
    });
};

const update = (desc, done = true) => {
    loadDB();

    let index = listToDo.findIndex(task => task.desc === desc);

    if (index >= 0) {
        listToDo[index].done = done;
        saveDB();
        return true;
    }
    return false;
};

const deleteTask = (desc) => {
    loadDB();

    let newList = listToDo.filter(task => task.desc !== desc);

    if (listToDo.length !== newList.length) {
        listToDo = newList;
        saveDB();
        return true;
    }
    return false;
};

module.exports = {
    create,
    getList,
    update,
    deleteTask
};