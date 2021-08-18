const loginForm = document.querySelector("#login-form");
const logoutForm = document.querySelector("#logout-form");
//document 아닌 loginForm에서도 element 찾아오기 가능
const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");

const logoutButton = document.querySelector("#logout");

const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저가 작동시키는 기본적 submit 방지
    loginForm.classList.add(HIDDEN_CLASSNAME); //class추가 //숨김
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`; //더 나은 표기법
    // "Hello " + username;과 동일하게 작동한다.
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
}

function LogoutConfirm(event) {
    event.preventDefault();
    let result = confirm("Delete all todolist if you click the confirm.");
    if(result){
        //화면의 todolist제거 //단순히 localStorage를 비우는 것이 아님.
        const list = document.querySelector("#todo-list");
        //console.log(list);
        list.remove();
        localStorage.removeItem(TODOS_KEY);
        toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
        
        onLogoutSubmit(event);
    }
    else{
    }
}

function onLogoutSubmit(event) {
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
    greeting.classList.add(HIDDEN_CLASSNAME);
    todoForm.classList.add(HIDDEN_CLASSNAME);
    logoutForm.classList.add(HIDDEN_CLASSNAME);
    toDoList.innerText = "";
    greeting.innerText = "";
    toDos.forEach(()=>localStorage.removeItem(TODOS_KEY));
}

//

const savedUsername = localStorage.getItem(USERNAME_KEY);
// console.log(saveUsername);
logoutForm.addEventListener("click", LogoutConfirm);

if (savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greetings //새로고침 했을 때
    paintGreetings();
}