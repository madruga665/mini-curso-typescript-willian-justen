"use strict";
// Readonly
const todo = {
    title: "Learn TypeScript",
    description: "Learn TypeScript and build a todo app",
    completed: false,
};
console.log(todo);
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
const todo3 = {
    title: "Learn Dart",
    completed: false,
};
console.log(todo3);
const todo4 = {
    title: "Learn Docker",
    completed: false,
};
