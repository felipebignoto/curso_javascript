let computerNumber
let usernumbers = []

function init() {
    document.getElementById("inputBox").value = ""
    computerNumber = Math.floor(Math.random() * 100 + 1)
}

function newGame(){
    window.location.reload()
}

function compareNumbers() {
    const userNumber = Number(document.getElementById("inputBox").value)
    usernumbers.push(" " + userNumber)
    document.getElementById("guesses").innerHTML = usernumbers

    if(usernumbers.length <= 10){
        if (userNumber > computerNumber) {
            document.getElementById("textOutput").innerHTML = "your number is too high!"
            document.getElementById("inputBox").value = ""
        }
        else if (userNumber < computerNumber) {
            document.getElementById("textOutput").innerHTML = "your number is too low!"
            document.getElementById("inputBox").value = ""
        } 
        else {
            document.getElementById("textOutput").innerHTML = "You Win!"
            document.getElementById("inputBox").setAttribute("readOnly", "readOnly")
        }
    
        document.getElementById("attempts").innerHTML = usernumbers.length
    }

    else{
        document.getElementById("textOutput").innerHTML = "You Lose! - the result was " + computerNumber
        document.getElementById("inputBox").setAttribute("readOnly", "readOnly")
    }

    
    
}