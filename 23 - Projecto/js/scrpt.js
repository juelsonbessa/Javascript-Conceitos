function addTask(){
    var title = document.querySelector("#task-title").value;

    if(title){
        const template = document.querySelector(".template");

        var newTask = template.cloneNode(true) 
        

        newTask.querySelector(".task-title").textContent = title;

        newTask.classList.remove("template");
        newTask.classList.remove("hide")

        var list = document.querySelector("#task-list");

        list.appendChild(newTask);


        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        })

        const done = newTask.querySelector(".done-btn").addEventListener("click", function(){
            doneTask(this)
        })
    }else{
        console.log("Digite alguma coisa")
    }
}

function removeTask(task){
    task.parentNode.remove(true)
}
function doneTask(task){
    task.parentNode.classList.toggle("done")
}
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){
    e.preventDefault()
    addTask();
})