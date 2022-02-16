var clicks = 0
function button1Clicked() {

    // Counter
    clicks += 1;

    // Set innerHTML of svg
    document.getElementById("counter").innerHTML = clicks;  
}


function button2Hover() {

	var s = document.getElementById("circle2")
	s.setAttribute("stroke", "black")

}

function button3Clicked() {


}
