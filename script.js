function addTask() {
    const task = document.getElementById("taskInput");
    const taskText = task.value.trim();

    if(taskText){
        const ul = document.querySelector("ul");

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        
        const span = document.createElement("span");
        span.innerText = taskText;

        const li = document.createElement('li');
        ul.append(li);
        li.append(checkbox);
        li.append(span);

        task.value = "";
    }

}