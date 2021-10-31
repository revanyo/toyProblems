let fizzBuzz = () => {
    for (let i = 0; i <= 30; i++) {
        isThree = ((i%3)===0) ? true : false;
        isFive = ((i%5)===0) ? true : false;
        // ((isThree) && (!isFive)) ? console.log("Fizz") : console.log(i)
        // ((!isThree) && (isFive)) ? console.log("Buzz") : console.log(i)
        // ((isThree) && (isFive)) ? console.log("Fizz Buzz") : console.log(i)
        if(isThree && !isFive) {
            console.log("Fizz")
        } else if (!isThree && isFive) {
            console.log("Buzz")
        } else if (isThree && isFive) {
            console.log("Fizz Buzz")
        } else {
            console.log(i)
        }
    }
}

fizzBuzz();