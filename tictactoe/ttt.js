// const cells=document.querySelectorAll(".cell");
// const statustext=document.getElementById("status");
// const restartbtn=document.getElementById("restart");

// let currplayer="X";
// let active=true;
// let board = ["", "", "", "", "", "", "", "", ""];
// const wincombo = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];
// function handleclick(){
//     const index=this.getAttribute("data-index");
//     if(board[index]!==""||!active)return;
//     board[index]=currplayer;
//     this.textContent=currplayer;
//     checkres();
// }
// function checkres(){
//     let won = false;

//     for (let combo of wincombo) {
//         const [a, b, c] = combo;

//         if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//             won = true;
//             break;
//         }
//     }

//     if (won) {
//         statustext.textContent = `Player ${currplayer} wins!`;
//         active = false;
//         return;
//     }

//     currplayer = currplayer === "X" ? "O" : "X";
//     statustext.textContent = `Player ${currplayer}'s turn`;
// }
// cells.forEach(function(cell){
//     cell.addEventListener("click",handleclick);
// });
const cells=document.querySelectorAll(".cell");
const statustext=document.getElementById("status");
const restartbtn=document.getElementById("restart");

let currplayer="X";
let active=true;
let board = ["", "", "", "", "", "", "", "", ""];
const wincombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function userclick(e){
    const cell=e.target;
    const idx=this.getAttribute("data-index");
     if(board[idx] !== "" || !active) return;
    board[idx]=currplayer;
    cell.textContent=currplayer;
    checkwin();
    if(active){
         if(currplayer === "X"){
            currplayer = "O";
        } else {
            currplayer = "X";
        }
        statustext.textContent = `Player ${currplayer} turn`;
    }
}

function checkwin(){
    let won=false;
    for(let combo of wincombo){
        const [a,b,c]=combo;
        if(board[a]!== "" &&board[a]===board[b]&&board[a]===board[c]){
            won=true;
            break;
        }
    }
    if(won){
        statustext.textContent=`Player ${currplayer} wins!`;
        active=false;
        return;
    }
    
}
cells.forEach(cell => cell.addEventListener("click", userclick));
