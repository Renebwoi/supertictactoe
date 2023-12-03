//incomplete, need to deliberate on it



checkFinalWin = () => {
    //checking win condition //we can also run a loop on the horizontal,
    // vertical or diagonal to run 3(2 for diagonal) times and add 1 to the indexes each time
    //but i'll just use this to better my edits <button onclick="reload()"> Refresh </button>

    //starting horizontally
    //firstrow
    if (finalGameArray[0] == finalGameArray[1] && finalGameArray[0] == finalGameArray[2] &&
        finalGameArray[0] == 0 ){//for O winning first row
            OWin();
        }
        //firstrow
        else if (finalGameArray[0] == finalGameArray[1] && finalGameArray[0] == finalGameArray[2] &&
            finalGameArray[0] == 1 ){//for x winning first row
            XWin()
        }

    //second row
   else if (finalGameArray[3] == finalGameArray[4] && finalGameArray[3] == finalGameArray[5] &&
        finalGameArray[3] == 0 ){
            OWin();
    }
        else if (finalGameArray[3] == finalGameArray[4] && finalGameArray[3] == finalGameArray[5] &&
            finalGameArray[3] == 1 ){
            XWin()
        }

    //third row
   else if (finalGameArray[6] === finalGameArray[7] && finalGameArray[6] === finalGameArray[8] &&
        finalGameArray[6] == 0 ){
            OWin();
            }
        else if (finalGameArray[6] === finalGameArray[7] && finalGameArray[6] === finalGameArray[8] &&
            finalGameArray[6] == 1 ){
             XWin()
        }
    
    //going vertically
    //first column
   else if (finalGameArray[0] == finalGameArray[3] && finalGameArray[0] == finalGameArray[6] &&
        finalGameArray[0] == 0 ){
            OWin();
    }
        //first column
        else if (finalGameArray[0] == finalGameArray[3] && finalGameArray[0] == finalGameArray[6] &&
            finalGameArray[0] == 1 ){
            XWin()
        }

    //second column
    else if (finalGameArray[1] == finalGameArray[4] && finalGameArray[1] == finalGameArray[7] &&
        finalGameArray[1] == 0 ){
            OWin();
    }
        //second column
        else if (finalGameArray[1] == finalGameArray[4] && finalGameArray[1] == finalGameArray[7] &&
            finalGameArray[1] == 1 ){
            XWin()
        }

    //third column
    else if (finalGameArray[2] == finalGameArray[5] && finalGameArray[2] == finalGameArray[8] &&
        finalGameArray[2] == 0 ){
            OWin();
    }
        //third column
        else if (finalGameArray[2] == finalGameArray[5] && finalGameArray[2] == finalGameArray[8] &&
            finalGameArray[2] == 1 ){
                XWin()
        }

    //going diagonally
    // \ diagonal
    else if (finalGameArray[0] == finalGameArray[4] && finalGameArray[0] == finalGameArray[8] &&
        finalGameArray[0] == 0 ){
            OWin();
    }
        // \ diagonal
        else if (finalGameArray[0] == finalGameArray[4] && finalGameArray[0] == finalGameArray[8] &&
            finalGameArray[0] == 1 ){
                XWin()  
        }

    // / diagonal    
    else if (finalGameArray[2] == finalGameArray[4] && finalGameArray[2] == finalGameArray[6] &&
        finalGameArray[2] == 0 ){
            OWin();
    }
        // / diagonal
        else if (finalGameArray[2] == finalGameArray[4] && finalGameArray[2] == finalGameArray[6] &&
            finalGameArray[2] == 1 ){
                XWin()
    
        }
    // else if (drawcondition) {
    //         //code when draw condition is fufiled
    // }
}

function XWin() {
    GameEndDiv.style.display = "flex";
            GameEndInfo.innerHTML = "X wins"
}
function OWin() {
    GameEndDiv.style.display = "flex";
            GameEndInfo.innerHTML = "0 wins"
}
function DrawWin() {
    GameEndDiv.style.display = "flex";
            GameEndInfo.innerHTML = "Its a draw, that was intense!"
}