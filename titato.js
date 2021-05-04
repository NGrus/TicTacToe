var player = "X";

var winning =   [
        ["A1", "A2", "A3"],
        ["B1", "B2", "B3"],
        ["C1", "C2", "C3"],
        ["A1", "B1", "C1"],
        ["A2", "B2", "C2"],
        ["A3", "B3", "C3"],
        ["A1", "B2", "C3"],
        ["A3", "B2", "C1"]
];

var ticker = 0;

var fields = document.querySelectorAll("#gameboard button");

var won = false;

function playerChange(id){ 
//This function first checks if the selected button is blank and if nobody has won before. If both are true, it writes the player's symbol into the button. 
//After writing to the button, it raises the ticker by one, then validates the state of the board to see if anyone has won.
        if ((document.getElementById(id).innerHTML == "") && (won == false)){
                if ( player == "X"){
                        document.getElementById(id).innerHTML = "X";
                        player = "O";
                        console.log(player);
                        ticker++
                        winValid(player);
                }
                else {
                        document.getElementById(id).innerHTML = "O";    
                        player = "X";
                        console.log(player);
                        ticker++;
                        winValid(player);
                }
        }
}

//This function simply reloads the page, feigning a reset.
function resetGame(){
        location.reload();
}


function winValid(player){
//This function checks if the player has won by comparing combinations of the IDs in arrays within the "winning" array.
        for (var winvar = 0; winvar < winning.length; winvar++){
                console.log(winning[winvar]);
                var winSet = winning[winvar];
                var W1 = document.getElementById(winSet[0]).innerHTML;
                var W2 = document.getElementById(winSet[1]).innerHTML;
                var W3 = document.getElementById(winSet[2]).innerHTML;
                console.log(W1);
                console.log(W2);
                console.log(W3);
                if ((W1==W2) && (W2 == W3) && (W1 != "") && (W2 != "") && (W3 != ""))     {
                        winningMessage();
                }
        }
}

function draw(){
//If all fields are filled, this function is called and the game is declared to be a draw.
        alert("it's a draw");
}

function winningMessage(){
//If somebody has won, this displays the winning message. The Timeout function is called to ensure the field is filled before the alert pops up.

        won = true
        setTimeout(function(){
                alert("Is there really a winner here?");
        }, 1);
}

