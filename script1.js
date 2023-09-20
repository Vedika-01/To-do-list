const inputBox= document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("You can't leave it empty!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveDate();
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveDate();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }
},false);

function saveDate(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showlist(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showlist();





