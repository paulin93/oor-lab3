var i;

this.onmessage = function(event) {
	if(event.data=="start")
		timedCount()
	else
		i = event.data;
}
function timedCount() {
    i = i / 2;
    postMessage(i);
    setTimeout("timedCount()",500);
}