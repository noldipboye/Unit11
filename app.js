function askname() {
    var person = prompt("What is your name?")
    return person
}

function randomMath() {
    var random = Math.floor(Math.random() * 9)+1
    return random
}

console.log(randomMath())

function User(x) {
    do{      

        randomMath()

        var number = randomMath()

        var number = (x+number);

        x = 0
          
        alert(`The current number is ${x}
        The total number is ${number}`)
      
        if (number <= 20) {
        var question = prompt("If you would like to enter another number press 'y', if you would like to stop press 'n'.")
        }
          
      } while ((question == "y") && (number <= 19))  

    return number
}


User(randomMath())