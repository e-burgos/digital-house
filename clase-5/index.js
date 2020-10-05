// Buscar el archivo de tareas
const fs = require("fs");
const path = require("path");

const tasksFileAbsolutePath = path.join(__dirname, "tasks.json") // aqui obtenemos la ruta absoluta

const tasksJSON = fs.readFileSync(tasksFileAbsolutePath, { encoding: "utf-8"});

const tasks = JSON.parse(tasksJSON); //Convertir String en formato JSON a un objeto de Javascript

function showAll(){
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        console.log(`-> [${task.done ? '✔' : 'X'}] ${task.name} ${task.deadline}`);
    }
}

function showPending(){
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        if (!task.done) {
            console.log(`-> 'X' ${task.name} ${task.deadline}`);
        }
    }
}

function showDone(){
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        if (task.done ){
            console.log(`-> '✔' ${task.name} ${task.deadline}`);
        }
    }
}

function toggleStatus(indice){
    console.log(indice);
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        if (i == indice) {
            if (task.done === true){
                task.done = false;
                console.log(`${task.name} cambio su estado a ${task.done}`);
            } else {
                task.done = true;
                console.log(`${task.name} cambio su estado a ${task.done}`);
            }
            
        }
    }
    
}


const parametros = process.argv[2]; //process.argv 
const indice = process.argv[3]; //process.argv 

switch (parametros) {
    case "all":
        showAll();
        break;
    case "pending":
        showPending();
        break;
    case "done":
        showDone();
        break;
     case "toggle":
        toggleStatus(indice);
         break; 
    default:
        console.log('Los valores aceptados son: all, done, pending y toggle');
}



