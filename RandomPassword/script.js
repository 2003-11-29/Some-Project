const UpperSet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const LowerSet ="abcdefghijklmnopqrstuvwxyz"
const NumberSet = "1234567890"
const SymbolSet = "!@#$%^&*()_+|}{:<>?/.,';=-"

const PassBox = document.getElementById("passbox")
const PassInput = document.getElementById("length")
const UpperInput = document.getElementById("upper")
const LowerInput = document.getElementById("lower")
const NumberInput = document.getElementById("number")
const SymbolInput = document.getElementById("symbol")


const getRandomData = (dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)]
}
const genPass = (password = "")=>{
    if(UpperInput.checked){
        password += getRandomData(UpperSet)
    }
    if(SymbolInput.checked){
        password += getRandomData(SymbolSet)
    }
    if(LowerInput.checked){
        password += getRandomData(LowerSet)
    }
    if(NumberInput.checked){
        password += getRandomData(NumberSet)
    }
    
    if(password.length < PassInput.value){
        return genPass(password)
    }
    PassBox.innerText=truncateString(password, PassInput.value)
}
genPass();

document.querySelector(".gen").addEventListener(
    "click",
function(){
    genPass();
}
)

// user that define length of password that is show
function truncateString(str,num){
    if(str.length>num){
        let subStr = str.substring(0,num);
        return subStr;
    }else{
        return str;
    }
}