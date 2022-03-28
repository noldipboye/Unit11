function askname() {
    var person = prompt("What is your name?")
    return person
}

function randomMath() {
    var random = Math.floor(Math.random() * 9)+1
    return random
}

function User(x) {
    do{     
        var usertotal = (x+usertotal);
          
        alert(`The current number is ${x}
        The total number is ${usertotal}`)
      
        if (usertotal <= 20) {
        var question = prompt("If you would like to enter another number press 'y', if you would like to stop press 'n'.")
        }
          
      } while ((question == "y") && (usertotal <= 19))  
}

User(randomMath())