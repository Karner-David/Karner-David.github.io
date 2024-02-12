function revealMessageOrNot() {
    if (document.getElementById("hiddenMessage").style.display == 'block') {
        document.getElementById("hiddenMessage").style.display = 'none';
    } else if (document.getElementById("hiddenMessage").style.display == 'none') {
        document.getElementById("hiddenMessage").style.display = 'block';
    }
}

function countdownButton() {
    // gets the inner text, not button text, with .innerHTML
    var currentVal = document.getElementById("countdownButton").innerText; 
    var newVal = currentVal - 1;
    document.getElementById("countdownButton").innerText = newVal;
    setTimeout(function() {
        if (document.getElementById("countdownButton").innerText == "0") {
            document.getElementById("countdownButton").innerText = 10;
        }
        document.getElementById("countdownButton").reset();
    }, 2500);
}



