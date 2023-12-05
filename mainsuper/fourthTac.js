 // document.querySelector('.firstTac').addEventListener("click", displayValue(1))
 fourthgameArray = [,,,,,,,,,]
 // console.log(fourthgameArray.length)
 fourthplayCount = 0
//  state = 0

 fourthdisplayValue = (i) => {
     
     //for the first box
     if (i == 1){
     if (state == 0) {
         document.querySelector('.tab4p1').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         fourthgameArray[i-1] = 1;
         // console.log(fourthgameArray[0]);
         fourthplayCount++;

         state++;
         document.querySelector('.tinyTab4p1').textContent = "X";
         document.querySelector('.tab4p1').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab4p1').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         fourthgameArray[i-1] = 2;
         fourthplayCount++;
         state--;
         document.querySelector('.tinyTab4p1').textContent = "O";
         document.querySelector('.tab4p1').onclick = "sleep()"
     }}
     //end for first box

     //for the fourth box
     if (i == 2){
     if (state == 0) {
         document.querySelector('.tab4p2').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         fourthgameArray[i-1] = 1;
         fourthplayCount++;
         state++;
         document.querySelector('.tinyTab4p2').textContent = "X";
         document.querySelector('.tab4p2').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab4p2').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         fourthgameArray[i-1] = 2;
         fourthplayCount++;
         state--;
         document.querySelector('.tinyTab4p2').textContent = "O";
         document.querySelector('.tab4p2').onclick = "sleep()"
     }}
     //end for fourth box


     //for the fourth box
     if (i == 3){
     if (state == 0) {
         document.querySelector('.tab4p3').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         fourthgameArray[i-1] = 1;
         fourthplayCount++;

         state++;
         document.querySelector('.tinyTab4p3').textContent = "X";
         document.querySelector('.tab4p3').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab4p3').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         fourthgameArray[i-1] = 2;
         fourthplayCount++;
         state--;
         document.querySelector('.tinyTab4p3').textContent = "O";
         document.querySelector('.tab4p3').onclick = "sleep()"
     }}
     //end for fourth box


     //for the fourth box
     if (i == 4){
     if (state == 0) {
         document.querySelector('.tab4p4').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         fourthgameArray[i-1] = 1;
         fourthplayCount++;
         state++;
         document.querySelector('.tinyTab4p4').textContent = "X";
         document.querySelector('.tab4p4').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab4p4').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         fourthgameArray[i-1] = 2;
         fourthplayCount++;
         state--;
         document.querySelector('.tinyTab4p4').textContent = "O";
         document.querySelector('.tab4p4').onclick = "sleep()"
     }}
     //end for fourth box


     //fifth box start
     if (i == 5){
     if (state == 0) {
         document.querySelector('.tab4p5').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         fourthgameArray[i-1] = 1;
         fourthplayCount++;
         state++;
         document.querySelector('.tinyTab4p5').textContent = "X";
         document.querySelector('.tab4p5').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab4p5').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         fourthgameArray[i-1] = 2;
         fourthplayCount++;
         state--;
         document.querySelector('.tinyTab4p5').textContent = "O";
         document.querySelector('.tab4p5').onclick = "sleep()"
     }}
     //fifth box end


     //sixth box start
     if (i == 6){
     if (state == 0) {
         document.querySelector('.tab4p6').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         fourthgameArray[i-1] = 1;
         fourthplayCount++;
         state++;
         document.querySelector('.tinyTab4p6').textContent = "X";
         document.querySelector('.tab4p6').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab4p6').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         fourthgameArray[i-1] = 2;
         fourthplayCount++;
         state--;
         document.querySelector('.tinyTab4p6').textContent = "O";
         document.querySelector('.tab4p6').onclick = "sleep()"
     }}
     //sixth box end


     //seventh box start
     if (i == 7){
     if (state == 0) {
         document.querySelector('.tab4p7').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         fourthgameArray[i-1] = 1;
         fourthplayCount++;
         state++;
         document.querySelector('.tinyTab4p7').textContent = "X";
         document.querySelector('.tab4p7').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab4p7').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         fourthgameArray[i-1] = 2;
         fourthplayCount++;
         state--;
         document.querySelector('.tinyTab4p7').textContent = "O";
         document.querySelector('.tab4p7').onclick = "sleep()"
     }}
     //seventh box end


     //eight box start
     if (i == 8){
     if (state == 0) {
         document.querySelector('.tab4p8').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         fourthgameArray[i-1] = 1;
         fourthplayCount++;
         state++;
         document.querySelector('.tinyTab4p8').textContent = "X";
         document.querySelector('.tab4p8').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab4p8').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         fourthgameArray[i-1] = 2;
         fourthplayCount++;
         state--;
         document.querySelector('.tinyTab4p8').textContent = "O";
         document.querySelector('.tab4p8').onclick = "sleep()"
     }}
     //eight box end


     //ninth box start
     if (i == 9){
     if (state == 0) {
         document.querySelector('.tab4p9').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         fourthgameArray[i-1] = 1;
         fourthplayCount++;
         state++;
         document.querySelector('.tinyTab4p9').textContent = "X";
         document.querySelector('.tab4p9').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab4p9').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         fourthgameArray[i-1] = 2;
         fourthplayCount++;
         state--;
         document.querySelector('.tinyTab4p9').textContent = "O";
         document.querySelector('.tab4p9').onclick = "sleep()"
     }}
     //ninth box end

    //  console.log(fourthgameArray)

     fourthcheckWin();
 }


 fourthTacdone= false;
 fourthcheckWin = () => {
     //checking win condition //we can also run a loop on the horizontal,
     // vertical or diagonal to run 3(2 for diagonal) times and add 1 to the indexes each time
     //but i'll just use this to better my edits

     //starting horizontally
     //firstrow
     if (fourthgameArray[0] == fourthgameArray[1] && fourthgameArray[0] == fourthgameArray[2] &&
         fourthgameArray[0] == 1 ){
         document.querySelector('.fourthTacresult').innerHTML = `X wins by the first row `
         fourthTacdone = true;
         TacBlock(4, 1);
         // document.querySelector('.fourthTacresult').style.display = "flex"; <button onclick="reload()"> Refresh </button>
     }
         //firstrow
         else if (fourthgameArray[0] == fourthgameArray[1] && fourthgameArray[0] == fourthgameArray[2] &&
             fourthgameArray[0] == 2 ){
             document.querySelector('.fourthTacresult').innerHTML = `O wins by the first row `
             fourthTacdone = true;
             TacBlock(4, 0);
             // document.querySelector('.fourthTacresult').style.display = "flex";
         }

     //fourth row
    else if (fourthgameArray[3] == fourthgameArray[4] && fourthgameArray[3] == fourthgameArray[5] &&
         fourthgameArray[3] == 1 ){
         document.querySelector('.fourthTacresult').innerHTML = `X wins by the fourth row `
         fourthTacdone = true;
         TacBlock(4, 1);
         // document.querySelector('.fourthTacresult').style.display = "flex";
     }
         else if (fourthgameArray[3] == fourthgameArray[4] && fourthgameArray[3] == fourthgameArray[5] &&
             fourthgameArray[3] == 2 ){
             document.querySelector('.fourthTacresult').innerHTML = `O wins by the fourth row `
             fourthTacdone = true;
             TacBlock(4, 0);
             // document.querySelector('.fourthTacresult').style.display = "flex";
         }

     //fourth row
    else if (fourthgameArray[6] === fourthgameArray[7] && fourthgameArray[6] === fourthgameArray[8] &&
         fourthgameArray[6] == 1 ){
         document.querySelector('.fourthTacresult').innerHTML = `X wins by the fourth row `
         fourthTacdone = true;
         TacBlock(4, 1);
         // document.querySelector('.fourthTacresult').style.display = "flex";
     }
         else if (fourthgameArray[6] === fourthgameArray[7] && fourthgameArray[6] === fourthgameArray[8] &&
             fourthgameArray[6] == 2 ){
             document.querySelector('.fourthTacresult').innerHTML = `O wins by the fourth row `
             fourthTacdone = true;
             TacBlock(4, 0);
             // document.querySelector('.fourthTacresult').style.display = "flex";
         }
     
     //going vertically
     //first column
    else if (fourthgameArray[0] == fourthgameArray[3] && fourthgameArray[0] == fourthgameArray[6] &&
         fourthgameArray[0] == 1 ){
         document.querySelector('.fourthTacresult').innerHTML =  `X wins by the first column `
         fourthTacdone = true;
         TacBlock(4, 1);
         // document.querySelector('.fourthTacresult').style.display = "flex";
     }
         //first column
         else if (fourthgameArray[0] == fourthgameArray[3] && fourthgameArray[0] == fourthgameArray[6] &&
             fourthgameArray[0] == 2 ){
             document.querySelector('.fourthTacresult').innerHTML = `O wins by the first column `
             fourthTacdone = true;
             TacBlock(4, 0);
             // document.querySelector('.fourthTacresult').style.display = "flex";
         }

     //fourth column
     else if (fourthgameArray[1] == fourthgameArray[4] && fourthgameArray[1] == fourthgameArray[7] &&
         fourthgameArray[1] == 1 ){
         document.querySelector('.fourthTacresult').innerHTML = `X wins by the fourth column `
         fourthTacdone = true;
         TacBlock(4, 1);
         // document.querySelector('.fourthTacresult').style.display = "flex";
     }
         //fourth column
         else if (fourthgameArray[1] == fourthgameArray[4] && fourthgameArray[1] == fourthgameArray[7] &&
             fourthgameArray[1] == 2 ){
             document.querySelector('.fourthTacresult').innerHTML = `O wins by the fourth column `
             fourthTacdone = true;
             TacBlock(4, 0);
             // document.querySelector('.fourthTacresult').style.display = "flex";
         }

     //fourth column
     else if (fourthgameArray[2] == fourthgameArray[5] && fourthgameArray[2] == fourthgameArray[8] &&
         fourthgameArray[2] == 1 ){
         document.querySelector('.fourthTacresult').innerHTML =  `X wins by the fourth column `
         fourthTacdone = true;
         TacBlock(4, 1);
         // document.querySelector('.fourthTacresult').style.display = "flex";
     }
         //fourth column
         else if (fourthgameArray[2] == fourthgameArray[5] && fourthgameArray[2] == fourthgameArray[8] &&
             fourthgameArray[2] == 2 ){
             document.querySelector('.fourthTacresult').innerHTML = `O wins by the fourth column `
             fourthTacdone = true;
             TacBlock(4, 0);
             // document.querySelector('.fourthTacresult').style.display = "flex";
         }

     //going diagonally
     // \ diagonal
     else if (fourthgameArray[0] == fourthgameArray[4] && fourthgameArray[0] == fourthgameArray[8] &&
         fourthgameArray[0] == 1 ){
         document.querySelector('.fourthTacresult').innerHTML = `X wins through the downhill diagonal `
         fourthTacdone = true;
         TacBlock(4, 1);
         // document.querySelector('.fourthTacresult').style.display = "flex";
     }
         // \ diagonal
         else if (fourthgameArray[0] == fourthgameArray[4] && fourthgameArray[0] == fourthgameArray[8] &&
             fourthgameArray[0] == 2 ){
             document.querySelector('.fourthTacresult').innerHTML = `O wins through the downhill diagonal `
             fourthTacdone = true;
             TacBlock(4, 0);
             // document.querySelector('.fourthTacresult').style.display = "flex";
         }

     // / diagonal    
     else if (fourthgameArray[2] == fourthgameArray[4] && fourthgameArray[2] == fourthgameArray[6] &&
         fourthgameArray[2] == 1 ){
         document.querySelector('.fourthTacresult').innerHTML = `X wins through the uphill diagonal `
         fourthTacdone = true;
         TacBlock(4, 1);
         // document.querySelector('.fourthTacresult').style.display = "flex";
     }
         // / diagonal
         else if (fourthgameArray[2] == fourthgameArray[4] && fourthgameArray[2] == fourthgameArray[6] &&
             fourthgameArray[2] == 2 ){
             document.querySelector('.fourthTacresult').innerHTML = `O wins through the uphill diagonal `
             fourthTacdone = true;
             TacBlock(4, 0);
             // document.querySelector('.fourthTacresult').style.display = "flex";
         }
     else if (fourthplayCount == 9) {
             document.querySelector('.fourthTacresult').innerHTML = `Draw`
             fourthTacdone = true;
             TacBlock(4, 2);
             // document.querySelector('.fourthTacresult').style.display = "flex";
             console.log("it runs")
     }
 }

 reload= () => {
     document.location.reload(true)
 }


 sleep = () => {
     console.log("next guy's turn")
 }