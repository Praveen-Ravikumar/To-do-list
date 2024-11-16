const inputbox=document.getElementById('input-txt');
const listcontainer=document.getElementById('list-container');

function Addtask(){
    if( inputbox.value === ""){
        alert('please enter a task...');
    }
    else{
        let li=document.createElement('li');
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = " \u00d7";
        li.appendChild(span);
        
    }
    inputbox.value = "";
    saveData();
}

document.addEventListener('keypress',(event)=>{
    key=event.key;
    if(key === 'Enter'){
        if( inputbox.value === ""){
            alert('please enter a task...');
        }
        else{
            let li=document.createElement('li');
            li.innerHTML = inputbox.value;
            listcontainer.appendChild(li);
            let span = document.createElement('span');
            span.innerHTML = " \u00d7";
            li.appendChild(span);
            
        }
        inputbox.value = "";
        saveData();
    }

})


listcontainer.addEventListener('click', function(e){
    if(e.target.tagName.toLowerCase() === 'li'){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName.toLowerCase() ==='span'){
        e.target.parentElement.remove();
        saveData();
    }
},false)



function saveData(){
    localStorage.setItem('data', listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem('data');
}


showTask();