document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("create-task-form");
  form.addEventListener('submit', newTask);
});

function listenSubmit(event) {
  event.preventDefault();
  const newTask = document.getElementById("new-task-description").value;
  const ul = document.getElementById("tasks")
  const li = document.createElement('li');
  li.textContent = newTask
  li.appendChild(document.createTextNode(task));
  li.append(deleteBtn)
  ul.appendChild(li);
  event.target.reset()
};
