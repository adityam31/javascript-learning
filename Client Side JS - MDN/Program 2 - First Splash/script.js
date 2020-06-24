//Generating a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) +1;
let guessCount = 1;

const guessField = document.querySelector(".guessField");   //textbox
const guessSubmit = document.querySelector(".guessSubmit"); //submit button
guessField.value = "";

const errorMsg = document.querySelector(".errorMsg");   //para
const prevGuess = document.querySelector(".prevGuess"); //para
const lastResult = document.querySelector(".lastResult"); //para
const highLow = document.querySelector(".highLow"); //para

//focuses the cursor on textbox
guessField.focus();

guessSubmit.addEventListener("click", checkGuess);

function checkGuess(){
    if(guessField.value === "")
    {
        errorMsg.style.backgroundColor = "red";
        errorMsg.textContent = "Please enter a valid number";   
    }
    else{

        let userGuess = Number(guessField.value);

        if(isNaN(userGuess)){
            errorMsg.style.backgroundColor = "red";
            errorMsg.textContent = "Please enter a valid number";

            lastResult.style.backgroundColor = "white";
            lastResult.textContent = "";
        }
        else{
            errorMsg.style.backgroundColor = "white";
            errorMsg.textContent = "";

            if(guessCount === 1){
                prevGuess.textContent = "Previous Guesses:- ";
            }
            prevGuess.textContent += userGuess + " "; 


            //number is equal to the randomNumber
            if(userGuess === randomNumber){
                lastResult.style.backgroundColor = "green";
                lastResult.textContent = "CORRECT!";
                highLow.textContent = "";
                gameOver();
            }
            else{               //else the number is not equal
                lastResult.style.backgroundColor = "red";
                lastResult.textContent = "WRONG!";

                if(guessCount === 10){       //if out of  tries
                    highLow.textContent = "You are out of tries. The number was - " + randomNumber;
                    gameOver();
                }
                else{
                    
                    if(userGuess < randomNumber){   //guess was low      
                        highLow.textContent = "Your guess was too low.";
                    }
                    else{       //guess was high
                        highLow.textContent = "Your guess was too high";
                    }
                    
                    guessField.value = "";
                    guessField.focus();
                    guessCount += 1;
                }
            }
        }
    }
}

function gameOver(){
    //Disable the guess field and button
    guessField.disabled = true;
    guessSubmit.disabled = true;

    //Add a new button giving an option to start a new game
    resetBtn = document.createElement('button');
    resetBtn.textContent = "Start a new game!";
    resetBtn.addEventListener('click', resetGame);

    document.body.appendChild(resetBtn);
}

function resetGame(){
    //Guess a new random number
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessCount = 1;

    //Remove Reset Button
    resetBtn.parentNode.removeChild(resetBtn);

    //clear all text paragraphs
    const allParas = document.querySelectorAll(".paraEdit p");
    for(let i = 0; i < allParas.length; i++)
    {
        allParas[i].textContent = "";
        allParas[i].style.backgroundColor = "white";
    }

    //enable the input box and button
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
}