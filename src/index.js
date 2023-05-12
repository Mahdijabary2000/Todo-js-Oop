
import TodoList from './todoList';
//Access
const todoList = new TodoList(
  document.getElementById("form"),
  document.getElementById("textInput"),
  document.getElementById("tasks"),
  document.getElementById("add")
);