const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")


function addTask() {
    const li = document.createElement("li")
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)
}

addTask()