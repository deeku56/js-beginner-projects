var ct=document.getElementById("currtime");
var itime=document.getElementById("alrmtime");
var setbtn=document.getElementById("set");
var clearbtn=document.getElementById("clear");
var alatime=null;
var asound = new Audio("alarm.mp3");
asound.loop=true;
function addzero(num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return num;
    }
}
function update(){
    var now=new Date();
    var hours=now.getHours();
    var minutes=now.getMinutes();
    var seconds=now.getSeconds();
    hours=addzero(hours);
    minutes=addzero(minutes);
    seconds=addzero(seconds);
    var nowtime=hours + ":" + minutes + ":" + seconds;
    ct.textContent=nowtime;
    if (alatime != null) {

        var currHHMM=hours+":"+minutes;
        if(currHHMM===alatime){
            ct.classList.add("alarm-active");
            asound.play();
        }
        else{
            ct.classList.remove("alarm-active");
            asound.pause();
            asound.currentTime=0;
        }
    
}
}
setInterval(update, 1000);
setbtn.addEventListener("click", function() {
    if (itime.value !== "") {
        alatime = itime.value;
        alert("Alarm set for " + alatime);
    }
});
clearbtn.addEventListener("click", function() {
    alatime = null;
    ct.classList.remove("alarm-active");
    asound.pause();
    asound.currentTime = 0;
    alert("Alarm cleared");
});