console.log("yguheiee")
const question=[{
    'que':"dfjljorkpdfmbl",
    'a':"nrfjni",
    'b':"qwer",
    'c':"asd",
    'd':"ddf",
    'correct':"a"
},
{
    'que':"asdfghjklpoiu",
    'a':"zxc",
    'b':"vbn",
    'c':"nml",
    'd':"asd",
    'correct':"b"

},{
    'que':"qwertyuiopasdffg",
    'a':"aqw",
    'b':"wer",
    'c':"tyu",
    'd':"iop",
    'correct':"c"

},{
    'que':"mnbvcxzasdfghjkl",
    'a':"mnj",
    'b':"lkjfgh",
    'c':"dfg",
    'd':"yuiio",
    'correct':"d"

},
]
let index=0;
let right=0;
let wrong=0;
let total=question.length;
let quesBox=document.querySelector(".ques")
let radioBox=document.querySelectorAll(".check")
// let submit = document.querySelector(".submit")
const loadQuestion = ()=>{
    if(index===total){
        return endQuiz()
    }
    let data=question[index]
    reset();
    quesBox.innerText = `${index+1}) ${data.que}`;
    radioBox[0].nextElementSibling.innerText = data.a;
    radioBox[1].nextElementSibling.innerText = data.b;
    radioBox[2].nextElementSibling.innerText = data.c;
    radioBox[3].nextElementSibling.innerText = data.d;
}
// submit.addEventListener("click",submit)
const SubmitQuiz = ()=>{
    const data = question[index]
    const ans=getAnswer()
    if(ans===data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer=()=>{
    let Answer;
    radioBox.forEach(
        (input)=>{
            if(input.checked){
                Answer = input.value;
                console.log(Answer)
            }
        }
    )
    return Answer;
}
const reset = ()=>{
    radioBox.forEach(
        (input)=>{
            input.checked=false
        }
    )
}
const endQuiz = () => {
    document.getElementsByClassName("box")[0].innerHTML =
    `
    <div style="text-align:center; font-size:30px ">
        <h3>Thank you for playing Quiz</h3>
        <h4>${right}/${total} are correct</h4>
    </div>
    `;
}

loadQuestion();