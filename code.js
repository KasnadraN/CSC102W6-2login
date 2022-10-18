function countdownTimer() {
    //countdownTimer will go from 50 to 0 by 5s
    console.log("CountdownTimer() started");
    var currTime = 50;
    document.getElementById("CountDis").innerHTML = currTime + " sec";

    //45 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("CountDis").innerHTML = currTime + " sec";
    }, 5000);

    //40 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("CountDis").innerHTML = currTime + " sec";
    }, 10000);

    //35 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("CountDis").innerHTML = currTime + " sec";
    }, 15000);

    //30 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("CountDis").innerHTML = currTime + " sec";
    }, 20000);

    //25 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("CountDis").innerHTML = currTime + " sec";
    }, 25000);

    //20 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("CountDis").innerHTML = currTime + " sec";
    }, 30000);

    //15 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("CountDis").innerHTML = currTime + " sec";
    }, 35000);

    //10 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("CountDis").innerHTML = currTime + " sec";
    }, 40000);

    //5 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("CountDis").innerHTML = currTime + " sec";
    }, 45000);

    //0 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("CountDis").innerHTML = "Blassoff!!!!";
    }, 50000);
}

function playCraps() {
    //troubleshooting playCraps() has started
    console.log("playCraps() Started");
    //creating the variable 
    var die1= 0; 
    var die2= 0;
    //Rolling the dice
    die1 = Math.ceil(6 * Math.random());
    die2 = Math.ceil(6 * Math.random());
    //Writting to the console log for troubleshooting
    console.log(die1);
    console.log(die2);
    //Displaying it on the screen 
    document.getElementById("die1Res").innerHTML = "The result for die1 is: " + die1;
    document.getElementById("die2Res").innerHTML = "The result for die1 is: " + die2;

 //Check if craps (7 or 11)
 var sum = die1 + die2;
 if(sum == 7 || sum == 11){
    console.log("You lose!!!");
    document.getElementById("gameRess").innerHTML = "You did not find victory. Please play again and WIN!";
 }
 
 //Check for wins (even doubles)
 else if(die1 % 2 == 0 && die1 == die2){
    console.log("you win!")
    document.getElementById("gameRess").innerHTML = "You won!";
}
//Check for tie
else{
console.log("You did not win or lose.")
document.getElementById("gameRess").innerHTML = "You did not win or lose. Please play again and WIN!"
} 
}
//btrCountdownTimer() created to fulfill assigment Efficiency at Mission Control
function btrCountdownTimer(){
    console.log("btrCountdownTimer() started");
    var currTime = 50;

    for(var i = 0; i < 11; i++){
        setTimeout(function(){
            // what we do each iteration
            console.log(currTime);
            document.getElementById("CountDis").innerHTML = currTime;
            if(currTime == 0){
                document.getElementById("CountDis").innerHTML = "Blastoff!!!";    
            }
             currTime = currTime -5;
        }, i * 5000)
    }
}

function chgtrCountdownTimer(){
    console.log("chgtrCountdownTimer()started");
    var currTime = 50;
    var ogCurrTime = currTime;

    for(var i = 0; i < 11; i++){
        setTimeout(function(){
            // what we do each iteration
            console.log(currTime);
            if(currTime == 0){
                //when we finish counting down
                document.getElementById("CountDis").innerHTML = "Blastoff!!!"; 

            } else if ( currTime < 0.5 * ogCurrTime){
                //less than 1/2 left 
                document.getElementById("CountDis").innerHTML = "Warning Less than ½ way to launch, time left =" + currTime + " seconds;
            } else {
                //at the beginning
                document.getElementById("CountDis").innerHTML = currTime + " seconds";

            }
             currTime = currTime -5;
        }, i * 5000)
    }
}




