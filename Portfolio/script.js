function loadDoc(){
    var x = new XMLHttpRequest();
    x.onreadystatechange=function(){
        if(x.readyState == 4 && x.status == 200){
            var div = document.getElementById("proDiv").innerHTML=x.responseText;

        }
    }
    x.open("GET","./a.txt",true);
    x.send();
}
function loadDocCon(){
    var x = new XMLHttpRequest();
    x.onreadystatechange=function(){
        if(x.readyState == 4 && x.status == 200){
            var div = document.getElementById("proDiv").innerHTML=x.responseText;

        }
    }
    x.open("GET","./contact.html",true);
    x.send();
}
