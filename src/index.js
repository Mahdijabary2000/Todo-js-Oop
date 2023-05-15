import "./style/style.scss"
import { TodoList } from './todoList.js';
//َAccess
const todoList = new TodoList(
  document.getElementById("form"),
  document.getElementById("textInput"),
  document.getElementById("tasks"),
  document.getElementById("add")
);