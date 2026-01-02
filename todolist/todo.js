const taskin=document.getElementById("taski");
const addb=document.getElementById("addbtn");
const taskl=document.getElementById("tasklist");
addb.addEventListener("click",addtask);
function addtask(){
    const tasktext=taskin.value.trim();
    if(tasktext===""){
        alert("please enter a task!");
        return;
    }
    const li=document.createElement("li");
    const span=document.createElement("span");
    span.textContent=tasktext;
    span.addEventListener("click",function (){
        span.classList.toggle("completed");
    });
    const delbtn=document.createElement("button");
    delbtn.textContent="X";
    delbtn.className="delete";
    delbtn.addEventListener("click",function () {
        li.remove();
    });
    li.appendChild(span);
    li.appendChild(delbtn);
    taskl.appendChild(li);
    taskin.value= "";
}
taskin.addEventListener("keypress", function (event) {

    // If pressed key is Enter
    if (event.key === "Enter") {
        addtask(); // call addTask function
    }
});

