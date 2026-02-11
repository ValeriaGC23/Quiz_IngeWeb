let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if(taskText === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        done: false
    };

    tasks.push(task);
    taskInput.value = "";
    render();
}

function toggleTask(id) {
    for(let task of tasks) {
        if(task.id === id) {
            task.done = !task.done;
        }
    }
    render();
}

function removeTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    render();
}

function render() {
    const taskList = document.getElementById("tasks");
    taskList.innerHTML = "";

    let pendientes = 0;

    for(let task of tasks) {
        if (!task.done) {
            pendientes++;
        }
        const list = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = task.text;
        if(task.done) {
            span.classList.add("done");
        }

    span.onclick = () => toggleTask(task.id);

    const button = document.createElement("button");
    button.textContent = "Eliminar";
    button.onclick = () => removeTask(task.id);
    list.appendChild(span);
    list.appendChild(button);
    taskList.appendChild(list);
    }

    document.getElementById("taskCount").textContent = "Pendientes: " + pendientes;
}