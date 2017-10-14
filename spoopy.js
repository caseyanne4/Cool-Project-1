/*function clickFunc(){
	document.getElementById("door1").innnerHITML = "CHANGE";
}*/
document.getElementById("door1").onclick = function() {myFunction()};
document.getElementById("door2").onclick = function() {myFunction2()};

function myFunction() {
    document.getElementById("door1").innerHTML = "<p><img src= \"opendoor2.jpg\" style='width:100px;height:200px;'></p>";
}

function myFunction2() {
	document.getElementById("door2").innerHTML = "something";
}
