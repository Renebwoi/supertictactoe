 // document.querySelector('.firstTac').addEventListener("click", displayValue(1))
 eightgameArray = [,,,,,,,,,]
 // console.log(eightgameArray.length)
 eightplayCount = 0
//  state = 0

 eightdisplayValue = (i) => {
     
     //for the first box
     if (i == 1){
     if (state == 0) {
         document.querySelector('.tab8p1').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         eightgameArray[i-1] = 1;
         // console.log(eightgameArray[0]);
         eightplayCount++;

         state++;
         document.querySelector('.tinyTab8p1').textContent = "X";
         document.querySelector('.tab8p1').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab8p1').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         eightgameArray[i-1] = 2;
         eightplayCount++;
         state--;
         document.querySelector('.tinyTab8p1').textContent = "O";
         document.querySelector('.tab8p1').onclick = "sleep()"
     }}
     //end for first box

     //for the eight box
     if (i == 2){
     if (state == 0) {
         document.querySelector('.tab8p2').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         eightgameArray[i-1] = 1;
         eightplayCount++;
         state++;
         document.querySelector('.tinyTab8p2').textContent = "X";
         document.querySelector('.tab8p2').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab8p2').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         eightgameArray[i-1] = 2;
         eightplayCount++;
         state--;
         document.querySelector('.tinyTab8p2').textContent = "O";
         document.querySelector('.tab8p2').onclick = "sleep()"
     }}
     //end for eight box


     //for the eight box
     if (i == 3){
     if (state == 0) {
         document.querySelector('.tab8p3').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         eightgameArray[i-1] = 1;
         eightplayCount++;

         state++;
         document.querySelector('.tinyTab8p3').textContent = "X";
         document.querySelector('.tab8p3').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab8p3').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         eightgameArray[i-1] = 2;
         eightplayCount++;
         state--;
         document.querySelector('.tinyTab8p3').textContent = "O";
         document.querySelector('.tab8p3').onclick = "sleep()"
     }}
     //end for eight box


     //for the fourth box
     if (i == 4){
     if (state == 0) {
         document.querySelector('.tab8p4').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         eightgameArray[i-1] = 1;
         eightplayCount++;
         state++;
         document.querySelector('.tinyTab8p4').textContent = "X";
         document.querySelector('.tab8p4').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab8p4').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         eightgameArray[i-1] = 2;
         eightplayCount++;
         state--;
         document.querySelector('.tinyTab8p4').textContent = "O";
         document.querySelector('.tab8p4').onclick = "sleep()"
     }}
     //end for fourth box


     //fifth box start
     if (i == 5){
     if (state == 0) {
         document.querySelector('.tab8p5').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         eightgameArray[i-1] = 1;
         eightplayCount++;
         state++;
         document.querySelector('.tinyTab8p5').textContent = "X";
         document.querySelector('.tab8p5').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab8p5').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         eightgameArray[i-1] = 2;
         eightplayCount++;
         state--;
         document.querySelector('.tinyTab8p5').textContent = "O";
         document.querySelector('.tab8p5').onclick = "sleep()"
     }}
     //fifth box end


     //sixth box start
     if (i == 6){
     if (state == 0) {
         document.querySelector('.tab8p6').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         eightgameArray[i-1] = 1;
         eightplayCount++;
         state++;
         document.querySelector('.tinyTab8p6').textContent = "X";
         document.querySelector('.tab8p6').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab8p6').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         eightgameArray[i-1] = 2;
         eightplayCount++;
         state--;
         document.querySelector('.tinyTab8p6').textContent = "O";
         document.querySelector('.tab8p6').onclick = "sleep()"
     }}
     //sixth box end


     //seventh box start
     if (i == 7){
     if (state == 0) {
         document.querySelector('.tab8p7').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         eightgameArray[i-1] = 1;
         eightplayCount++;
         state++;
         document.querySelector('.tinyTab8p7').textContent = "X";
         document.querySelector('.tab8p7').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab8p7').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         eightgameArray[i-1] = 2;
         eightplayCount++;
         state--;
         document.querySelector('.tinyTab8p7').textContent = "O";
         document.querySelector('.tab8p7').onclick = "sleep()"
     }}
     //seventh box end


     //eight box start
     if (i == 8){
     if (state == 0) {
         document.querySelector('.tab8p8').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         eightgameArray[i-1] = 1;
         eightplayCount++;
         state++;
         document.querySelector('.tinyTab8p8').textContent = "X";
         document.querySelector('.tab8p8').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab8p8').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         eightgameArray[i-1] = 2;
         eightplayCount++;
         state--;
         document.querySelector('.tinyTab8p8').textContent = "O";
         document.querySelector('.tab8p8').onclick = "sleep()"
     }}
     //eight box end


     //ninth box start
     if (i == 9){
     if (state == 0) {
         document.querySelector('.tab8p9').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         eightgameArray[i-1] = 1;
         eightplayCount++;
         state++;
         document.querySelector('.tinyTab8p9').textContent = "X";
         document.querySelector('.tab8p9').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab8p9').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         eightgameArray[i-1] = 2;
         eightplayCount++;
         state--;
         document.querySelector('.tinyTab8p9').textContent = "O";
         document.querySelector('.tab8p9').onclick = "sleep()"
     }}
     //ninth box end

    //  console.log(eightgameArray)

     eightcheckWin();
 }

