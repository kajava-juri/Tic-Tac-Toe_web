var grid = document.getElementById('tttGrid');
var firstTime = true;
var winLose = false;

let Player1;
let Player2;

let pTurn = 1;

let gameData = [];
let cells = [];

const circleButton = document.getElementById('circle');
const crossButton = document.getElementById('cross');


function tttStart(player) {
    if(firstTime) {
        firstTime = false;
    }

    if (player == 'cross'){
        Player1 = 'X';
        Player2 = 'O';
    } else {
        Player1 = 'O';
        Player2 = 'X';
    }
    circleButton.disabled = true;
    crossButton.disabled = true;

    document.getElementById('player1').innerHTML = 'player 1: ' + Player1;
    document.getElementById('player2').innerHTML = 'player 2: ' + Player2;
}

function theGame(cellNr) {
    if(!firstTime && !winLose){
        if (pTurn % 2 == 1) {
            if(!document.getElementById(cellNr).textContent){
                document.getElementById(cellNr).innerHTML = Player1;
                winCheck(Player1);
                pTurn++;
            }
        } else {
            if(!document.getElementById(cellNr).textContent){
                document.getElementById(cellNr).innerHTML = Player2;
                winCheck(Player2);
                pTurn++;
            }
        }
    }
}

function winCheck(player){
    grid = document.getElementById('tttGrid');
    cells = ['0'];
    for(let i = 0; i < grid.children.length; i++) {
        cells.push(grid.children[i].textContent);
    }
    //horizontal
    if(cells[1] == player && cells[2] == player && cells[3] == player){
        document.getElementById('c1').style.backgroundColor = 'green';
        document.getElementById('c2').style.backgroundColor = 'green';
        document.getElementById('c3').style.backgroundColor = 'green';
        winLose = true;
        gameOver();

    }
    if(cells[4] == player && cells[5] == player && cells[6] == player) {
        document.getElementById('g4').style.backgroundColor = 'green';
        document.getElementById('g5').style.backgroundColor = 'green';
        document.getElementById('g6').style.backgroundColor = 'green';
        winLose = true;
        gameOver();
    }
    if(cells[7] == player && cells[8] == player && cells[9] == player){
        document.getElementById('g7').style.backgroundColor = 'green';
        document.getElementById('g8').style.backgroundColor = 'green';
        document.getElementById('g9').style.backgroundColor = 'green';
        winLose = true;
        gameOver();
    }

    //vertical
    if(cells[7] == player && cells[4] == player && cells[1] == player){
        document.getElementById('g7').style.backgroundColor = 'green';
        document.getElementById('g4').style.backgroundColor = 'green';
        document.getElementById('g1').style.backgroundColor = 'green';
        winLose = true;
        gameOver();
    }
    if(cells[8] == player && cells[5] == player && cells[2] == player){
        document.getElementById('g8').style.backgroundColor = 'green';
        document.getElementById('g5').style.backgroundColor = 'green';
        document.getElementById('g2').style.backgroundColor = 'green';
        winLose = true;
        gameOver();
    }
    if(cells[9] == player && cells[6] == player && cells[3] == player){
        document.getElementById('g9').style.backgroundColor = 'green';
        document.getElementById('g6').style.backgroundColor = 'green';
        document.getElementById('g3').style.backgroundColor = 'green';
        winLose = true;
        gameOver();
    }

    //diagonal
    if(cells[1] == player && cells[5] == player && cells[9] == player){
        document.getElementById('g1').style.backgroundColor = 'green';
        document.getElementById('g5').style.backgroundColor = 'green';
        document.getElementById('g9').style.backgroundColor = 'green';
        winLose = true;
        gameOver();
    }
    if(cells[7] == player && cells[5] == player && cells[3] == player){
        document.getElementById('g7').style.backgroundColor = 'green';
        document.getElementById('g5').style.backgroundColor = 'green';
        document.getElementById('g3').style.backgroundColor = 'green';
        winLose = true;
        gameOver();
    }
    if(pTurn == 9){
        winLose = true;
        gameOver();
    }
    console.log(pTurn);
}
function gameOver(){
    saveData();
    tttReset = document.createElement('button');
    tttReset.textContent = 'Reset game';
    const place = document.querySelector('.tttBtn');
    place.append(tttReset); 
    tttReset.addEventListener('click', tttResetGame);
}

function tttResetGame(){
    for(let i = 0; i < grid.children.length; i++) {
        grid.children[i].children[0].innerHTML = '';
        grid.children[i].style.backgroundColor = '#3c9cc5';
    }
    
    firstTime = true;
    winLose = false;
    Player2 = 'player2: ';
    Player1 = 'player1: ';
    pTurn = 1;
    circleButton.disabled = false;
    crossButton.disabled = false;

    document.getElementById('player1').innerHTML = '';
    document.getElementById('player2').innerHTML = '';

    tttReset.parentNode.removeChild(tttReset);

}

function saveData(){
    gameData.push(cells);
    var gd = JSON.stringify(gameData);
    localStorage.setItem('tttData', gd);
    console.log(gameData);
}