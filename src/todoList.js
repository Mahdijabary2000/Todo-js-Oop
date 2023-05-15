import "./style/style.scss"
import { Task } from './helpres.js';

export class TodoList {
  constructor(form, textInput, tasks, add) {
    this.form = form;
    this.textInput = textInput;
    this.tasks = tasks;
    this.add = add;
    this.data = JSON.parse(localStorage.getItem("data")) || [];
    this.addListeners();
    this.createTasks();
  }
//eventListener
  addListeners() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.formValidation();
    });

    this.add.addEventListener("click", () => {
      this.add.setAttribute("data-bs-dismiss", "");
    });
  }
//form Validation 
  formValidation() {
    if (this.textInput.value === "") {
      return;
    }
    console.log("success");
    this.acceptData();
    this.add.setAttribute("data-bs-dismiss", "modal");
    this.add.click();
  }
//accepData
  acceptData() {
    this.data.push({
      text: this.textInput.value,
    });
    localStorage.setItem("data", JSON.stringify(this.data));
    this.createTasks();
  }
//CreatTask
  createTasks() {
    this.tasks.innerHTML = "";
    //map in datas
    this.data.forEach((taskData, index) => {
      const task = new Task(taskData, index, this);
      this.tasks.appendChild(task.element);
    });

    this.resetForm();
  }
//metode reset inpute and form
  resetForm() {
    this.textInput.value = "";
  }
//metode delete task
  deleteTask(index) {
    this.data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(this.data));
    this.createTasks();
  }
//metode edite task
  updateTask(index, newText) {
    this.data[index].text = newText;
    localStorage.setItem("data", JSON.stringify(this.data));
    this.createTasks();
  }
}