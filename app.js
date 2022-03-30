function askname() {
    var person = prompt("What is your name?")
    return person
}

function randomMath() {
    var random = Math.floor(Math.random() * 9)+1
    return random
}

function User() {

    number = 0

    do{ 

        var x = randomMath()
        
        var number = (x+number);
          
        alert(`The current number is ${x}
        The total number is ${number}`)
      
        if (number <= 20) {
        var question = prompt("If you would like to enter another number press 'y', if you would like to stop press 'n'.")
        }
          
      } while ((question == "y") && (number <= 19))  

    return number
}

User()

