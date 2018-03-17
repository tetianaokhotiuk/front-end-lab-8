var welcomeQues, nextQues, lastQues, randomNumber, attempts, totalPrize, n, request, i, currentAttemp, currentGame, prize, diffAttemps, j, rate;

n = 5;
attempts = 3;
rate = 10.00;
prize = 10.00;
currentAttemp = 0;
currentGame = 1;
totalPrize = 0;
j = 0;
i = 0;

welcomeQues = confirm("Do you want to play a game?");

if (welcomeQues === true) {
    randomNumber = Math.floor(Math.random() * (n + 1));
    console.log(randomNumber);

    for (j = 0; j < currentGame; j++) {

        for (i = 0; i < attempts; i++) {
            diffAttemps = attempts - currentAttemp;
            currentAttemp++;
            request = prompt("Please enter the number from 0 to " + n + "\nAttempts left: " + diffAttemps + "\nTotal prize: " + Math.floor(totalPrize) + "$\nPossible prize on current attemp: " + Math.floor(prize) + "$", "");
            if (request !== "") {
                request = Number(request);
            }
            prize = prize / 2;

            if (randomNumber === request) {
                totalPrize = Math.floor(totalPrize + (prize * 2));
                rate = rate * 3;
                nextQues = confirm("Do you want to continue the game?");

                if (nextQues === true) {
                    n = n * 2;
                    randomNumber = Math.floor(Math.random() * (n + 1));
                    console.log(randomNumber);
                    prize = rate;
                    currentAttemp = 0;
                    currentGame++;
          
                } else {
                    attempts = 0;
                    console.log("Thank you for the game! Your prize is: ", Math.floor(totalPrize),"$");
                    welcomeQues = confirm("Do you want to play a game?");

                    if (welcomeQues === true) {
                    	n = 5;
                        randomNumber = Math.floor(Math.random() * (n + 1));
                        console.log(randomNumber);
                        
                        currentAttemp = 0;
                        totalPrize = 0;
                        prize = 10;
                        rate = 10;
                        attempts = 3;
                  
                        currentGame++;
                    }
                }

            } else if ((currentAttemp === attempts) && (randomNumber !== request)) {
            	console.log("Thank you for the game! Your prize is: ", Math.floor(totalPrize),"$");
                lastQues = confirm("Do you want to play again?");

                if (lastQues === true) {
                	n = 5;
                    randomNumber = Math.floor(Math.random() * (n + 1));
                    console.log(randomNumber);
                    currentAttemp = 0;
                    totalPrize = 0;
                    prize = 10;
                    rate = 10;
                    currentGame++;
                    
                } else { 
                    attempts = 0;
                }
            }
        }
    }

} else {
    console.log("You did not become a millionaire");
}

