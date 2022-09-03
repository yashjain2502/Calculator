
function clicked(val){
    document.getElementById("area").value+=val;
}

function Clear(){
    document.getElementById("area").value=' ';
}

function Solve(){
    var x=document.getElementById("area").value;
    var y=eval(x);
    document.getElementById("area").value=y;
}

function Clear_one(){
    var x=document.getElementById("area").value;
    x=x.slice(0,-1);
    document.getElementById("area").value=x;
}