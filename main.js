var clicks = 0
function button1Clicked() {

    // Counter
    clicks += 1;

    // Set innerHTML of svg
    document.getElementById("counter").innerHTML = clicks;  
}


function button2HoverIn() {

	document.getElementById('circle2').style.stroke = 'black'

}

function button2HoverOut() {
	document.getElementById('circle2').style.stroke = 'lightblue'
}

function button3Clicked() {


}
