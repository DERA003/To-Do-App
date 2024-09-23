const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")


function addTask() {
   if(inputBox.value === ''){
      alert("please write task")
   }else{
    const li = document.createElement("li")
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)
    const span = document.createElement("span")
    span.innerHTML = "X"
    li.appendChild(span)
   }
   inputBox.value = ""
}

addTask()

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
},false)