 // document.querySelector('.firstTac').addEventListener("click", displayValue(1))
 ninthgameArray = [,,,,,,,,,]
 // console.log(ninthgameArray.length)
 ninthplayCount = 0
//  state = 0

 ninthdisplayValue = (i) => {
     
     //for the first box
     if (i == 1){
     if (state == 0) {
         document.querySelector('.tab9p1').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         ninthgameArray[i-1] = 1;
         // console.log(ninthgameArray[0]);
         ninthplayCount++;

         state++;
         document.querySelector('.tab9p1').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab9p1').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         ninthgameArray[i-1] = 2;
         ninthplayCount++;
         state--;
         document.querySelector('.tab9p1').onclick = "sleep()"
     }}
     //end for first box

     //for the ninth box
     if (i == 2){
     if (state == 0) {
         document.querySelector('.tab9p2').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         ninthgameArray[i-1] = 1;
         ninthplayCount++;
         state++;
         document.querySelector('.tab9p2').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab9p2').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         ninthgameArray[i-1] = 2;
         ninthplayCount++;
         state--;
         document.querySelector('.tab9p2').onclick = "sleep()"
     }}
     //end for ninth box


     //for the ninth box
     if (i == 3){
     if (state == 0) {
         document.querySelector('.tab9p3').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         ninthgameArray[i-1] = 1;
         ninthplayCount++;

         state++;
         document.querySelector('.tab9p3').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab9p3').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         ninthgameArray[i-1] = 2;
         ninthplayCount++;
         state--;
         document.querySelector('.tab9p3').onclick = "sleep()"
     }}
     //end for ninth box


     //for the fourth box
     if (i == 4){
     if (state == 0) {
         document.querySelector('.tab9p4').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         ninthgameArray[i-1] = 1;
         ninthplayCount++;
         state++;
         document.querySelector('.tab9p4').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab9p4').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         ninthgameArray[i-1] = 2;
         ninthplayCount++;
         state--;
         document.querySelector('.tab9p4').onclick = "sleep()"
     }}
     //end for fourth box


     //fifth box start
     if (i == 5){
     if (state == 0) {
         document.querySelector('.tab9p5').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         ninthgameArray[i-1] = 1;
         ninthplayCount++;
         state++;
         document.querySelector('.tab9p5').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab9p5').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         ninthgameArray[i-1] = 2;
         ninthplayCount++;
         state--;
         document.querySelector('.tab9p5').onclick = "sleep()"
     }}
     //fifth box end


     //sixth box start
     if (i == 6){
     if (state == 0) {
         document.querySelector('.tab9p6').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         ninthgameArray[i-1] = 1;
         ninthplayCount++;
         state++;
         document.querySelector('.tab9p6').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab9p6').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         ninthgameArray[i-1] = 2;
         ninthplayCount++;
         state--;
         document.querySelector('.tab9p6').onclick = "sleep()"
     }}
     //sixth box end


     //seventh box start
     if (i == 7){
     if (state == 0) {
         document.querySelector('.tab9p7').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         ninthgameArray[i-1] = 1;
         ninthplayCount++;
         state++;
         document.querySelector('.tab9p7').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab9p7').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         ninthgameArray[i-1] = 2;
         ninthplayCount++;
         state--;
         document.querySelector('.tab9p7').onclick = "sleep()"
     }}
     //seventh box end


     //eight box start
     if (i == 8){
     if (state == 0) {
         document.querySelector('.tab9p8').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         ninthgameArray[i-1] = 1;
         ninthplayCount++;
         state++;
         document.querySelector('.tab9p8').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab9p8').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         ninthgameArray[i-1] = 2;
         ninthplayCount++;
         state--;
         document.querySelector('.tab9p8').onclick = "sleep()"
     }}
     //eight box end


     //ninth box start
     if (i == 9){
     if (state == 0) {
         document.querySelector('.tab9p9').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         ninthgameArray[i-1] = 1;
         ninthplayCount++;
         state++;
         document.querySelector('.tab9p9').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab9p9').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         ninthgameArray[i-1] = 2;
         ninthplayCount++;
         state--;
         document.querySelector('.tab9p9').onclick = "sleep()"
     }}
     //ninth box end

     console.log(ninthgameArray)

     ninthcheckWin();
 }


 ninthTacdone = false;
 ninthcheckWin = () => {
     //checking win condition //we can also run a loop on the horizontal,
     // vertical or diagonal to run 3(2 for diagonal) times and add 1 to the indexes each time
     //but i'll just use this to better my edits

     //starting horizontally
     //firstrow
     if (ninthgameArray[0] == ninthgameArray[1] && ninthgameArray[0] == ninthgameArray[2] &&
         ninthgameArray[0] == 1 ){
         document.querySelector('.ninthTacresult').innerHTML = `X wins by the first row `
         ninthTacdone = true;
         // document.querySelector('.ninthTacresult').style.display = "flex"; <button onclick="reload()"> Refresh </button>
     }
         //firstrow
         else if (ninthgameArray[0] == ninthgameArray[1] && ninthgameArray[0] == ninthgameArray[2] &&
             ninthgameArray[0] == 2 ){
             document.querySelector('.ninthTacresult').innerHTML = `O wins by the first row `
             ninthTacdone = true;
             // document.querySelector('.ninthTacresult').style.display = "flex";
         }

     //ninth row
    else if (ninthgameArray[3] == ninthgameArray[4] && ninthgameArray[3] == ninthgameArray[5] &&
         ninthgameArray[3] == 1 ){
         document.querySelector('.ninthTacresult').innerHTML = `X wins by the ninth row `
         ninthTacdone = true;
         // document.querySelector('.ninthTacresult').style.display = "flex";
     }
         else if (ninthgameArray[3] == ninthgameArray[4] && ninthgameArray[3] == ninthgameArray[5] &&
             ninthgameArray[3] == 2 ){
             document.querySelector('.ninthTacresult').innerHTML = `O wins by the ninth row `
             ninthTacdone = true;
             // document.querySelector('.ninthTacresult').style.display = "flex";
         }

     //ninth row
    else if (ninthgameArray[6] === ninthgameArray[7] && ninthgameArray[6] === ninthgameArray[8] &&
         ninthgameArray[6] == 1 ){
         document.querySelector('.ninthTacresult').innerHTML = `X wins by the ninth row `
         ninthTacdone = true;
         // document.querySelector('.ninthTacresult').style.display = "flex";
     }
         else if (ninthgameArray[6] === ninthgameArray[7] && ninthgameArray[6] === ninthgameArray[8] &&
             ninthgameArray[6] == 2 ){
             document.querySelector('.ninthTacresult').innerHTML = `O wins by the ninth row `
             ninthTacdone = true;
             // document.querySelector('.ninthTacresult').style.display = "flex";
         }
     
     //going vertically
     //first column
    else if (ninthgameArray[0] == ninthgameArray[3] && ninthgameArray[0] == ninthgameArray[6] &&
         ninthgameArray[0] == 1 ){
         document.querySelector('.ninthTacresult').innerHTML =  `X wins by the first column `
         ninthTacdone = true;
         // document.querySelector('.ninthTacresult').style.display = "flex";
     }
         //first column
         else if (ninthgameArray[0] == ninthgameArray[3] && ninthgameArray[0] == ninthgameArray[6] &&
             ninthgameArray[0] == 2 ){
             document.querySelector('.ninthTacresult').innerHTML = `O wins by the first column `
             ninthTacdone = true;
             // document.querySelector('.ninthTacresult').style.display = "flex";
         }

     //ninth column
     else if (ninthgameArray[1] == ninthgameArray[4] && ninthgameArray[1] == ninthgameArray[7] &&
         ninthgameArray[1] == 1 ){
         document.querySelector('.ninthTacresult').innerHTML = `X wins by the ninth column `
         ninthTacdone = true;
         // document.querySelector('.ninthTacresult').style.display = "flex";
     }
         //ninth column
         else if (ninthgameArray[1] == ninthgameArray[4] && ninthgameArray[1] == ninthgameArray[7] &&
             ninthgameArray[1] == 2 ){
             document.querySelector('.ninthTacresult').innerHTML = `O wins by the ninth column `
             ninthTacdone = true;
             // document.querySelector('.ninthTacresult').style.display = "flex";
         }

     //ninth column
     else if (ninthgameArray[2] == ninthgameArray[5] && ninthgameArray[2] == ninthgameArray[8] &&
         ninthgameArray[2] == 1 ){
         document.querySelector('.ninthTacresult').innerHTML =  `X wins by the ninth column `
         ninthTacdone = true;
         // document.querySelector('.ninthTacresult').style.display = "flex";
     }
         //ninth column
         else if (ninthgameArray[2] == ninthgameArray[5] && ninthgameArray[2] == ninthgameArray[8] &&
             ninthgameArray[2] == 2 ){
             document.querySelector('.ninthTacresult').innerHTML = `O wins by the ninth column `
             ninthTacdone = true;
             // document.querySelector('.ninthTacresult').style.display = "flex";
         }

     //going diagonally
     // \ diagonal
     else if (ninthgameArray[0] == ninthgameArray[4] && ninthgameArray[0] == ninthgameArray[8] &&
         ninthgameArray[0] == 1 ){
         document.querySelector('.ninthTacresult').innerHTML = `X wins through the downhill diagonal `
         ninthTacdone = true;
         // document.querySelector('.ninthTacresult').style.display = "flex";
     }
         // \ diagonal
         else if (ninthgameArray[0] == ninthgameArray[4] && ninthgameArray[0] == ninthgameArray[8] &&
             ninthgameArray[0] == 2 ){
             document.querySelector('.ninthTacresult').innerHTML = `O wins through the downhill diagonal `
             ninthTacdone = true;
             // document.querySelector('.ninthTacresult').style.display = "flex";
         }

     // / diagonal    
     else if (ninthgameArray[2] == ninthgameArray[4] && ninthgameArray[2] == ninthgameArray[6] &&
         ninthgameArray[2] == 1 ){
         document.querySelector('.ninthTacresult').innerHTML = `X wins through the uphill diagonal `
         ninthTacdone = true;
         // document.querySelector('.ninthTacresult').style.display = "flex";
     }
         // / diagonal
         else if (ninthgameArray[2] == ninthgameArray[4] && ninthgameArray[2] == ninthgameArray[6] &&
             ninthgameArray[2] == 2 ){
             document.querySelector('.ninthTacresult').innerHTML = `O wins through the uphill diagonal `
             ninthTacdone = true;
             // document.querySelector('.ninthTacresult').style.display = "flex";
         }
     else if (ninthplayCount == 9) {
             document.querySelector('.ninthTacresult').innerHTML = `Draw`
             ninthTacdone = true;
             // document.querySelector('.ninthTacresult').style.display = "flex";
             console.log("it runs")
     }
 }

 reload= () => {
     document.location.reload(true)
 }


 sleep = () => {
     console.log("next guy's turn")
 }