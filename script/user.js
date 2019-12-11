const userWrap = document.querySelector("#user-js");
const userForm = userWrap.querySelector("form");
const userInput = userForm.querySelector("input");
const userOutput = userWrap.querySelector("h2");

const USER_NAME_LS = "user";
const SHOWING_CN = "showing";

function handleSubmit(event) {
    event.preventDefault();

    const currentUser = userInput.value;

    localStorage.setItem(USER_NAME_LS, currentUser);
    showOutput(currentUser);
}

function askForName() {
    userOutput.classList.remove(SHOWING_CN);

    userForm.classList.add(SHOWING_CN);
    userForm.addEventListener("submit", handleSubmit);
}

function handleUserUpdate() {
    localStorage.removeItem(USER_NAME_LS);

    window.location.reload()
}

function showOutput(user) {
    userForm.classList.remove(SHOWING_CN);

    userOutput.innerText = `Hello ${user}`
    userOutput.classList.add(SHOWING_CN);

    userOutput.addEventListener("dblclick", handleUserUpdate);
}

function loadUser() {
    const currentUser = localStorage.getItem(USER_NAME_LS);

    if(currentUser === null) {
        askForName();
    } else {
        showOutput(currentUser);
    }
}

function execute() {
    loadUser();
}

execute();