/*function clickFunc(){
	document.getElementById("door1").innnerHITML = "CHANGE";
}*/
document.getElementById("door1").onclick = function() {myFunction()};
document.getElementById("door2").onclick = function() {myFunction2()};
document.getElementById("door3").onclick = function() {myFunction3()};

document.getElementById("switch").onclick = function() {switchFunc()};
document.getElementById("noswitch").onclick = function() {noswitchFunc()};

var chosendoor;
var candydoornum;
var otherdoor;

function myFunction() {
    document.getElementById("door1").innerHTML = "<p><img src= \"yourdoor.jpg\" style='width:100px;height:200px;'</p>";
    chosendoor = 1;
    montyHalloween(chosendoor);
}

function myFunction2() {
	document.getElementById("door2").innerHTML = "<p><img src= \"yourdoor.jpg\" style='width:100px;height:200px;'></p>";
	chosendoor = 2;
	montyHalloween(chosendoor);
}

function myFunction3() {
	document.getElementById("door3").innerHTML = "<p><img src= \"yourdoor.jpg\" style='width:100px;height:200px;'></p>";
	chosendoor = 3;
	montyHalloween(chosendoor);
}

function montyHalloween(chosendoor){
	var string = "You chose door number ";
	var message = string.concat(chosendoor);
	window.alert(message);
	candydoornum = Math.floor((Math.random()*2)+1);
	var doors = [1,2,3];
	var index = doors.indexOf(candydoornum);
	doors.splice(index, 1);
	var index2 = doors.indexOf(chosendoor);
	doors.splice(index2, 1);
	otherdoor = doors[0]
	if(otherdoor==1){
		document.getElementById("door1").innerHTML = "<p><img src = \"opendoor2.jpg\" style='width:100px;height:200px;'</p>";
	}
	if(otherdoor==2){
		document.getElementById("door2").innerHTML = "<p><img src= \"opendoor2.jpg\" style='width:100px;height:200px;'></p>";
	}
	if (otherdoor == 3){
		document.getElementById("door3").innerHTML = "<p><img src= \"opendoor2.jpg\" style='width:100px;height:200px;'></p>";
	}
	var string2 = "Little Timmy opens door number ";
	var string3 = ". There were only rocks :( Do you want to switch doors?";
	message2= string2.concat(otherdoor);
	message3= message2.concat(string3);
	window.alert(message3);
}

function switchFunc(){
	window.alert("You have switched doors.");
	var doors2 = [1,2,3]
	var i1 = doors2.indexOf(otherdoor);
	doors2.splice(i1,1);
	var i2 = doors2.indexOf(chosendoor);
	doors2.splice(i2, 1);
	if (doors2[0] == candydoornum){
		window.alert("You get candy!");
		if (candydoornum == 1){
			document.getElementById("door1").innerHTML = "<p><img src= \"candy.jpg\" style='width:100px;height:200px;'></p>";
		}
		else if (candydoornum ==2){
			document.getElementById("door2").innerHTML = "<p><img src= \"candy.jpg\" style='width:100px;height:200px;'></p>";
		}
		else if (candydoornum == 3){
			document.getElementById("door3").innerHTML = "<p><img src= \"candy.jpg\" style='width:100px;height:200px;'></p>";
		}
	}
	else{
		window.alert("You get rocks.");
		if(doors2[0] == 1){
			document.getElementById("door1").innerHTML = "<p><img src= \"rock.jpg\" style='width:300px;height:200px;'></p>";
		}
		else if(doors2[0] == 2){
			document.getElementById("door2").innerHTML = "<p><img src= \"rock.jpg\" style='width:300px;height:200px;'></p>";
		}
		else if(doors2[0] == 3){
			document.getElementById("door3").innerHTML = "<p><img src= \"rock.jpg\" style='width:300px;height:200px;'></p>";
		}
	}



}
function noswitchFunc(){
	window.alert("You keep your door.");
	if (chosendoor == candydoornum){
		window.alert("You get candy!");
		if (candydoornum == 1){
			document.getElementById("door1").innerHTML = "<p><img src= \"candy.jpg\" style='width:100px;height:200px;'></p>";
		}
		else if (candydoornum ==2){
			document.getElementById("door2").innerHTML = "<p><img src= \"candy.jpg\" style='width:100px;height:200px;'></p>";
		}
		else if (candydoornum == 3){
			document.getElementById("door3").innerHTML = "<p><img src= \"candy.jpg\" style='width:100px;height:200px;'></p>";
		}
	}
	else{
		window.alert("You get rocks.");
		if(chosendoor == 1){
			document.getElementById("door1").innerHTML = "<p><img src= \"rock.jpg\" style='width:300px;height:200px;'></p>";
		}
		else if(chosendoor == 2){
			document.getElementById("door2").innerHTML = "<p><img src= \"rock.jpg\" style='width:300px;height:200px;'></p>";
		}
		else if(chosendoor == 3){
			document.getElementById("door3").innerHTML = "<p><img src= \"rock.jpg\" style='width:300px;height:200px;'></p>";
		}
	}
}


