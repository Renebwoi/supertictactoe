
        // document.querySelector('.firstTac').addEventListener("click", displayValue(1), Tacselect(1))
        gameArray = [,,,,,,,,,]
        // console.log(gameArray.length)
        playCount = 0
        state = 0

        displayValue = (i) => {
            
            //for the first box
            if (i == 1){
            if (state == 0) {
                document.querySelector('.tab1').innerHTML =
                `<div class="box-selectX">
                <div class="Xbar1"></div>
                <div class="Xbar2"></div>`;

                gameArray[i-1] = 1;
                // console.log(gameArray[0]);
                playCount++;

                state++;
                document.querySelector('.tab1').onclick = "sleep()"
            }
            else if (state == 1) {
                document.querySelector('.tab1').innerHTML =
                `<div class="box-selectO">
                <div class="Ocircle1"></div>
                `;

                gameArray[i-1] = 2;
                playCount++;
                state--;
                document.querySelector('.tab1').onclick = "sleep()"
            }}
            //end for first box

            //for the second box
            if (i == 2){
            if (state == 0) {
                document.querySelector('.tab2').innerHTML =
                `<div class="box-selectX">
                <div class="Xbar1"></div>
                <div class="Xbar2"></div>`;

                gameArray[i-1] = 1;
                playCount++;
                state++;
                document.querySelector('.tab2').onclick = "sleep()"
            }
            else if (state == 1) {
                document.querySelector('.tab2').innerHTML =
                `<div class="box-selectO">
                <div class="Ocircle1"></div>
                `;

                gameArray[i-1] = 2;
                playCount++;
                state--;
                document.querySelector('.tab2').onclick = "sleep()"
            }}
            //end for second box


            //for the third box
            if (i == 3){
            if (state == 0) {
                document.querySelector('.tab3').innerHTML =
                `<div class="box-selectX">
                <div class="Xbar1"></div>
                <div class="Xbar2"></div>`;

                gameArray[i-1] = 1;
                playCount++;

                state++;
                document.querySelector('.tab3').onclick = "sleep()"
            }
            else if (state == 1) {
                document.querySelector('.tab3').innerHTML =
                `<div class="box-selectO">
                <div class="Ocircle1"></div>
                `;

                gameArray[i-1] = 2;
                playCount++;
                state--;
                document.querySelector('.tab3').onclick = "sleep()"
            }}
            //end for third box


            //for the fourth box
            if (i == 4){
            if (state == 0) {
                document.querySelector('.tab4').innerHTML =
                `<div class="box-selectX">
                <div class="Xbar1"></div>
                <div class="Xbar2"></div>`;

                gameArray[i-1] = 1;
                playCount++;
                state++;
                document.querySelector('.tab4').onclick = "sleep()"
            }
            else if (state == 1) {
                document.querySelector('.tab4').innerHTML =
                `<div class="box-selectO">
                <div class="Ocircle1"></div>
                `;

                gameArray[i-1] = 2;
                playCount++;
                state--;
                document.querySelector('.tab4').onclick = "sleep()"
            }}
            //end for fourth box


            //fifth box start
            if (i == 5){
            if (state == 0) {
                document.querySelector('.tab5').innerHTML =
                `<div class="box-selectX">
                <div class="Xbar1"></div>
                <div class="Xbar2"></div>`;

                gameArray[i-1] = 1;
                playCount++;
                state++;
                document.querySelector('.tab5').onclick = "sleep()"
            }
            else if (state == 1) {
                document.querySelector('.tab5').innerHTML =
                `<div class="box-selectO">
                <div class="Ocircle1"></div>
                `;

                gameArray[i-1] = 2;
                playCount++;
                state--;
                document.querySelector('.tab5').onclick = "sleep()"
            }}
            //fifth box end


            //sixth box start
            if (i == 6){
            if (state == 0) {
                document.querySelector('.tab6').innerHTML =
                `<div class="box-selectX">
                <div class="Xbar1"></div>
                <div class="Xbar2"></div>`;

                gameArray[i-1] = 1;
                playCount++;
                state++;
                document.querySelector('.tab6').onclick = "sleep()"
            }
            else if (state == 1) {
                document.querySelector('.tab6').innerHTML =
                `<div class="box-selectO">
                <div class="Ocircle1"></div>
                `;

                gameArray[i-1] = 2;
                playCount++;
                state--;
                document.querySelector('.tab6').onclick = "sleep()"
            }}
            //sixth box end


            //seventh box start
            if (i == 7){
            if (state == 0) {
                document.querySelector('.tab7').innerHTML =
                `<div class="box-selectX">
                <div class="Xbar1"></div>
                <div class="Xbar2"></div>`;

                gameArray[i-1] = 1;
                playCount++;
                state++;
                document.querySelector('.tab7').onclick = "sleep()"
            }
            else if (state == 1) {
                document.querySelector('.tab7').innerHTML =
                `<div class="box-selectO">
                <div class="Ocircle1"></div>
                `;

                gameArray[i-1] = 2;
                playCount++;
                state--;
                document.querySelector('.tab7').onclick = "sleep()"
            }}
            //seventh box end


            //eight box start
            if (i == 8){
            if (state == 0) {
                document.querySelector('.tab8').innerHTML =
                `<div class="box-selectX">
                <div class="Xbar1"></div>
                <div class="Xbar2"></div>`;

                gameArray[i-1] = 1;
                playCount++;
                state++;
                document.querySelector('.tab8').onclick = "sleep()"
            }
            else if (state == 1) {
                document.querySelector('.tab8').innerHTML =
                `<div class="box-selectO">
                <div class="Ocircle1"></div>
                `;

                gameArray[i-1] = 2;
                playCount++;
                state--;
                document.querySelector('.tab8').onclick = "sleep()"
            }}
            //eight box end


            //ninth box start
            if (i == 9){
            if (state == 0) {
                document.querySelector('.tab9').innerHTML =
                `<div class="box-selectX">
                <div class="Xbar1"></div>
                <div class="Xbar2"></div>`;

                gameArray[i-1] = 1;
                playCount++;
                state++;
                document.querySelector('.tab9').onclick = "sleep()"
            }
            else if (state == 1) {
                document.querySelector('.tab9').innerHTML =
                `<div class="box-selectO">
                <div class="Ocircle1"></div>
                `;

                gameArray[i-1] = 2;
                playCount++;
                state--;
                document.querySelector('.tab9').onclick = "sleep()"
            }}
            //ninth box end

            console.log(gameArray)

            checkWin();
        }
        firstTacdone = false;

        checkWin = () => {
            //checking win condition //we can also run a loop on the horizontal,
            // vertical or diagonal to run 3(2 for diagonal) times and add 1 to the indexes each time
            //but i'll just use this to better my edits <button onclick="reload()"> Refresh </button>

            //starting horizontally
            //firstrow
            if (gameArray[0] == gameArray[1] && gameArray[0] == gameArray[2] &&
                gameArray[0] == 1 ){
                document.querySelector('.firstTacresult').innerHTML = `X wins by the first row `
                firstTacdone = true;
                // document.querySelector('.firstTacresult').style.display = "flex";
            }
                //firstrow
                else if (gameArray[0] == gameArray[1] && gameArray[0] == gameArray[2] &&
                    gameArray[0] == 2 ){
                    document.querySelector('.firstTacresult').innerHTML = `O wins by the first row `
                    firstTacdone = true;
                    // document.querySelector('.firstTacresult').style.display = "flex";
                }

            //second row
           else if (gameArray[3] == gameArray[4] && gameArray[3] == gameArray[5] &&
                gameArray[3] == 1 ){
                document.querySelector('.firstTacresult').innerHTML = `X wins by the second row `
                firstTacdone = true;
                // document.querySelector('.firstTacresult').style.display = "flex";
            }
                else if (gameArray[3] == gameArray[4] && gameArray[3] == gameArray[5] &&
                    gameArray[3] == 2 ){
                    document.querySelector('.firstTacresult').innerHTML = `O wins by the second row `
                    firstTacdone = true;
                    // document.querySelector('.firstTacresult').style.display = "flex";
                }

            //third row
           else if (gameArray[6] === gameArray[7] && gameArray[6] === gameArray[8] &&
                gameArray[6] == 1 ){
                document.querySelector('.firstTacresult').innerHTML = `X wins by the third row `
                firstTacdone = true;
                // document.querySelector('.firstTacresult').style.display = "flex";
            }
                else if (gameArray[6] === gameArray[7] && gameArray[6] === gameArray[8] &&
                    gameArray[6] == 2 ){
                    document.querySelector('.firstTacresult').innerHTML = `O wins by the third row `
                    firstTacdone = true;
                    // document.querySelector('.firstTacresult').style.display = "flex";
                }
            
            //going vertically
            //first column
           else if (gameArray[0] == gameArray[3] && gameArray[0] == gameArray[6] &&
                gameArray[0] == 1 ){
                document.querySelector('.firstTacresult').innerHTML =  `X wins by the first column `
                firstTacdone = true;
                // document.querySelector('.firstTacresult').style.display = "flex";
            }
                //first column
                else if (gameArray[0] == gameArray[3] && gameArray[0] == gameArray[6] &&
                    gameArray[0] == 2 ){
                    document.querySelector('.firstTacresult').innerHTML = `O wins by the first column `
                    firstTacdone = true;
                    // document.querySelector('.firstTacresult').style.display = "flex";
                }

            //second column
            else if (gameArray[1] == gameArray[4] && gameArray[1] == gameArray[7] &&
                gameArray[1] == 1 ){
                document.querySelector('.firstTacresult').innerHTML = `X wins by the second column `
                firstTacdone = true;
                // document.querySelector('.firstTacresult').style.display = "flex";
            }
                //second column
                else if (gameArray[1] == gameArray[4] && gameArray[1] == gameArray[7] &&
                    gameArray[1] == 2 ){
                    document.querySelector('.firstTacresult').innerHTML = `O wins by the second column `
                    firstTacdone = true;
                    // document.querySelector('.firstTacresult').style.display = "flex";
                }

            //third column
            else if (gameArray[2] == gameArray[5] && gameArray[2] == gameArray[8] &&
                gameArray[2] == 1 ){
                document.querySelector('.firstTacresult').innerHTML =  `X wins by the third column `
                firstTacdone = true;
                // document.querySelector('.firstTacresult').style.display = "flex";
            }
                //third column
                else if (gameArray[2] == gameArray[5] && gameArray[2] == gameArray[8] &&
                    gameArray[2] == 2 ){
                    document.querySelector('.firstTacresult').innerHTML = `O wins by the third column `
                    firstTacdone = true;
                    // document.querySelector('.firstTacresult').style.display = "flex";
                }

            //going diagonally
            // \ diagonal
            else if (gameArray[0] == gameArray[4] && gameArray[0] == gameArray[8] &&
                gameArray[0] == 1 ){
                document.querySelector('.firstTacresult').innerHTML = `X wins through the downhill diagonal `
                firstTacdone = true;
                // document.querySelector('.firstTacresult').style.display = "flex";
            }
                // \ diagonal
                else if (gameArray[0] == gameArray[4] && gameArray[0] == gameArray[8] &&
                    gameArray[0] == 2 ){
                    document.querySelector('.firstTacresult').innerHTML = `O wins through the downhill diagonal `
                    firstTacdone = true;
                    // document.querySelector('.firstTacresult').style.display = "flex";
                }

            // / diagonal    
            else if (gameArray[2] == gameArray[4] && gameArray[2] == gameArray[6] &&
                gameArray[2] == 1 ){
                document.querySelector('.firstTacresult').innerHTML = `X wins through the uphill diagonal `
                firstTacdone = true;
                // document.querySelector('.firstTacresult').style.display = "flex";
            }
                // / diagonal
                else if (gameArray[2] == gameArray[4] && gameArray[2] == gameArray[6] &&
                    gameArray[2] == 2 ){
                    document.querySelector('.firstTacresult').innerHTML = `O wins through the uphill diagonal `
                    firstTacdone = true;
                    // document.querySelector('.firstTacresult').style.display = "flex";
                }
            else if (playCount == 9) {
                    document.querySelector('.firstTacresult').innerHTML = `Draw`
                    firstTacdone = true;
                    // document.querySelector('.firstTacresult').style.display = "flex";
                    console.log("it runs")
            }
        }

        reload= () => {
            document.location.reload(true)
        }


        sleep = () => {
            console.log("next guy's turn")
        }
// console.log("console log works")