//incomplete, need to deliberate on it
checkWin = () => {
    //checking win condition //we can also run a loop on the horizontal,
    // vertical or diagonal to run 3(2 for diagonal) times and add 1 to the indexes each time
    //but i'll just use this to better my edits <button onclick="reload()"> Refresh </button>

    //starting horizontally
    //firstrow
    if (finalGameArray[0] == finalGameArray[1] && finalGameArray[0] == finalGameArray[2] &&
        finalGameArray[0] == 1 ){

        }
        //firstrow
        else if (finalGameArray[0] == finalGameArray[1] && finalGameArray[0] == finalGameArray[2] &&
            finalGameArray[0] == 2 ){
            
    
        }

    //second row
   else if (finalGameArray[3] == finalGameArray[4] && finalGameArray[3] == finalGameArray[5] &&
        finalGameArray[3] == 1 ){
        
    }
        else if (finalGameArray[3] == finalGameArray[4] && finalGameArray[3] == finalGameArray[5] &&
            finalGameArray[3] == 2 ){
            

    
        }

    //third row
   else if (finalGameArray[6] === finalGameArray[7] && finalGameArray[6] === finalGameArray[8] &&
        finalGameArray[6] == 1 ){
            }
        else if (finalGameArray[6] === finalGameArray[7] && finalGameArray[6] === finalGameArray[8] &&
            finalGameArray[6] == 2 ){
            
    
        }
    
    //going vertically
    //first column
   else if (finalGameArray[0] == finalGameArray[3] && finalGameArray[0] == finalGameArray[6] &&
        finalGameArray[0] == 1 ){
        
    }
        //first column
        else if (finalGameArray[0] == finalGameArray[3] && finalGameArray[0] == finalGameArray[6] &&
            finalGameArray[0] == 2 ){

    
        }

    //second column
    else if (finalGameArray[1] == finalGameArray[4] && finalGameArray[1] == finalGameArray[7] &&
        finalGameArray[1] == 1 ){
        
    }
        //second column
        else if (finalGameArray[1] == finalGameArray[4] && finalGameArray[1] == finalGameArray[7] &&
            finalGameArray[1] == 2 ){
            
    
        }

    //third column
    else if (finalGameArray[2] == finalGameArray[5] && finalGameArray[2] == finalGameArray[8] &&
        finalGameArray[2] == 1 ){
        
    }
        //third column
        else if (finalGameArray[2] == finalGameArray[5] && finalGameArray[2] == finalGameArray[8] &&
            finalGameArray[2] == 2 ){
            

    
        }

    //going diagonally
    // \ diagonal
    else if (finalGameArray[0] == finalGameArray[4] && finalGameArray[0] == finalGameArray[8] &&
        finalGameArray[0] == 1 ){

    }
        // \ diagonal
        else if (finalGameArray[0] == finalGameArray[4] && finalGameArray[0] == finalGameArray[8] &&
            finalGameArray[0] == 2 ){

    
        }

    // / diagonal    
    else if (finalGameArray[2] == finalGameArray[4] && finalGameArray[2] == finalGameArray[6] &&
        finalGameArray[2] == 1 ){
    }
        // / diagonal
        else if (finalGameArray[2] == finalGameArray[4] && finalGameArray[2] == finalGameArray[6] &&
            finalGameArray[2] == 2 ){

    
        }
    // else if (drawcondition) {
    //         //code when draw condition is fufiled
    // }
}