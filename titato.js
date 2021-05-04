var player = "X"

var winning =   [
        ["A1", "A2", "A3"],
        ["B1", "B2", "B3"],
        ["C1", "C2", "C3"],
        ["A1", "B1", "C1"],
        ["A2", "B2", "C2"],
        ["A3", "B3", "C3"],
        ["A1", "B2", "C3"],
        ["A3", "B2", "C1"]
]

var ticker = 0

function playerChange(id){ 
        if (document.getElementById(id).innerHTML == ""){
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
                ticker++
                winValid(player);
                }
        }
}
function resetGame(){
        location.reload();
}
//This checks if the player has won
function winValid(player){
        for (var winvar = 0; winvar < winning.length; winvar++){
                console.log(winning[winvar]);
                var winSet = winning[winvar];
                var W1 = document.getElementById(winSet[0]).innerHTML;
                var W2 = document.getElementById(winSet[1]).innerHTML;
                var W3 = document.getElementById(winSet[2]).innerHTML;
                console.log(W1)
                console.log(W2)
                console.log(W3)
                if ((W1==W2) && (W2 == W3) && (W1 != "") && (W2 != "") && (W3 != ""))     {
                        winningMessage()
                }
        }
}
function draw(){
        alert("it's a draw")
}

function winningMessage(){
        setTimeout(function(){
        alert("Is there really a winner here?")
        }, 1)
}
var fields = document.querySelectorAll("#gameboard button")
