function addTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value.trim();

    if (taskInput.value === "") {
        alert("Task cannot be empty!");
        return;
    }

    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(taskText));
    taskList.appendChild(li);

    let section = document.getElementById("text")
    let p = document.createElement("p")
    p.innerText = "I built a to-do list"
    section.appendChild(p)

    taskInput.value = "";
}
