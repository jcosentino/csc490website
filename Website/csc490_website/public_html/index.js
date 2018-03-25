function clickToggleVisible(){
    $('#present').toggle();
}

window.onbeforeunload = function() {
	return "Did you save everything?";
}