var button = document.getElementById("button");
var count=0;
var TheBlock = document.getElementById("TheBlock");
	
	button.addEventListener("click", function() {
		count += 1;

switch(count) {
	case 1:
	TheBlock.innerHTML="Stop";
	TheBlock.className="red";
	button.innerHTML="Make Green";
	break;

	case 2:
	TheBlock.innerHTML="Go";
	TheBlock.className="green";
	button.innerHTML="Make Red";
	count=0
	break;
}
});
	


