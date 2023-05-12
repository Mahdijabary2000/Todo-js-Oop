
export function createTaskDiv(text, id, deleteCallback, editCallback) {
    const taskDiv = document.createElement("div");
    taskDiv.setAttribute("id", id);
  //creat text todo
    const taskText = document.createElement("span");
    taskText.classList.add("fw-bold");
    taskText.innerHTML = text;
  
    const options = document.createElement("span");
    options.classList.add("options");
  //add editIcon to div
    const editIcon = document.createElement("i");
    editIcon.classList.add("fas", "fa-edit");
    editIcon.setAttribute("data-bs-toggle", "modal");
    editIcon.setAttribute("data-bs-target", "#form");
    editIcon.addEventListener("click", () => editCallback(id));
  //add deleteIcon to div
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash-alt");
    deleteIcon.addEventListener("click", () => deleteCallback(id));
  //add options to boxTodo
    options.appendChild(editIcon);
    options.appendChild(deleteIcon);
  
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(options);
  
    return taskDiv;
  }