eightTacdone = false;
 eightcheckWin = () => {
     //checking win condition //we can also run a loop on the horizontal,
     // vertical or diagonal to run 3(2 for diagonal) times and add 1 to the indexes each time
     //but i'll just use this to better my edits

     //starting horizontally
     //firstrow
     if (eightgameArray[0] == eightgameArray[1] && eightgameArray[0] == eightgameArray[2] &&
         eightgameArray[0] == 1 ){
         document.querySelector('.eightTacresult').innerHTML = `X wins by the first row `
         eightTacdone = true;
         TacBlock(8, 1);
         // document.querySelector('.eightTacresult').style.display = "flex"; <button onclick="reload()"> Refresh </button>
     }
         //firstrow
         else if (eightgameArray[0] == eightgameArray[1] && eightgameArray[0] == eightgameArray[2] &&
             eightgameArray[0] == 2 ){
             document.querySelector('.eightTacresult').innerHTML = `O wins by the first row `
             eightTacdone = true;
             TacBlock(8, 0);
             // document.querySelector('.eightTacresult').style.display = "flex";
         }

     //eight row
    else if (eightgameArray[3] == eightgameArray[4] && eightgameArray[3] == eightgameArray[5] &&
         eightgameArray[3] == 1 ){
         document.querySelector('.eightTacresult').innerHTML = `X wins by the second row `
         eightTacdone = true;
         TacBlock(8, 1);
         // document.querySelector('.eightTacresult').style.display = "flex";
     }
         else if (eightgameArray[3] == eightgameArray[4] && eightgameArray[3] == eightgameArray[5] &&
             eightgameArray[3] == 2 ){
             document.querySelector('.eightTacresult').innerHTML = `O wins by the second row `
             eightTacdone = true;
             TacBlock(8, 0);
             // document.querySelector('.eightTacresult').style.display = "flex";
         }

     //eight row
    else if (eightgameArray[6] === eightgameArray[7] && eightgameArray[6] === eightgameArray[8] &&
         eightgameArray[6] == 1 ){
         document.querySelector('.eightTacresult').innerHTML = `X wins by the third row `
         eightTacdone = true;
         TacBlock(8, 1);
         // document.querySelector('.eightTacresult').style.display = "flex";
     }
         else if (eightgameArray[6] === eightgameArray[7] && eightgameArray[6] === eightgameArray[8] &&
             eightgameArray[6] == 2 ){
             document.querySelector('.eightTacresult').innerHTML = `O wins by the third row `
             eightTacdone = true;
             TacBlock(8, 0);
             // document.querySelector('.eightTacresult').style.display = "flex";
         }
     
     //going vertically
     //first column
    else if (eightgameArray[0] == eightgameArray[3] && eightgameArray[0] == eightgameArray[6] &&
         eightgameArray[0] == 1 ){
         document.querySelector('.eightTacresult').innerHTML =  `X wins by the first column `
         eightTacdone = true;
         TacBlock(8, 1);
         // document.querySelector('.eightTacresult').style.display = "flex";
     }
         //first column
         else if (eightgameArray[0] == eightgameArray[3] && eightgameArray[0] == eightgameArray[6] &&
             eightgameArray[0] == 2 ){
             document.querySelector('.eightTacresult').innerHTML = `O wins by the first column `
             eightTacdone = true;
             TacBlock(8, 0);
             // document.querySelector('.eightTacresult').style.display = "flex";
         }

     //eight column
     else if (eightgameArray[1] == eightgameArray[4] && eightgameArray[1] == eightgameArray[7] &&
         eightgameArray[1] == 1 ){
         document.querySelector('.eightTacresult').innerHTML = `X wins by the second column `
         eightTacdone = true;
         TacBlock(8, 1);
         // document.querySelector('.eightTacresult').style.display = "flex";
     }
         //eight column
         else if (eightgameArray[1] == eightgameArray[4] && eightgameArray[1] == eightgameArray[7] &&
             eightgameArray[1] == 2 ){
             document.querySelector('.eightTacresult').innerHTML = `O wins by the second column `
             eightTacdone = true;
             TacBlock(8, 0);
             // document.querySelector('.eightTacresult').style.display = "flex";
         }

     //eight column
     else if (eightgameArray[2] == eightgameArray[5] && eightgameArray[2] == eightgameArray[8] &&
         eightgameArray[2] == 1 ){
         document.querySelector('.eightTacresult').innerHTML =  `X wins by the third column `
         eightTacdone = true;
         TacBlock(8, 1);
         // document.querySelector('.eightTacresult').style.display = "flex";
     }
         //eight column
         else if (eightgameArray[2] == eightgameArray[5] && eightgameArray[2] == eightgameArray[8] &&
             eightgameArray[2] == 2 ){
             document.querySelector('.eightTacresult').innerHTML = `O wins by the third column `
             eightTacdone = true;
             TacBlock(8, 0);
             // document.querySelector('.eightTacresult').style.display = "flex";
         }

     //going diagonally
     // \ diagonal
     else if (eightgameArray[0] == eightgameArray[4] && eightgameArray[0] == eightgameArray[8] &&
         eightgameArray[0] == 1 ){
         document.querySelector('.eightTacresult').innerHTML = `X wins through the downhill diagonal `
         eightTacdone = true;
         TacBlock(8, 1);
         // document.querySelector('.eightTacresult').style.display = "flex";
     }
         // \ diagonal
         else if (eightgameArray[0] == eightgameArray[4] && eightgameArray[0] == eightgameArray[8] &&
             eightgameArray[0] == 2 ){
             document.querySelector('.eightTacresult').innerHTML = `O wins through the downhill diagonal `
             eightTacdone = true;
             TacBlock(8, 0);
             // document.querySelector('.eightTacresult').style.display = "flex";
         }

     // / diagonal    
     else if (eightgameArray[2] == eightgameArray[4] && eightgameArray[2] == eightgameArray[6] &&
         eightgameArray[2] == 1 ){
         document.querySelector('.eightTacresult').innerHTML = `X wins through the uphill diagonal `
         eightTacdone = true;
         TacBlock(8, 1);
         // document.querySelector('.eightTacresult').style.display = "flex";
     }
         // / diagonal
         else if (eightgameArray[2] == eightgameArray[4] && eightgameArray[2] == eightgameArray[6] &&
             eightgameArray[2] == 2 ){
             document.querySelector('.eightTacresult').innerHTML = `O wins through the uphill diagonal `
             eightTacdone = true;
             TacBlock(8, 0);
             // document.querySelector('.eightTacresult').style.display = "flex";
         }
     else if (eightplayCount == 9) {
             document.querySelector('.eightTacresult').innerHTML = `Draw`
             eightTacdone = true;
             TacBlock(8, 2);
             // document.querySelector('.eightTacresult').style.display = "flex";
             console.log("it runs")
     }
 }

 reload= () => {
     document.location.reload(true)
 }


 sleep = () => {
     console.log("next guy's turn")
 }