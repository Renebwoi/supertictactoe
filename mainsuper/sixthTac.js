 // document.querySelector('.firstTac').addEventListener("click", displayValue(1))
 sixthgameArray = [,,,,,,,,,]
 // console.log(sixthgameArray.length)
 sixthplayCount = 0
//  state = 0

 sixthdisplayValue = (i) => {
     
     //for the first box
     if (i == 1){
     if (state == 0) {
         document.querySelector('.tab6p1').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         sixthgameArray[i-1] = 1;
         // console.log(sixthgameArray[0]);
         sixthplayCount++;

         state++;
         document.querySelector('.tab6p1').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab6p1').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         sixthgameArray[i-1] = 2;
         sixthplayCount++;
         state--;
         document.querySelector('.tab6p1').onclick = "sleep()"
     }}
     //end for first box

     //for the sixth box
     if (i == 2){
     if (state == 0) {
         document.querySelector('.tab6p2').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         sixthgameArray[i-1] = 1;
         sixthplayCount++;
         state++;
         document.querySelector('.tab6p2').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab6p2').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         sixthgameArray[i-1] = 2;
         sixthplayCount++;
         state--;
         document.querySelector('.tab6p2').onclick = "sleep()"
     }}
     //end for sixth box


     //for the sixth box
     if (i == 3){
     if (state == 0) {
         document.querySelector('.tab6p3').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         sixthgameArray[i-1] = 1;
         sixthplayCount++;

         state++;
         document.querySelector('.tab6p3').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab6p3').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         sixthgameArray[i-1] = 2;
         sixthplayCount++;
         state--;
         document.querySelector('.tab6p3').onclick = "sleep()"
     }}
     //end for sixth box


     //for the fourth box
     if (i == 4){
     if (state == 0) {
         document.querySelector('.tab6p4').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         sixthgameArray[i-1] = 1;
         sixthplayCount++;
         state++;
         document.querySelector('.tab6p4').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab6p4').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         sixthgameArray[i-1] = 2;
         sixthplayCount++;
         state--;
         document.querySelector('.tab6p4').onclick = "sleep()"
     }}
     //end for fourth box


     //fifth box start
     if (i == 5){
     if (state == 0) {
         document.querySelector('.tab6p5').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         sixthgameArray[i-1] = 1;
         sixthplayCount++;
         state++;
         document.querySelector('.tab6p5').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab6p5').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         sixthgameArray[i-1] = 2;
         sixthplayCount++;
         state--;
         document.querySelector('.tab6p5').onclick = "sleep()"
     }}
     //fifth box end


     //sixth box start
     if (i == 6){
     if (state == 0) {
         document.querySelector('.tab6p6').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         sixthgameArray[i-1] = 1;
         sixthplayCount++;
         state++;
         document.querySelector('.tab6p6').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab6p6').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         sixthgameArray[i-1] = 2;
         sixthplayCount++;
         state--;
         document.querySelector('.tab6p6').onclick = "sleep()"
     }}
     //sixth box end


     //seventh box start
     if (i == 7){
     if (state == 0) {
         document.querySelector('.tab6p7').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         sixthgameArray[i-1] = 1;
         sixthplayCount++;
         state++;
         document.querySelector('.tab6p7').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab6p7').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         sixthgameArray[i-1] = 2;
         sixthplayCount++;
         state--;
         document.querySelector('.tab6p7').onclick = "sleep()"
     }}
     //seventh box end


     //eight box start
     if (i == 8){
     if (state == 0) {
         document.querySelector('.tab6p8').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         sixthgameArray[i-1] = 1;
         sixthplayCount++;
         state++;
         document.querySelector('.tab6p8').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab6p8').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         sixthgameArray[i-1] = 2;
         sixthplayCount++;
         state--;
         document.querySelector('.tab6p8').onclick = "sleep()"
     }}
     //eight box end


     //ninth box start
     if (i == 9){
     if (state == 0) {
         document.querySelector('.tab6p9').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         sixthgameArray[i-1] = 1;
         sixthplayCount++;
         state++;
         document.querySelector('.tab6p9').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab6p9').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         sixthgameArray[i-1] = 2;
         sixthplayCount++;
         state--;
         document.querySelector('.tab6p9').onclick = "sleep()"
     }}
     //ninth box end

    //  console.log(sixthgameArray)

     sixthcheckWin();
 }


 sixthTacdone = false;
 sixthcheckWin = () => {
     //checking win condition //we can also run a loop on the horizontal,
     // vertical or diagonal to run 3(2 for diagonal) times and add 1 to the indexes each time
     //but i'll just use this to better my edits

     //starting horizontally
     //firstrow
     if (sixthgameArray[0] == sixthgameArray[1] && sixthgameArray[0] == sixthgameArray[2] &&
         sixthgameArray[0] == 1 ){
         document.querySelector('.sixthTacresult').innerHTML = `X wins by the first row `
         sixthTacdone = true;
         TacBlock(6, 1);
         // document.querySelector('.sixthTacresult').style.display = "flex"; <button onclick="reload()"> Refresh </button>
     }
         //firstrow
         else if (sixthgameArray[0] == sixthgameArray[1] && sixthgameArray[0] == sixthgameArray[2] &&
             sixthgameArray[0] == 2 ){
             document.querySelector('.sixthTacresult').innerHTML = `O wins by the first row `
             sixthTacdone = true;
             TacBlock(6, 0);
             // document.querySelector('.sixthTacresult').style.display = "flex";
         }

     //sixth row
    else if (sixthgameArray[3] == sixthgameArray[4] && sixthgameArray[3] == sixthgameArray[5] &&
         sixthgameArray[3] == 1 ){
         document.querySelector('.sixthTacresult').innerHTML = `X wins by the sixth row `
         sixthTacdone = true;
         TacBlock(6, 1);
         // document.querySelector('.sixthTacresult').style.display = "flex";
     }
         else if (sixthgameArray[3] == sixthgameArray[4] && sixthgameArray[3] == sixthgameArray[5] &&
             sixthgameArray[3] == 2 ){
             document.querySelector('.sixthTacresult').innerHTML = `O wins by the sixth row `
             sixthTacdone = true;
             TacBlock(6, 0);
             // document.querySelector('.sixthTacresult').style.display = "flex";
         }

     //sixth row
    else if (sixthgameArray[6] === sixthgameArray[7] && sixthgameArray[6] === sixthgameArray[8] &&
         sixthgameArray[6] == 1 ){
         document.querySelector('.sixthTacresult').innerHTML = `X wins by the sixth row `
         sixthTacdone = true;
         TacBlock(6, 1);
         // document.querySelector('.sixthTacresult').style.display = "flex";
     }
         else if (sixthgameArray[6] === sixthgameArray[7] && sixthgameArray[6] === sixthgameArray[8] &&
             sixthgameArray[6] == 2 ){
             document.querySelector('.sixthTacresult').innerHTML = `O wins by the sixth row `
             sixthTacdone = true;
             TacBlock(6, 0);
             // document.querySelector('.sixthTacresult').style.display = "flex";
         }
     
     //going vertically
     //first column
    else if (sixthgameArray[0] == sixthgameArray[3] && sixthgameArray[0] == sixthgameArray[6] &&
         sixthgameArray[0] == 1 ){
         document.querySelector('.sixthTacresult').innerHTML =  `X wins by the first column `
         sixthTacdone = true;
         TacBlock(6, 1);
         // document.querySelector('.sixthTacresult').style.display = "flex";
     }
         //first column
         else if (sixthgameArray[0] == sixthgameArray[3] && sixthgameArray[0] == sixthgameArray[6] &&
             sixthgameArray[0] == 2 ){
             document.querySelector('.sixthTacresult').innerHTML = `O wins by the first column `
             sixthTacdone = true;
             TacBlock(6, 0);
             // document.querySelector('.sixthTacresult').style.display = "flex";
         }

     //sixth column
     else if (sixthgameArray[1] == sixthgameArray[4] && sixthgameArray[1] == sixthgameArray[7] &&
         sixthgameArray[1] == 1 ){
         document.querySelector('.sixthTacresult').innerHTML = `X wins by the sixth column `
         sixthTacdone = true;
         TacBlock(6, 1);
         // document.querySelector('.sixthTacresult').style.display = "flex";
     }
         //sixth column
         else if (sixthgameArray[1] == sixthgameArray[4] && sixthgameArray[1] == sixthgameArray[7] &&
             sixthgameArray[1] == 2 ){
             document.querySelector('.sixthTacresult').innerHTML = `O wins by the sixth column `
             sixthTacdone = true;
             TacBlock(6, 0);
             // document.querySelector('.sixthTacresult').style.display = "flex";
         }

     //sixth column
     else if (sixthgameArray[2] == sixthgameArray[5] && sixthgameArray[2] == sixthgameArray[8] &&
         sixthgameArray[2] == 1 ){
         document.querySelector('.sixthTacresult').innerHTML =  `X wins by the sixth column `
         sixthTacdone = true;
         TacBlock(6, 1);
         // document.querySelector('.sixthTacresult').style.display = "flex";
     }
         //sixth column
         else if (sixthgameArray[2] == sixthgameArray[5] && sixthgameArray[2] == sixthgameArray[8] &&
             sixthgameArray[2] == 2 ){
             document.querySelector('.sixthTacresult').innerHTML = `O wins by the sixth column `
             sixthTacdone = true;
             TacBlock(6, 0);
             // document.querySelector('.sixthTacresult').style.display = "flex";
         }

     //going diagonally
     // \ diagonal
     else if (sixthgameArray[0] == sixthgameArray[4] && sixthgameArray[0] == sixthgameArray[8] &&
         sixthgameArray[0] == 1 ){
         document.querySelector('.sixthTacresult').innerHTML = `X wins through the downhill diagonal `
         sixthTacdone = true;
         TacBlock(6, 1);
         // document.querySelector('.sixthTacresult').style.display = "flex";
     }
         // \ diagonal
         else if (sixthgameArray[0] == sixthgameArray[4] && sixthgameArray[0] == sixthgameArray[8] &&
             sixthgameArray[0] == 2 ){
             document.querySelector('.sixthTacresult').innerHTML = `O wins through the downhill diagonal `
             sixthTacdone = true;
             TacBlock(6, 0);
             // document.querySelector('.sixthTacresult').style.display = "flex";
         }

     // / diagonal    
     else if (sixthgameArray[2] == sixthgameArray[4] && sixthgameArray[2] == sixthgameArray[6] &&
         sixthgameArray[2] == 1 ){
         document.querySelector('.sixthTacresult').innerHTML = `X wins through the uphill diagonal `
         sixthTacdone = true;
         TacBlock(6, 1);
         // document.querySelector('.sixthTacresult').style.display = "flex";
     }
         // / diagonal
         else if (sixthgameArray[2] == sixthgameArray[4] && sixthgameArray[2] == sixthgameArray[6] &&
             sixthgameArray[2] == 2 ){
             document.querySelector('.sixthTacresult').innerHTML = `O wins through the uphill diagonal `
             sixthTacdone = true;
             TacBlock(6, 0);
             // document.querySelector('.sixthTacresult').style.display = "flex";
         }
     else if (sixthplayCount == 9) {
             document.querySelector('.sixthTacresult').innerHTML = `Draw`
             sixthTacdone = true;
             TacBlock(6, 2);
             // document.querySelector('.sixthTacresult').style.display = "flex";
             console.log("it runs")
     }
 }

 reload= () => {
     document.location.reload(true)
 }


 sleep = () => {
     console.log("next guy's turn")
 }