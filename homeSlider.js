let sliderImg = document.getElementById("sliderImg");

let imgArray = [
    "./slider_imgs/1.jpg",
    "./slider_imgs/2.jpg",
    "./slider_imgs/3.jpg",
    "./slider_imgs/4.jpg",
];

let i = 0;

setInterval(()=>{
    if (i< imgArray.length){
        sliderImg.src =  imgArray[i];
        i++
    }else {
        i = 0;
        sliderImg.src =  imgArray[i];
    }
},2500);
