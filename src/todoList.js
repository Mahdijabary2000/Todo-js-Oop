import { createTaskDiv } from './helpres.js';

class TodoList {
  constructor(form, textInput, tasks, add) {
    this.form = form;
    this.textInput = textInput;
    this.tasks = tasks;
    this.add = add;

    this.data = JSON.parse(localStorage.getItem("data")) || [];
//eventListener:
    this.addListeners();
    this.createTasks();
  }

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
      
    this.acceptData();
    this.add.setAttribute("data-bs-dismiss", "modal");
    this.add.click();
  }
//acceptData
  acceptData() {
    this.data.push({
      text: this.textInput.value,
    });

    localStorage.setItem("data", JSON.stringify(this.data));
    this.createTasks();
  }
 //createTasks
  createTasks() {
    this.tasks.innerHTML = "";
//map in datas:
    this.data.forEach((task, index) => {
      const taskDiv = createTaskDiv(task.text, index, this.deleteTask.bind(this), this.editTask.bind(this));
      this.tasks.appendChild(taskDiv);
    });
 //reset input and form
    this.resetForm();
  }
//metode reset input and form
  resetForm() {
    this.textInput.value = "";
  }
// medote delete task
  deleteTask(index) {
    this.data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(this.data));
    this.createTasks();
  }
//metode edite task
  editTask(index) {
    const selectedTask = this.tasks.children[index];
    this.textInput.value = selectedTask.children[0].innerHTML;
    this.deleteTask(index);
  }
}

export default TodoList;