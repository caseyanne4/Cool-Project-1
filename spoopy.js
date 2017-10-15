var guess = false;

function MontyHalloween() {
    var correctDoor = Math.floor(Math.random() * 3) + 1;
    /* I tested it and it workds */
    console.log(correctDoor);
    var correctDoorString = "door" + correctDoor;
    console.log(correctDoorString);
}

window.onload = function() {
    MontyHalloween();
}


function myFunction() {
    document.getElementById("door1").innerHTML = "<div><img src= \"opendoor2.jpg\" style='width:100px;height:200px;'></div>";
}

function myFunction2() {
	document.getElementById("door2").innerHTML = "<div><img src= \"opendoor2.jpg\" style='width:100px;height:200px;'></div>";
}

function myFunction3() {
	document.getElementById("door3").innerHTML = "<div><img src= \"opendoor2.jpg\" style='width:100px;height:200px;'></div>";
}

document.getElementById("door1").onclick = function() {myFunction()};
document.getElementById("door2").onclick = function() {myFunction2()};
document.getElementById("door3").onclick = function() {myFunction3()};
