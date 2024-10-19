let cdate = (document.getElementById("date")).innerHTML =
  "01 January 2025 12:00 AM";

let inputs=document.querySelectorAll(".time")  
function clock() {
  const end = new Date(cdate);
  const now = new Date();
  const diff = (end - now) / 1000;
  if (diff<0) return;
//   console.log(diff)
  //for Day
  inputs[0].value = Math.floor(diff / (24 * 3600));
  //for Hours
  inputs[1].value =  Math.floor((diff / 3600) % 24);
  //for Minute
  inputs[2].value =  Math.floor((diff / 60) % 60);
  //for Secound
  inputs[3].value =  Math.floor((diff % 60));
}
clock();
setInterval(() => {
    clock()
}, 1000);