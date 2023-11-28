var start = new Date().getTime();

var totalTimeSum = 0;
var totalBoxes = 10;


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

document.getElementById("start").onclick = function(){

    document.getElementById("scoreDisplay").innerHTML = "";
    totalBoxes = 10;
    document.getElementById("score").innerHTML = totalBoxes;

    newShape();
}


document.getElementById("shape").onclick = function(){
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var totalTime = (end - start)/1000;
    totalBoxes--;


    document.getElementById("score").innerHTML = totalBoxes;  // Setting the total boxes left 

    totalTimeSum+= Math.round((totalTime + Number.EPSILON) *100)/100;  // Sum after clicking


    // Updating on the time para : Working..
    // document.getElementById("time").innerHTML = totalTimeSum;
    
    if(totalBoxes == 0){
        // Changing the start -> restart.
        document.getElementById("start").innerHTML = "Restart";

        // setting total boxes to 10 and innerHTML of score to 10
        totalBoxes = 10;
        document.getElementById("score").innerHTML = totalBoxes;


        // Showing total score.

        var displayTime = totalTimeSum*100000;
        displayTime = Math.round(displayTime) / 100000;
        
        document.getElementById("scoreDisplay").innerHTML = "Time Taken : "+ displayTime + " sec";

        // updating time to 0 
        totalTimeSum = 0;
        // document.getElementById("time").innerHTML = 0; 
    }else{
        newShape();
    }
    
}