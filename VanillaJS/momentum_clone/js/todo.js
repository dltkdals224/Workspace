const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");

const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
//const HIDDEN_CLASSNAME = "hidden";

let toDos = []; //이전 localStorage내용을 update하기 위함.
let toDoCheck = 0;

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //모든 값은 string화 시켜줌
}

function completeToDo(event) {
    //이론상 맞지만 해당 이것도 X처럼 해당 아이디에 맞는 부분을 지워야 함
    const li = event.target.parentElement.querySelector("span");
    //console.log(event.target.parentElement.querySelector("span"));
    if (toDoCheck === 0) {
        li.classList.add("line-through");
        toDoCheck++;
    } else {
        li.classList.remove("line-through");
        toDoCheck--;
    }
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    li.id = newTodo.id;
    span.innerText = newTodo.text;

    const button1 = document.createElement("text");
    const button2 = document.createElement("text");

    button1.style.cursor = "pointer";
    button1.innerText = " ✔";
    button1.addEventListener("click", completeToDo);

    button2.style.cursor = "pointer";
    button2.innerText = " ❌";
    button2.addEventListener("click", deleteToDo);
    //append 시리즈는 항상 마지막에 놓여야 한다.
    li.appendChild(span);
    li.appendChild(button1);
    li.appendChild(button2);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""; //newTodo에 저장 후 비우기.
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); //todos배열에 객체 저장
    paintToDo(newTodoObj); //저장한 것 (todolist) 표시
    saveToDos(); //localStorage에 저장
}

//실행부

toDoForm.addEventListener("submit", handleToDoSubmit); //Enter입력시 실행

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //기존 내용 배열에 저장.
    parsedToDos.forEach((item) =>
        paintToDo(item)
    ); //각각의 인자에 대한 해당함수 실행.
}