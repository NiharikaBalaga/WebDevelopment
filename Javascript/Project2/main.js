let addToDoButton = document.getElementById('addToDo');
// let toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById("inputField");
var inputField1 = document.getElementById("inputField1");
var inputField2 = document.getElementById("inputField2");
addToDoButton.addEventListener('click', function(){
    var row=1;
    var tb1 = document.getElementById('table');
    var rows=tb1.insertRow(row);
    var name =rows.insertCell(0);
    var date = rows.insertCell(1);
    var amount =rows.insertCell(2);
    
    name.innerHTML =inputField.value;
    date.innerHTML = inputField1.value;
    amount.innerHTML = inputField2.value;
    row++;
    
    
    inputField.value = "";
    inputField1.value = "";
    inputField2.value = "";
    
})