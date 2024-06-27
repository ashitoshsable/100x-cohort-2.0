let gid=0;

function markTodo(id){
    const parent = document.getElementById(id);
    parent.children[1].innerHTML="Done!";
};

function createDiv(title,desc,id){
    const parent = document.createElement("div");
    parent.setAttribute("class","oneTodo");

    const child = document.createElement("div");
    child.setAttribute("class","input");

    const grandChild1 = document.createElement("div");
    grandChild1.setAttribute("class","eachTodo");
    grandChild1.innerHTML=title;
    const grandChild2 = document.createElement("div");
    grandChild2.setAttribute("class","eachTodo");
    grandChild2.innerHTML=desc;

    child.appendChild(grandChild1);
    child.appendChild(grandChild2);

    const btn = document.createElement("button");
    btn.innerHTML="Mark";
    btn.setAttribute("onClick","markTodo("+id+")");


    parent.appendChild(child);
    parent.appendChild(btn);
    parent.setAttribute("id",id);
    return parent;
};

function addTodo(){
    const title = document.getElementById("input1").value;
    const desc = document.getElementById("input2").value;

    const container = document.getElementById("todos");
    container.appendChild(createDiv(title,desc,gid++));
};