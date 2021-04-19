let btn=document.getElementById("addToDo");

btn.addEventListener('click',function(){
    let text=document.getElementById("inputField").value;
    var count=0;
    var vowels=['a','e','i','o','u','A','E','I','O','U'];
    for(var i=0;i<text.length;i++){
        if(vowels.indexOf(text[i])>-1){
            count++;
        }
    }
alert("This string has "+count+" vowels");
inputField.value="";
})