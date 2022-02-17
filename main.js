let clicks = 0
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

    if ( document.getElementById('circle3').style.opacity == "0") {
        document.getElementById('circle3').style.opacity = "1"
    }

    else {
        document.getElementById('circle3').style.opacity = "0"
    }
   

}
