var num=0;
var arrImg=["1.jpg",["2.jpg"],["3.jpg"],["4.jpg"],["5.jpg"]];
function right(){
    num++;
    if(num>arrImg.length-1){
        num=0;
        document.querySelector("header").style.backgroundImage=`url(./Assets/Images/${arrImg[num]})`
    }
    else{
        document.querySelector("header").style.backgroundImage=`url(./Assets/Images/${arrImg[num]})`
    }
}

function left(){
    num--;
    if(num<0){
        num=arrImg.length-1;
        document.querySelector("header").style.backgroundImage=`url(./Assets/Images/${arrImg[num]})`
    }
    else{
        document.querySelector("header").style.backgroundImage=`url(./Assets/Images/${arrImg[num]})`
    }
}

function autoscroll(){
    num++;
    if(num>arrImg.length-1){
        num=0;
        document.querySelector("header").style.backgroundImage=`url(./Assets/Images/${arrImg[num]})`
    }
    else{
        document.querySelector("header").style.backgroundImage=`url(./Assets/Images/${arrImg[num]})`
    }
    setTimeout(autoscroll,5000)
}
autoscroll();

function statusInd(){
    if(num==0){
        document.getElementById("status1").style.transform="scale(2)"
        document.getElementById("status1").style.backgroundColor="white"
        document.getElementById("status1").style.boxShadow="2px 2px 2px black"
        document.getElementById("status5").style.transform="scale(1)"
        document.getElementById("status5").style.backgroundColor="black"
        document.getElementById("status2").style.transform="scale(1)"
        document.getElementById("status2").style.backgroundColor="black"
    }
    else if(num==1){
        document.getElementById("status2").style.transform="scale(2)"
        document.getElementById("status2").style.backgroundColor="white"
        document.getElementById("status2").style.boxShadow="2px 2px 2px black"
        document.getElementById("status1").style.transform="scale(1)"
        document.getElementById("status1").style.backgroundColor="black"
        document.getElementById("status3").style.transform="scale(1)"
        document.getElementById("status3").style.backgroundColor="black"
    }
    else if(num==2){
        document.getElementById("status3").style.transform="scale(2)"
        document.getElementById("status3").style.backgroundColor="white"
        document.getElementById("status3").style.boxShadow="2px 2px 2px black"
        document.getElementById("status2").style.transform="scale(1)"
        document.getElementById("status2").style.backgroundColor="black"
        document.getElementById("status4").style.transform="scale(1)"
        document.getElementById("status4").style.backgroundColor="black"
    }
    else if(num==3){
        document.getElementById("status4").style.transform="scale(2)"
        document.getElementById("status4").style.backgroundColor="white"
        document.getElementById("status4").style.boxShadow="2px 2px 2px black"
        document.getElementById("status3").style.transform="scale(1)"
        document.getElementById("status3").style.backgroundColor="black"
        document.getElementById("status5").style.transform="scale(1)"
        document.getElementById("status5").style.backgroundColor="black"
    }
    else{
        document.getElementById("status5").style.transform="scale(2)"
        document.getElementById("status5").style.backgroundColor="white"
        document.getElementById("status5").style.boxShadow="2px 2px 2px black"
        document.getElementById("status4").style.transform="scale(1)"
        document.getElementById("status4").style.backgroundColor="black"
        document.getElementById("status1").style.transform="scale(1)"
        document.getElementById("status1").style.backgroundColor="black"
    }
    setTimeout(statusInd,100);
}
statusInd()