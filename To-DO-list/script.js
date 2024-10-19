let search = document.querySelector("#searchbox")
let TodoBox = document.querySelector(".ToDoBox")
search.addEventListener("keyup",function (event) {
    if (event.key=="Enter") {
        addToDo(this.value)
        this.value=""
        
    }

})
const addToDo=(search)=>{
    const listItem = document.createElement("div")
    listItem.innerHTML=`
                <div class="ToDo">
                <li>${search}</li>
                <i class="wrong fa-solid fa-xmark"></i>
            </div>
    `
    TodoBox.appendChild(listItem)
    console.log(listItem)

    let wrong = listItem.querySelector(".wrong");
    wrong.addEventListener("click", function () {
            listItem.remove();
        }
    );
     // Get the div with class "ToDo" inside listItem
    const toDoDiv = listItem.querySelector(".ToDo");
    listItem.addEventListener("click", function(){
        toDoDiv.classList.toggle("done")
    })

}