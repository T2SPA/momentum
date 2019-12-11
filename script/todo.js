const todoWrap = document.querySelector("#todo-js");
const todoForm = todoWrap.querySelector("form");
const todoInput = todoForm.querySelector("input");
const todoList = todoWrap.querySelector("ul");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
    const button = event.target;
    const li = button.parentNode;
    todoList.removeChild(li);
    
    const cleanToDos = toDos.filter(toDo => {
        return toDo.id !== parseInt(li.id);
    });
    
    toDos = cleanToDos;

    saveToDos(toDos);
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function insertToDo(toDo) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const span = document.createElement("span");

    const newId = toDos.length + 1;
    const ToDo = {
        id: newId,
        text: toDo
    };
    
    li.id = newId;
    button.innerText = "❌";
    span.innerText = toDo;
    
    li.appendChild(button);
    li.appendChild(span);

    todoList.appendChild(li);
    toDos.push(ToDo);

    saveToDos();

    button.addEventListener("click", deleteToDo);
}

function handleSubmit(event) {
    event.preventDefault();

    const currentToDo = todoInput.value;
    insertToDo(currentToDo);
    todoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);

        parsedToDos.forEach(toDo => {
            insertToDo(toDo.text);
        });
    }
}

function execute() {
    loadToDos();

    todoForm.addEventListener("submit", handleSubmit);
}

execute();