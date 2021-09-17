var big = document.querySelectorAll(".big");
var small = document.querySelectorAll(".small");
var resetButton = document.querySelector(".reset");
var message = document.querySelector("span");
var turn = 1;
var bigTurn = -1;
var gameOver = false;
var gameTable = [];
var table = [];
var wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

function setup(){
    for(var i=0;i<small.length;i++){
        small[i].addEventListener("click", marked);
    }
    reset();
    resetButton.addEventListener("click", reset);
}

function marked(){
    if(!gameOver && this.textContent===""){
        if(bigTurn===-1 || (bigTurn===Math.floor(this.id/9))){
            if(turn===1){
                this.textContent = "X";
                message.textContent = "O's turn";
                table[this.id] = 1;
                turn = 2;
            }else if(turn===2){
                this.textContent ="O";
                message.textContent = "X's turn";
                table[this.id] = 2;
                turn = 1;
            }
            bigTurn = this.id%9;
            checkStatus();
            if(gameTable[bigTurn]!=0){
                bigTurn = -1;
            }
            checkWin();
            if(!gameOver){
                nextTurn();
            }
        }
    }
}

function checkStatus(){
    for(var i=0;i<9;i++){
        var tileTable = [];
        for(var j=0;j<9;j++){
            tileTable.push(table[i*9 + j]);
        }
        gameTable[i] = checkTile(tileTable);
        if(gameTable[i]!=0){
            var s = "";
            big[i].style.opacity = 0.5;
            if(gameTable[i]===1){
                s = "X";
            }else if(gameTable[i]===2){
                s = "O";
            }else if(gameTable[i]===3){
                s = "D";
            }
            for(var j=0;j<9;j++){
                small[i*9 + j].textContent = s;
            }
        }
        
    }
}

function checkTile(tileTable){
    for(var i=0;i<wins.length;i++){
        var a = wins[i][0],
            b = wins[i][1],
            c = wins[i][2];
        if(tileTable[a]!=0 && tileTable[a]===tileTable[b] && tileTable[c]===tileTable[b]){
            return tileTable[a];
        }
    }
    if(tileTable.indexOf(0)===-1){
        return 3;
    }else{
        return 0;
    }
}

function checkWin(){
    for(var i=0;i<wins.length;i++){
        var a = wins[i][0],
            b = wins[i][1],
            c = wins[i][2];
        if(gameTable[a]!=0 && 
            (gameTable[b]===gameTable[a] || gameTable[b]===3) && 
            (gameTable[c]===gameTable[a] || gameTable[c]===3) &&
            !(gameTable[a]===3 && gameTable[b]===3 && gameTable[c]===3)){
            gameOver = true;
            if(turn===1){
                message.textContent = "O wins";
            }else if(turn===2){
                message.textContent = "X wins";
            }
            for(var i=0;i<big.length;i++){
                big[i].style.backgroundColor = "white";
            }
            big[a].style.backgroundColor = "lightgreen";
            big[b].style.backgroundColor = "lightgreen";
            big[c].style.backgroundColor = "lightgreen";
        }
    }
}

function nextTurn(){
    if(bigTurn===-1){
        for(var i=0;i<big.length;i++){
            big[i].style.backgroundColor = "rgba(255, 255, 76, 0.7)";
        }
    }else{
        for(var i=0;i<big.length;i++){
            big[i].style.backgroundColor = "white";
        }
        big[bigTurn].style.backgroundColor = "rgba(255, 255, 76, 0.7)";
    }
}

function reset(){
    gameOver = false;
    gameTable = [];
    table = [];
    bigTurn = -1;
    for(var i=0;i<big.length;i++){
        gameTable.push(0);
        big[i].style.opacity = 1.0;
    }
    for(var i=0;i<small.length;i++){
        small[i].textContent = "";
        table.push(0);
    }
    nextTurn();
    if(turn===1){
        message.textContent = "X's turn";
    }else if(turn===2){
        message.textContent = "O's turn";
    }
}

setup();
