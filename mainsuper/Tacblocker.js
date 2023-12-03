let TacblockSelect = document.getElementsByClassName('Tac-blocker');
let TacblockerX = document.getElementsByClassName('Tac-blocker-X');
let TacblockerO = document.getElementsByClassName('Tac-blocker-O');
let TacblockerDraw = document.getElementsByClassName('Tac-blocker-Draw');


function TacBlock(Eb, num) {
    if (Eb==1 && num==0){// for first div and result O winning
        TacblockSelect[0].style.zIndex = "2";

        TacblockerO[0].style.display ="flex";
        TacblockerX[0].style.display = "none";
        TacblockerDraw[0].style.display = "none";

        finalGameArray[Eb-1] = num;//same as finalGameArray[0] = num; which assigns the result value to the final array
        checkFinalWin(); 
    }
    else if (Eb==1 && num==1){// for first div and result X winning
        TacblockSelect[0].style.zIndex = "2";

        TacblockerO[0].style.display ="none";
        TacblockerX[0].style.display = "block";
        TacblockerDraw[0].style.display = "none";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }
    else if (Eb==1 && num==2){// for first div and result draw
        TacblockSelect[0].style.zIndex = "2";

        TacblockerO[0].style.display ="none";
        TacblockerX[0].style.display = "none";
        TacblockerDraw[0].style.display = "block";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }



    if (Eb==2 && num==0){// for second div and result O winning
        TacblockSelect[1].style.zIndex = "2";

        TacblockerO[1].style.display ="flex";
        TacblockerX[1].style.display = "none";
        TacblockerDraw[1].style.display = "none";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }
    else if (Eb==2 && num==1){// for second div and result X winning
        TacblockSelect[1].style.zIndex = "2";

        TacblockerO[1].style.display ="none";
        TacblockerX[1].style.display = "block";
        TacblockerDraw[1].style.display = "none";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }
    else if (Eb==2 && num==2){// for second div and result draw
        TacblockSelect[1].style.zIndex = "2";

        TacblockerO[1].style.display ="none";
        TacblockerX[1].style.display = "none";
        TacblockerDraw[1].style.display = "flex";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }




    if (Eb==3 && num==0){// for third div and result O winning
        TacblockSelect[2].style.zIndex = "2";

        TacblockerO[2].style.display ="flex";
        TacblockerX[2].style.display = "none";
        TacblockerDraw[2].style.display = "none";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }
    else if (Eb==3 && num==1){// for third div and result X winning
        TacblockSelect[2].style.zIndex = "2";

        TacblockerO[2].style.display ="none";
        TacblockerX[2].style.display = "block";
        TacblockerDraw[2].style.display = "none";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }
    else if (Eb==3 && num==2){// for third div and result draw
        TacblockSelect[2].style.zIndex = "2";

        TacblockerO[2].style.display ="none";
        TacblockerX[2].style.display = "none";
        TacblockerDraw[2].style.display = "flex";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }



    if (Eb==4 && num==0){// for fourth div and result O winning
        TacblockSelect[3].style.zIndex = "2";

        TacblockerO[3].style.display ="flex";
        TacblockerX[3].style.display = "none";
        TacblockerDraw[3].style.display = "none";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }
    else if (Eb==4 && num==1){// for fourth div and result X winning
        TacblockSelect[3].style.zIndex = "2";

        TacblockerO[3].style.display ="none";
        TacblockerX[3].style.display = "block";
        TacblockerDraw[3].style.display = "none";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }
    else if (Eb==4 && num==2){// for fourth div and result draw
        TacblockSelect[3].style.zIndex = "2";

        TacblockerO[3].style.display ="none";
        TacblockerX[3].style.display = "none";
        TacblockerDraw[3].style.display = "flex";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }



    if (Eb==5 && num==0){// for fifth div and result O winning
        TacblockSelect[4].style.zIndex = "2";

        TacblockerO[4].style.display ="flex";
        TacblockerX[4].style.display = "none";
        TacblockerDraw[4].style.display = "none";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }
    else if (Eb==5 && num==1){// for first div and result X winning
        TacblockSelect[4].style.zIndex = "2";

        TacblockerO[4].style.display ="none";
        TacblockerX[4].style.display = "block";
        TacblockerDraw[4].style.display = "none";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }
    else if (Eb==5 && num==2){// for first div and result draw
        TacblockSelect[4].style.zIndex = "2";

        TacblockerO[4].style.display ="none";
        TacblockerX[4].style.display = "none";
        TacblockerDraw[4].style.display = "flex";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }


    if (Eb==6 && num==0){// for sixth div and result O winning
        TacblockSelect[5].style.zIndex = "2";

        TacblockerO[5].style.display ="flex";
        TacblockerX[5].style.display = "none";
        TacblockerDraw[5].style.display = "none";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }
    else if (Eb==6 && num==1){// for first div and result X winning
        TacblockSelect[5].style.zIndex = "2";

        TacblockerO[5].style.display ="none";
        TacblockerX[5].style.display = "block";
        TacblockerDraw[5].style.display = "none";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }
    else if (Eb==6 && num==2){// for first div and result draw
        TacblockSelect[5].style.zIndex = "2";

        TacblockerO[5].style.display ="none";
        TacblockerX[5].style.display = "none";
        TacblockerDraw[5].style.display = "flex";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }



    if (Eb==7 && num==0){// for seventh div and result O winning
        TacblockSelect[6].style.zIndex = "2";

        TacblockerO[6].style.display ="flex";
        TacblockerX[6].style.display = "none";
        TacblockerDraw[6].style.display = "none";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }
    else if (Eb==7 && num==1){// for first div and result X winning
        TacblockSelect[6].style.zIndex = "2";

        TacblockerO[6].style.display ="none";
        TacblockerX[6].style.display = "block";
        TacblockerDraw[6].style.display = "none";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }
    else if (Eb==7 && num==2){// for first div and result draw
        TacblockSelect[6].style.zIndex = "2";

        TacblockerO[6].style.display ="none";
        TacblockerX[6].style.display = "none";
        TacblockerDraw[6].style.display = "flex";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }



    if (Eb==8 && num==0){// for eight div and result O winning
        TacblockSelect[7].style.zIndex = "2";

        TacblockerO[7].style.display ="flex";
        TacblockerX[7].style.display = "none";
        TacblockerDraw[7].style.display = "none";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }
    else if (Eb==8 && num==1){// for first div and result X winning
        TacblockSelect[7].style.zIndex = "2";

        TacblockerO[7].style.display ="none";
        TacblockerX[7].style.display = "block";
        TacblockerDraw[7].style.display = "none";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }
    else if (Eb==8 && num==2){// for first div and result draw
        TacblockSelect[7].style.zIndex = "2";

        TacblockerO[7].style.display ="none";
        TacblockerX[7].style.display = "none";
        TacblockerDraw[7].style.display = "flex";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }



    if (Eb==9 && num==0){// for ninth div and result O winning
        TacblockSelect[8].style.zIndex = "2";

        TacblockerO[8].style.display ="flex";
        TacblockerX[8].style.display = "none";
        TacblockerDraw[8].style.display = "none";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }
    else if (Eb==9 && num==1){// for first div and result X winning
        TacblockSelect[8].style.zIndex = "2";

        TacblockerO[8].style.display ="none";
        TacblockerX[8].style.display = "block";
        TacblockerDraw[8].style.display = "none";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }
    else if (Eb==9 && num==2){// for first div and result draw
        TacblockSelect[8].style.zIndex = "2";

        TacblockerO[8].style.display ="none";
        TacblockerX[8].style.display = "none";
        TacblockerDraw[8].style.display = "flex";

        finalGameArray[Eb-1] = num;
        checkFinalWin();
    }

    console.log(finalGameArray);
}


// TacBlock(6, 2);
// TacBlock(9, 0);