let toDoInput = document.querySelector("#toDoText");
let addButton = document.querySelector("#add");
let toDoList = document.querySelector("#toDoList");

addButton.addEventListener('click', function() {
let toDoText = toDoInput.value;
console.log(toDoInput)

toDoInput.value = ""

let newTodo = document.createElement('li')
newTodo.innerText = toDoText

newTodo.addEventListener('click', function(e) {
    
    newTodo.classList.toggle('crossed-off')

    setTimeout(() => {
        this.remove()
    }, 1000)
})


toDoList.appendChild(newTodo)







})
