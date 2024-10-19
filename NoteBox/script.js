let button = document.querySelector(".btn").addEventListener("click", 
    function(){
        addNote()
    }
)
let main = document.querySelector(".main")

const addNote =(text="")=>{
    const note=document.createElement("div");
    note.classList.add("box")
    note.innerHTML=`
        <div class="tool">
            <i class="save fa-solid fa-floppy-disk"></i>
            <i class="trush fa-solid fa-trash"></i>
        </div>
        <div class="contain">
            <textarea name="" id="text">${text}</textarea>
        </div>

    `;

    let trush = note.querySelector(".trush");
    trush.addEventListener("click", function () {
            note.remove();
            saveNote()
        }
    );
    let save = note.querySelector(".save");
    save.addEventListener("click", function () {
        saveNote()
    }
    );

    note.querySelector("textarea");
    save.addEventListener("focusout", function () {
        saveNote()
    }
    );
    main.appendChild(note);
    saveNote()
}

const saveNote=()=>{
    const notes=document.querySelectorAll(".box textarea")
    console.log(notes);
    const data=[];
    notes.forEach((box) => {
        data.push(box.value)
    });
    if(data.length==0){
        localStorage.removeItem("notes")
    }else{
        // store the data in localstoreg
        localStorage.setItem("notes",JSON.stringify(data))
    }
    console.log(data)
}

(
    function(){
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if(lsNotes===null){
            addNote()
        }else{
            lsNotes.forEach(
                (lsNote)=>{
                    addNote(lsNote)
                }
            )
        }
    }
)()