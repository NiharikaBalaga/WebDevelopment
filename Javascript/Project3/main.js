let addToDoButton = document.getElementById('addToDo');
// let toDoContainer = document.getElementById('notes');
// var inputField = document.getElementById("inputField");
showNotes();
addToDoButton.addEventListener('click', function(){

    var addtxt = document.getElementById("inputField");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addtxt.value="";
    console.log(notesObj);
    showNotes();
})

function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }

    let html="";
    notesObj.forEach(function(element,index){
        html+=`
        <div class="notecard my-2 mx-2 card" style="width: 18rem;">
                  <div class="card-body">
                  <h5 class="card-title">Note ${index+1}</h5>
                  <p class="card-text">${element}</p>
                  <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
              </div>
        `
    });
    let notesElm=document.getElementById('notes');
    if(notesObj .length!=0){
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML=`No notes available`
    }
}

function deletenote(index){
let notes=localStorage.getItem("notes");
if(notes==null){
    notesObj=[];
}
else{
    notesObj=JSON.parse(notes);
}
notesObj.splice(index,1);
localStorage.setItem("notes",JSON.stringify(notesObj));
showNotes();

}