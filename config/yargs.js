const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of task TO-DO.'
};

const completed = {
    default: true,
    alias: 'c',
    desc: 'Mark a task as done.'
};

const argv = require('yargs')
    .command('create', 'Create a task TO-DO', { description })
    .command('update', 'Update the status of a task TO-DO', {
        description,
        completed
    })
    .command('delete', 'Delete a task from list', { description })
    .command('show', 'Show TO-DO tasks')
    .help()
    .argv;

module.exports = {
    argv
}