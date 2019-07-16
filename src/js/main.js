import {
  stringify
} from "querystring";

const message = document.querySelector(".form__message--js");
const load = document.querySelector(".form__button--load-js");
const save = document.querySelector(".form__button--save-js");

save.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(message.value);
  localStorage.setItem('message', message.value);
  if (message.value) {
    message.textContent = "";
  }
})

load.addEventListener("click", (e) => {
  e.preventDefault();
  message.value = localStorage.getItem('message');
})

const person = {
  name: "Piotr",
  age: 32
}
const personStringify = JSON.stringify(person);
console.log(personStringify);
localStorage.setItem("person", personStringify);
const newPerson = localStorage.getItem("person");
console.log(newPerson);
const xxx = JSON.parse(newPerson);
console.log(xxx);