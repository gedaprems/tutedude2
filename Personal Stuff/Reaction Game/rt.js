var start = new Date().getTime();

function randomColor(){
    var alphaList = "0123456789ABCDEF"
    var colorCode = "#";

    for(var i = 0; i< 6; i++){
        colorCode += alphaList.charAt(Math.random() * 16);
    }

    return colorCode;
}


function newShape(){
    var left =Math.random() * 300 +"px";
    var top = Math.random() * 300 + "px";
    var wh = (Math.random() * 300 + 100) + "px";
    
    document.getElementById("shape").style.left = left;
    document.getElementById("shape").style.top = top;
    document.getElementById("shape").style.width = wh;
    document.getElementById("shape").style.height = wh;

    document.getElementById("shape").style.backgroundColor = randomColor();
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
}

newShape();

document.getElementById("shape").onclick = function(){
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var totalTime = (end - start)/1000;
    alert(totalTime);
    newShape();
}