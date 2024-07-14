function rating1(){
    options.innerHTML = "<div><input type='radio'>Lacks Eye-Catching Design</div><div><input type='radio'>Lacks Informative Content</div><div><input type='radio'>Lacks Functionality Features</div><input id='submitRes' onclick='removeElement()' type='submit' value='Submit'>"
}

function rating2(){
    options.innerHTML = "<div><input type='radio'>Designing can be Eye-Catching</div><div><input type='radio'>Content can be Informative</div><div><input type='radio'>Features can be Functional</div><input id='submitRes' onclick='removeElement()' type='submit' value='Submit'>"
}

function rating3(){
    options.innerHTML = "<div><input type='radio'>Design is Eye-Catching</div><div><input type='radio'>Content is Informative</div><div><input type='radio'>Features are Functional</div><input id='submitRes' onclick='removeElement()' type='submit' value='Submit'>"
}

function submitInq(){
    var submitButton = document.getElementById("submit-inq")
    submitButton.setAttribute("value", "Submitted!")
}

document.getElementById("btn1").addEventListener("click", rating1)
document.getElementById("btn2").addEventListener("click", rating1)
document.getElementById("btn3").addEventListener("click", rating2)
document.getElementById("btn4").addEventListener("click", rating3)
document.getElementById("btn5").addEventListener("click", rating3)
document.getElementById("submit-inq").addEventListener("click", submitInq)
var button = document.getElementById("submitRes")

function removeElement(){
    options.innerHTML = "Response Recorded. Thank You for your Feedback"
    button.remove()
}
