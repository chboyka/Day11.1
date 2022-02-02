var box = document.getElementById('box');
var circle = document.getElementById('circle');
var move = 0;
var moveCircle = 0;

// var element = box


function moveRight(element){
    if( parseInt(getComputedStyle(box).marginLeft)+110 <=  parseInt(getComputedStyle(circle).marginLeft)){
        var mleft = parseInt(getComputedStyle(element).marginLeft);
        element.style.marginLeft = mleft + 10 + "px";
    }
    else{
        clearInterval(move);
        clearInterval(moveCircle);
        move = 0;
        moveCircle = 0
        circle.style.display = "none";
    }
}
function moveLeft(element){
    if( parseInt(getComputedStyle(box ).marginLeft)+110 <=  parseInt(getComputedStyle(circle).marginLeft)){
        var mleft = parseInt(getComputedStyle(element ).marginLeft);
        element.style.marginLeft = mleft - 10 + "px";
    }
    else{
        clearInterval(move);
        clearInterval(moveCircle);
        move = 0;
        moveCircle = 0
        circle.style.display = "none";
    }
}
function moveUp(){
    var mtop = parseInt(getComputedStyle(box).marginTop);
    box.style.marginTop = mtop - 10 + "px";
}
function moveDown(){
    var mtop = parseInt(getComputedStyle(box).marginTop);
    box.style.marginTop = mtop + 10 + "px";
}


function startAnimation(){
    if(move == 0)
        move = setInterval(boxMove, 100);
}
function stopAnimation(){
    clearInterval(move);
    move = 0;
}


function keyHandler(event){
    switch(event.key){
        case "ArrowUp":
            moveUp();
            break;
        case "ArrowDown":
            moveDown();
            break;
        case "ArrowLeft":
            moveLeft();
            break;
        case "ArrowRight":
            moveRight();
            break;
        case " ":
            move = setInterval(moveLeft, 100, circle);
            moveCircle = setInterval(moveRight,100,box);    
            break;
    }
}