 // document.querySelector('.firstTac').addEventListener("click", displayValue(1))
 thirdgameArray = [,,,,,,,,,]
 // console.log(thirdgameArray.length)
 thirdplayCount = 0
//  state = 0

 thirddisplayValue = (i) => {
     
     //for the first box
     if (i == 1){
     if (state == 0) {
         document.querySelector('.tab3p1').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         thirdgameArray[i-1] = 1;
         // console.log(thirdgameArray[0]);
         thirdplayCount++;

         state++;
         document.querySelector('.tinyTab3p1').textContent = "X";
         document.querySelector('.tab3p1').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab3p1').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         thirdgameArray[i-1] = 2;
         thirdplayCount++;
         state--;
         document.querySelector('.tinyTab3p1').textContent = "O";
         document.querySelector('.tab3p1').onclick = "sleep()"
     }}
     //end for first box

     //for the third box
     if (i == 2){
     if (state == 0) {
         document.querySelector('.tab3p2').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         thirdgameArray[i-1] = 1;
         thirdplayCount++;
         state++;
         document.querySelector('.tinyTab3p2').textContent = "X";
         document.querySelector('.tab3p2').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab3p2').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         thirdgameArray[i-1] = 2;
         thirdplayCount++;
         state--;
         document.querySelector('.tinyTab3p2').textContent = "O";
         document.querySelector('.tab3p2').onclick = "sleep()"
     }}
     //end for third box


     //for the third box
     if (i == 3){
     if (state == 0) {
         document.querySelector('.tab3p3').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         thirdgameArray[i-1] = 1;
         thirdplayCount++;

         state++;
         document.querySelector('.tinyTab3p3').textContent = "X";
         document.querySelector('.tab3p3').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab3p3').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         thirdgameArray[i-1] = 2;
         thirdplayCount++;
         state--;
         document.querySelector('.tinyTab3p3').textContent = "O";
         document.querySelector('.tab3p3').onclick = "sleep()"
     }}
     //end for third box


     //for the fourth box
     if (i == 4){
     if (state == 0) {
         document.querySelector('.tab3p4').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         thirdgameArray[i-1] = 1;
         thirdplayCount++;
         state++;
         document.querySelector('.tinyTab3p4').textContent = "X";
         document.querySelector('.tab3p4').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab3p4').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         thirdgameArray[i-1] = 2;
         thirdplayCount++;
         state--;
         document.querySelector('.tinyTab3p4').textContent = "O";
         document.querySelector('.tab3p4').onclick = "sleep()"
     }}
     //end for fourth box


     //fifth box start
     if (i == 5){
     if (state == 0) {
         document.querySelector('.tab3p5').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         thirdgameArray[i-1] = 1;
         thirdplayCount++;
         state++;
         document.querySelector('.tinyTab3p5').textContent = "X";
         document.querySelector('.tab3p5').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab3p5').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         thirdgameArray[i-1] = 2;
         thirdplayCount++;
         state--;
         document.querySelector('.tinyTab3p5').textContent = "O";
         document.querySelector('.tab3p5').onclick = "sleep()"
     }}
     //fifth box end


     //sixth box start
     if (i == 6){
     if (state == 0) {
         document.querySelector('.tab3p6').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         thirdgameArray[i-1] = 1;
         thirdplayCount++;
         state++;
         document.querySelector('.tinyTab3p6').textContent = "X";
         document.querySelector('.tab3p6').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab3p6').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         thirdgameArray[i-1] = 2;
         thirdplayCount++;
         state--;
         document.querySelector('.tinyTab3p6').textContent = "O";
         document.querySelector('.tab3p6').onclick = "sleep()"
     }}
     //sixth box end


     //seventh box start
     if (i == 7){
     if (state == 0) {
         document.querySelector('.tab3p7').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         thirdgameArray[i-1] = 1;
         thirdplayCount++;
         state++;
         document.querySelector('.tinyTab3p7').textContent = "X";
         document.querySelector('.tab3p7').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab3p7').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         thirdgameArray[i-1] = 2;
         thirdplayCount++;
         state--;
         document.querySelector('.tinyTab3p7').textContent = "O";
         document.querySelector('.tab3p7').onclick = "sleep()"
     }}
     //seventh box end


     //eight box start
     if (i == 8){
     if (state == 0) {
         document.querySelector('.tab3p8').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         thirdgameArray[i-1] = 1;
         thirdplayCount++;
         state++;
         document.querySelector('.tinyTab3p8').textContent = "X";
         document.querySelector('.tab3p8').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab3p8').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         thirdgameArray[i-1] = 2;
         thirdplayCount++;
         state--;
         document.querySelector('.tinyTab3p8').textContent = "O";
         document.querySelector('.tab3p8').onclick = "sleep()"
     }}
     //eight box end


     //ninth box start
     if (i == 9){
     if (state == 0) {
         document.querySelector('.tab3p9').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         thirdgameArray[i-1] = 1;
         thirdplayCount++;
         state++;
         document.querySelector('.tinyTab3p9').textContent = "X";
         document.querySelector('.tab3p9').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab3p9').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         thirdgameArray[i-1] = 2;
         thirdplayCount++;
         state--;
         document.querySelector('.tinyTab3p9').textContent = "O";
         document.querySelector('.tab3p9').onclick = "sleep()"
     }}
     //ninth box end

    //  console.log(thirdgameArray)

     thirdcheckWin();
 }


 thirdTacdone = false;
 thirdcheckWin = () => {
     //checking win condition //we can also run a loop on the horizontal,
     // vertical or diagonal to run 3(2 for diagonal) times and add 1 to the indexes each time
     //but i'll just use this to better my edits

     //starting horizontally
     //firstrow
     if (thirdgameArray[0] == thirdgameArray[1] && thirdgameArray[0] == thirdgameArray[2] &&
         thirdgameArray[0] == 1 ){
         document.querySelector('.thirdTacresult').innerHTML = `X wins by the first row `
         thirdTacdone = true;
         TacBlock(3, 1);
         // document.querySelector('.thirdTacresult').style.display = "flex"; <button onclick="reload()"> Refresh </button>
     }
         //firstrow
         else if (thirdgameArray[0] == thirdgameArray[1] && thirdgameArray[0] == thirdgameArray[2] &&
             thirdgameArray[0] == 2 ){
             document.querySelector('.thirdTacresult').innerHTML = `O wins by the first row `
             thirdTacdone = true;
             TacBlock(3, 0);
             // document.querySelector('.thirdTacresult').style.display = "flex";
         }

     //third row
    else if (thirdgameArray[3] == thirdgameArray[4] && thirdgameArray[3] == thirdgameArray[5] &&
         thirdgameArray[3] == 1 ){
         document.querySelector('.thirdTacresult').innerHTML = `X wins by the third row `
         thirdTacdone = true;
         TacBlock(3, 1);
         // document.querySelector('.thirdTacresult').style.display = "flex";
     }
         else if (thirdgameArray[3] == thirdgameArray[4] && thirdgameArray[3] == thirdgameArray[5] &&
             thirdgameArray[3] == 2 ){
             document.querySelector('.thirdTacresult').innerHTML = `O wins by the third row `
             thirdTacdone = true;
             TacBlock(3, 0);
             // document.querySelector('.thirdTacresult').style.display = "flex";
         }

     //third row
    else if (thirdgameArray[6] === thirdgameArray[7] && thirdgameArray[6] === thirdgameArray[8] &&
         thirdgameArray[6] == 1 ){
         document.querySelector('.thirdTacresult').innerHTML = `X wins by the third row `
         thirdTacdone = true;
         TacBlock(3, 1);
         // document.querySelector('.thirdTacresult').style.display = "flex";
     }
         else if (thirdgameArray[6] === thirdgameArray[7] && thirdgameArray[6] === thirdgameArray[8] &&
             thirdgameArray[6] == 2 ){
             document.querySelector('.thirdTacresult').innerHTML = `O wins by the third row `
             thirdTacdone = true;
             TacBlock(3, 0);
             // document.querySelector('.thirdTacresult').style.display = "flex";
         }
     
     //going vertically
     //first column
    else if (thirdgameArray[0] == thirdgameArray[3] && thirdgameArray[0] == thirdgameArray[6] &&
         thirdgameArray[0] == 1 ){
         document.querySelector('.thirdTacresult').innerHTML =  `X wins by the first column `
         thirdTacdone = true;
         TacBlock(3, 1);
         // document.querySelector('.thirdTacresult').style.display = "flex";
     }
         //first column
         else if (thirdgameArray[0] == thirdgameArray[3] && thirdgameArray[0] == thirdgameArray[6] &&
             thirdgameArray[0] == 2 ){
             document.querySelector('.thirdTacresult').innerHTML = `O wins by the first column `
             thirdTacdone = true;
             TacBlock(3, 0);
             // document.querySelector('.thirdTacresult').style.display = "flex";
         }

     //third column
     else if (thirdgameArray[1] == thirdgameArray[4] && thirdgameArray[1] == thirdgameArray[7] &&
         thirdgameArray[1] == 1 ){
         document.querySelector('.thirdTacresult').innerHTML = `X wins by the third column `
         thirdTacdone = true;
         TacBlock(3, 1);
         // document.querySelector('.thirdTacresult').style.display = "flex";
     }
         //third column
         else if (thirdgameArray[1] == thirdgameArray[4] && thirdgameArray[1] == thirdgameArray[7] &&
             thirdgameArray[1] == 2 ){
             document.querySelector('.thirdTacresult').innerHTML = `O wins by the third column `
             thirdTacdone = true;
             TacBlock(3, 0);
             // document.querySelector('.thirdTacresult').style.display = "flex";
         }

     //third column
     else if (thirdgameArray[2] == thirdgameArray[5] && thirdgameArray[2] == thirdgameArray[8] &&
         thirdgameArray[2] == 1 ){
         document.querySelector('.thirdTacresult').innerHTML =  `X wins by the third column `
         thirdTacdone = true;
         TacBlock(3, 1);
         // document.querySelector('.thirdTacresult').style.display = "flex";
     }
         //third column
         else if (thirdgameArray[2] == thirdgameArray[5] && thirdgameArray[2] == thirdgameArray[8] &&
             thirdgameArray[2] == 2 ){
             document.querySelector('.thirdTacresult').innerHTML = `O wins by the third column `
             thirdTacdone = true;
             TacBlock(3, 0);
             // document.querySelector('.thirdTacresult').style.display = "flex";
         }

     //going diagonally
     // \ diagonal
     else if (thirdgameArray[0] == thirdgameArray[4] && thirdgameArray[0] == thirdgameArray[8] &&
         thirdgameArray[0] == 1 ){
         document.querySelector('.thirdTacresult').innerHTML = `X wins through the downhill diagonal `
         thirdTacdone = true;
         TacBlock(3, 1);
         // document.querySelector('.thirdTacresult').style.display = "flex";
     }
         // \ diagonal
         else if (thirdgameArray[0] == thirdgameArray[4] && thirdgameArray[0] == thirdgameArray[8] &&
             thirdgameArray[0] == 2 ){
             document.querySelector('.thirdTacresult').innerHTML = `O wins through the downhill diagonal `
             thirdTacdone = true;
             TacBlock(3, 0);
             // document.querySelector('.thirdTacresult').style.display = "flex";
         }

     // / diagonal    
     else if (thirdgameArray[2] == thirdgameArray[4] && thirdgameArray[2] == thirdgameArray[6] &&
         thirdgameArray[2] == 1 ){
         document.querySelector('.thirdTacresult').innerHTML = `X wins through the uphill diagonal `
         thirdTacdone = true;
         TacBlock(3, 1);
         // document.querySelector('.thirdTacresult').style.display = "flex";
     }
         // / diagonal
         else if (thirdgameArray[2] == thirdgameArray[4] && thirdgameArray[2] == thirdgameArray[6] &&
             thirdgameArray[2] == 2 ){
             document.querySelector('.thirdTacresult').innerHTML = `O wins through the uphill diagonal `
             thirdTacdone = true;
             TacBlock(3, 0);
             // document.querySelector('.thirdTacresult').style.display = "flex";
         }
     else if (thirdplayCount == 9) {
             document.querySelector('.thirdTacresult').innerHTML = `Draw`
             thirdTacdone = true;
             TacBlock(3, 2);
             // document.querySelector('.thirdTacresult').style.display = "flex";
             console.log("it runs")
     }
 }

 reload= () => {
     document.location.reload(true)
 }


 sleep = () => {
     console.log("next guy's turn")
 }