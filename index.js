const images = ["EUkio4CU0AArsiT.jpg","EUkk9-1U0AAzqiH.jpg","EUkk9-1U0AAzqiH.jpg.jpg","EUkmAIFU4AA4xXe.jpg"];

let count = 0;
const slideimage =()=>{
    if( count >= images.length){
        count = 0;
    }else{
        document.getElementById('slideshow').src = images[count];
        count++;
    }
}


let slideid = 0;
const startstop = () =>{
    if(slideid === 0){
        slideid = setInterval(slideimage, 1000);
    }else{
        clearInterval(slideid);
        slideid = 0;
    }
}
document.getElementById('startstopbtn').onclick = startstop;
