import "./style/style.scss"
export class Task {
  constructor(taskData, index, parent) {
    this.text = taskData.text;
    this.index = index;
    this.parent = parent;
    this.initElement();
  }

  initElement() {
    this.element = document.createElement("div");
    this.element.setAttribute("id", this.index);
//cret text todo
    const taskText = document.createElement("span");
    taskText.classList.add("fw-bold","textTodo");
    taskText.innerHTML = this.text;

    const options = document.createElement("span");
    options.classList.add("options");
// add editeIcon to div
    const editIcon = document.createElement("i");
    editIcon.classList.add("fas", "fa-edit","edit");
    editIcon.setAttribute("data-bs-toggle", "modal");
    editIcon.setAttribute("data-bs-target", "#form");
    editIcon.addEventListener("click", () => this.editTask(editIcon));
//add deleteIcon to div 
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash-alt","trash");
    deleteIcon.addEventListener("click", () => {
      this.deleteTask(this.index);
    });
    //add options to boxTodo
    options.appendChild(editIcon);
    options.appendChild(deleteIcon);

    this.element.appendChild(taskText);
    this.element.appendChild(options);
  }
//call delete
  deleteTask(index) {
    this.parent.deleteTask(index);
  }
//call edit
  editTask(icon) {
    const selectedTask = icon.parentElement.parentElement;
    this.parent.textInput.value = selectedTask.children[0].innerHTML;
    this.deleteTask(selectedTask.getAttribute("id"));
  }
}