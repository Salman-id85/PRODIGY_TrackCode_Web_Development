const stopWatchDuration =document.getElementById("stopWatchDuration"),
 reset = document.getElementById("reset"),
 lap = document.getElementById("lap"),
 start = document.getElementById("start"),
 stop = document.getElementById("stop"),
 laps = document.getElementById("laps");

let hrs = 0, mins = 0, sec = 0, millsec = 0, timeInterval;

start.onclick = ()=>{
    timeInterval = setInterval(() => {
      millsec++;  
      if (millsec == 1000) {
        sec++;
        millsec = 0;
      }
      if (sec == 60) {
        mins++;
        sec = 0;
      }
      if (mins == 60) {
        hrs++;
        mins = 0;
      }
      stopWatchDuration.innerHTML = `${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(millsec)}`;
    },10);
    // console.log(millsec);
    start.setAttribute("style","display:none");
    stop.setAttribute("style","display:block");
    lap.setAttribute("style","display:block");
    reset.setAttribute("style","display:none");
    lap.removeAttribute("disabled");
};
const zeroPad =(num) =>{
    return String(num).padStart(2,"0");
}
let count=0
lap.onclick =()=>{
    count++;
    let li =document.createElement("li");
    li.innerHTML =`${count} - ${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(millsec)}`;
    laps.appendChild(li);
    laps.scroll({top:laps.scrollHeight,behavior:"smooth"});
};

stop.onclick =()=>{
    clearInterval(timeInterval);
    lap.setAttribute("style","display:none");
    reset.setAttribute("style","display:block");
    start.setAttribute("style","display:block");
    start.innerHTML="Resume";
    stop.setAttribute("style","display:none");
};

reset.onclick =()=>{
    laps.innerHTML="";
    hrs=mins=sec=millsec = count = 0;
    clearInterval(timeInterval);
    stopWatchDuration.innerHTML="00:00:00:000";
    start.innerHTML="Start";
    lap.setAttribute("style","display:block");
    lap.setAttribute("disabled",true);
    reset.setAttribute("style","display:none");
    start.setAttribute("style","display:block");
    stop.setAttribute("style","display:none");
};
