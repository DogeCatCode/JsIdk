var Cat=[];
function submit(){
    var name1=document.getElementById("Input1").value;
    var name2=document.getElementById("Input2").value;
    var name3=document.getElementById("Input3").value;
    var name4=document.getElementById("Input4").value;
    var name5=document.getElementById("Input5").value;
    Cat.push(name1);
    Cat.push(name2);
    Cat.push(name3);
    Cat.push(name4);
    Cat.push(name5);
    document.getElementById("Div1").innerHTML=Cat;
}
function snh(){
    var ea=Cat.sort();
    document.getElementById("SNH").innerHTML=ea;
}
