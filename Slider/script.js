const slides = document.querySelectorAll(".slide")
let counter = 0;
console.log(slides)
slides.forEach((slide,index) => {
    slide.style.left = `${index*100}%`
    
});
let index = slides.length;

const goPrev= () => {
    if (counter>0) {
        counter--
        SlideImage()
    }

}
const goNext= () => {
    if (counter<index-1) {
        counter++
        SlideImage()
    }
}
const SlideImage = () =>{
slides.forEach(
    (slide)=>{
        slide.style.transform=`translateX(-${counter*100}%)`

    }
)
}
