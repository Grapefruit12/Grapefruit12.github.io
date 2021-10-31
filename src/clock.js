/*
<h2 id="clock">00:00:00</h2>
*/

/*실시간 시계*/
const clock=document.querySelector("h2#clock");

function getClock(){
    const a=new Date();
    const hours=String(a.getHours()).padStart(2,"0");
    const minutes=String(a.getMinutes()).padStart(2,"0");
    const seconds=String(a.getSeconds()).padStart(2,"0");
    
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000);