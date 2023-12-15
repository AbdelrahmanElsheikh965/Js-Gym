number = prompt("Guess a number ?");

var originalNum = 7 

if(number > originalNum)
{
    alert(" Too high, Try again! ");
}else if(number < originalNum){
    alert(" Lower, try higher ");
}else if(number == originalNum){
    alert(" You guessed it!! ");
}else{
    alert("Bad input")
}

