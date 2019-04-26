const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors');

let command = argv._[0];

switch (command) {
    case 'create':
        let task = toDo.create(argv.description);
        break;
    case 'show':
        let list = toDo.getList();

        for (let task of list) {
            console.log("========TO-DO========".blue);
            console.log('Task: ', task.desc);
            console.log('Status: ', task.done);
            console.log("=====================".blue);
        }
        break;
    case 'update':
        let updated = toDo.update(argv.description, argv.completed);
        console.log(updated);
        break;
    case 'delete':
        let del = toDo.deleteTask(argv.description);
        console.log(del);
        break;
    default:
        console.log('Invalid command.');
        break;
}