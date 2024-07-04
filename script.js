
let x;
let y;

function giveNumber(numOne = randomNumber(), numTwo = randomNumber()){

    console.log("First Number: " + numOne);
    console.log("Second Number: " + numTwo);

}

function randomNumber(rNumberOne, rNumberTwo){

    let rNumber = Math.floor(Math.random() * 20);
    return rNumberOne = rNumber;
    return rNumberTwo = rNumber;
    console.log(rNumber);
}

giveNumber(20,20);
