window.addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        addTask();
    }
})

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if(taskText){
        const ul = document.getElementById("taskList");

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        
        const span = document.createElement("span");
        span.innerText = taskText;
        
        const li = document.createElement('li');

        ul.append(li);
        li.append(checkbox);
        li.append(span);

        input.value = "";
    }
}

function finishTask() {
    const inputList = document.querySelectorAll("input");
    const itemsList = document.getElementsByTagName("li");
    
    for (let index = 1; index < inputList.length; index++) {
        itemsList[index-1].style.textDecoration = inputList[index].checked == true ? "line-through" : "none";   
    }
}

function removeTask(){
    const itemsList = document.querySelectorAll("li");
    const spanList = document.getElementsByTagName("span");
    
    document.addEventListener("click", (e) => {
        for (let index = 0; index < itemsList.length; index++) {
            if(e.target == spanList[index] && itemsList[index].firstChild.checked == true) {
                itemsList[index].remove();
            }
        }
    })
}