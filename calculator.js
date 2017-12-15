// JavaScript Document


function d(val) {
	document.getElementById("d").value = val;
}

//Type numbers and operators
function v(val) {
	document.getElementById("d").value += val;
}

// Evaluate the equation 
function e() {
	try {
		d(eval(document.getElementById("d").value));
	}
	catch(err) {
		d("Error");
	}
}

<script>
function night() {
    
	document.body.style.backgroundColor = "black";
	document.body.style.color = "white";
	
}
function day() {
		document.body.style.backgroundColor ="white";
	document.body.style.color = "black";
}

</script>
<button type="button" onclick="night()">Night</button>

<button type="button" onclick="day()">Day</button>

/*
// Change Display
function d(val) {
	document.getElementById("d").value = val;
}

// Type numbers and operators
function v(val) {
	alert("testing...");
	document.getElementById("d").value += val;
}

// Evaluate the Equation
function e() {
	try {
		d(eval(document.getElementById("d") value));
	}
	catch(err) {
		d("Error");
	}
}

*/