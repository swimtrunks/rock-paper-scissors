// I need to have an array to draw values from.

var rpsShoot = ['rock', 'paper', 'scissors']
/* get a number between 0-2 to dictate what value we pull from the array */

var xRan = Math.floor(Math.random() * 3)
var yRan = Math.floor(Math.random() * 3)

/*make function that can figure out who wins and print the outcome in each scenario*/

function getThrow(x, y) {

    //plug in var value to translate the value of array
    var playerOne = rpsShoot[xRan];
    var playerTwo = rpsShoot[yRan];
    //checking the logged values of each hand
    console.log(playerOne)
    console.log(playerTwo)
    {
        if (playerOne === 'rock' && playerTwo === 'rock') { console.log('it\'s a draw,rock vs rock'); }
        else if (playerOne === 'paper' && playerTwo === 'paper') 
        { console.log("playerTwo wins rock vs paper"); }
        else if (playerOne === 'rock' && playerTwo === 'scissors') 
        { console.log('playerOne wins rock beats scissors'); }
        else if (playerOne === 'paper' && playerTwo === 'rock') 
        { console.log('playerOne wins paper beats rock'); }
        else if (playerOne === 'paper' && playerTwo === 'paper') 
        { console.log('it\’s a draw, paper vs paper'); }
        else if (playerOne === 'paper' && playerTwo === 'scissors') 
        { console.log('playerTwo wins scissors beats paper'); }
        else if (playerOne === 'scissors' && playerTwo === 'rock') 
        { console.log('playerTwo wins rock beats scissors'); }
        else if (playerOne === 'scissors' && playerTwo === 'paper') 
        { console.log('playerOne wins scissors beats paper'); }
        else (playerOne === 'scissors' && playerTwo === 'scissors')
        { console.log('it\’s a draw, scissors vs scissors'); }
    }
   
}

// if we reinitialize var playerOne with our own value between 0-2, we can play against the script itself 
