function setup() {
  $("#maintitle").hide(0).fadeIn(7000)
}

function fadeTitle() {
  $("#maintitle").fadeTo(3000, .3);
}
$(document).ready(setup);

window.onload = function() {
    document.getElementById("evil").play();
}
