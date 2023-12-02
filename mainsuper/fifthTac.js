 // document.querySelector('.firstTac').addEventListener("click", displayValue(1))
 fifthgameArray = [,,,,,,,,,]
 // console.log(fifthgameArray.length)
 fifthplayCount = 0
//  state = 0

 fifthdisplayValue = (i) => {
     
     //for the first box
     if (i == 1){
     if (state == 0) {
         document.querySelector('.tab5p1').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         fifthgameArray[i-1] = 1;
         // console.log(fifthgameArray[0]);
         fifthplayCount++;

         state++;
         document.querySelector('.tab5p1').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab5p1').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         fifthgameArray[i-1] = 2;
         fifthplayCount++;
         state--;
         document.querySelector('.tab5p1').onclick = "sleep()"
     }}
     //end for first box

     //for the fifth box
     if (i == 2){
     if (state == 0) {
         document.querySelector('.tab5p2').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         fifthgameArray[i-1] = 1;
         fifthplayCount++;
         state++;
         document.querySelector('.tab5p2').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab5p2').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         fifthgameArray[i-1] = 2;
         fifthplayCount++;
         state--;
         document.querySelector('.tab5p2').onclick = "sleep()"
     }}
     //end for fifth box


     //for the fifth box
     if (i == 3){
     if (state == 0) {
         document.querySelector('.tab5p3').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         fifthgameArray[i-1] = 1;
         fifthplayCount++;

         state++;
         document.querySelector('.tab5p3').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab5p3').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         fifthgameArray[i-1] = 2;
         fifthplayCount++;
         state--;
         document.querySelector('.tab5p3').onclick = "sleep()"
     }}
     //end for fifth box


     //for the fourth box
     if (i == 4){
     if (state == 0) {
         document.querySelector('.tab5p4').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         fifthgameArray[i-1] = 1;
         fifthplayCount++;
         state++;
         document.querySelector('.tab5p4').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab5p4').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         fifthgameArray[i-1] = 2;
         fifthplayCount++;
         state--;
         document.querySelector('.tab5p4').onclick = "sleep()"
     }}
     //end for fourth box


     //fifth box start
     if (i == 5){
     if (state == 0) {
         document.querySelector('.tab5p5').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         fifthgameArray[i-1] = 1;
         fifthplayCount++;
         state++;
         document.querySelector('.tab5p5').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab5p5').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         fifthgameArray[i-1] = 2;
         fifthplayCount++;
         state--;
         document.querySelector('.tab5p5').onclick = "sleep()"
     }}
     //fifth box end


     //sixth box start
     if (i == 6){
     if (state == 0) {
         document.querySelector('.tab5p6').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         fifthgameArray[i-1] = 1;
         fifthplayCount++;
         state++;
         document.querySelector('.tab5p6').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab5p6').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         fifthgameArray[i-1] = 2;
         fifthplayCount++;
         state--;
         document.querySelector('.tab5p6').onclick = "sleep()"
     }}
     //sixth box end


     //seventh box start
     if (i == 7){
     if (state == 0) {
         document.querySelector('.tab5p7').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         fifthgameArray[i-1] = 1;
         fifthplayCount++;
         state++;
         document.querySelector('.tab5p7').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab5p7').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         fifthgameArray[i-1] = 2;
         fifthplayCount++;
         state--;
         document.querySelector('.tab5p7').onclick = "sleep()"
     }}
     //seventh box end


     //eight box start
     if (i == 8){
     if (state == 0) {
         document.querySelector('.tab5p8').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         fifthgameArray[i-1] = 1;
         fifthplayCount++;
         state++;
         document.querySelector('.tab5p8').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab5p8').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         fifthgameArray[i-1] = 2;
         fifthplayCount++;
         state--;
         document.querySelector('.tab5p8').onclick = "sleep()"
     }}
     //eight box end


     //ninth box start
     if (i == 9){
     if (state == 0) {
         document.querySelector('.tab5p9').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         fifthgameArray[i-1] = 1;
         fifthplayCount++;
         state++;
         document.querySelector('.tab5p9').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab5p9').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         fifthgameArray[i-1] = 2;
         fifthplayCount++;
         state--;
         document.querySelector('.tab5p9').onclick = "sleep()"
     }}
     //ninth box end

     console.log(fifthgameArray)

     fifthcheckWin();
 }


 fifthTacdone = false;
 fifthcheckWin = () => {
     //checking win condition //we can also run a loop on the horizontal,
     // vertical or diagonal to run 3(2 for diagonal) times and add 1 to the indexes each time
     //but i'll just use this to better my edits

     //starting horizontally
     //firstrow
     if (fifthgameArray[0] == fifthgameArray[1] && fifthgameArray[0] == fifthgameArray[2] &&
         fifthgameArray[0] == 1 ){
         document.querySelector('.fifthTacresult').innerHTML = `X wins by the first row `
         fifthTacdone = true;
         // document.querySelector('.fifthTacresult').style.display = "flex"; <button onclick="reload()"> Refresh </button>
     }
         //firstrow
         else if (fifthgameArray[0] == fifthgameArray[1] && fifthgameArray[0] == fifthgameArray[2] &&
             fifthgameArray[0] == 2 ){
             document.querySelector('.fifthTacresult').innerHTML = `O wins by the first row `
             fifthTacdone = true;
             // document.querySelector('.fifthTacresult').style.display = "flex";
         }

     //fifth row
    else if (fifthgameArray[3] == fifthgameArray[4] && fifthgameArray[3] == fifthgameArray[5] &&
         fifthgameArray[3] == 1 ){
         document.querySelector('.fifthTacresult').innerHTML = `X wins by the fifth row `
         fifthTacdone = true;
         // document.querySelector('.fifthTacresult').style.display = "flex";
     }
         else if (fifthgameArray[3] == fifthgameArray[4] && fifthgameArray[3] == fifthgameArray[5] &&
             fifthgameArray[3] == 2 ){
             document.querySelector('.fifthTacresult').innerHTML = `O wins by the fifth row `
             fifthTacdone = true;
             // document.querySelector('.fifthTacresult').style.display = "flex";
         }

     //fifth row
    else if (fifthgameArray[6] === fifthgameArray[7] && fifthgameArray[6] === fifthgameArray[8] &&
         fifthgameArray[6] == 1 ){
         document.querySelector('.fifthTacresult').innerHTML = `X wins by the fifth row `
         fifthTacdone = true;
         // document.querySelector('.fifthTacresult').style.display = "flex";
     }
         else if (fifthgameArray[6] === fifthgameArray[7] && fifthgameArray[6] === fifthgameArray[8] &&
             fifthgameArray[6] == 2 ){
             document.querySelector('.fifthTacresult').innerHTML = `O wins by the fifth row `
             fifthTacdone = true;
             // document.querySelector('.fifthTacresult').style.display = "flex";
         }
     
     //going vertically
     //first column
    else if (fifthgameArray[0] == fifthgameArray[3] && fifthgameArray[0] == fifthgameArray[6] &&
         fifthgameArray[0] == 1 ){
         document.querySelector('.fifthTacresult').innerHTML =  `X wins by the first column `
         fifthTacdone = true;
         // document.querySelector('.fifthTacresult').style.display = "flex";
     }
         //first column
         else if (fifthgameArray[0] == fifthgameArray[3] && fifthgameArray[0] == fifthgameArray[6] &&
             fifthgameArray[0] == 2 ){
             document.querySelector('.fifthTacresult').innerHTML = `O wins by the first column `
             fifthTacdone = true;
             // document.querySelector('.fifthTacresult').style.display = "flex";
         }

     //fifth column
     else if (fifthgameArray[1] == fifthgameArray[4] && fifthgameArray[1] == fifthgameArray[7] &&
         fifthgameArray[1] == 1 ){
         document.querySelector('.fifthTacresult').innerHTML = `X wins by the fifth column `
         fifthTacdone = true;
         // document.querySelector('.fifthTacresult').style.display = "flex";
     }
         //fifth column
         else if (fifthgameArray[1] == fifthgameArray[4] && fifthgameArray[1] == fifthgameArray[7] &&
             fifthgameArray[1] == 2 ){
             document.querySelector('.fifthTacresult').innerHTML = `O wins by the fifth column `
             fifthTacdone = true;
             // document.querySelector('.fifthTacresult').style.display = "flex";
         }

     //fifth column
     else if (fifthgameArray[2] == fifthgameArray[5] && fifthgameArray[2] == fifthgameArray[8] &&
         fifthgameArray[2] == 1 ){
         document.querySelector('.fifthTacresult').innerHTML =  `X wins by the fifth column `
         fifthTacdone = true;
         // document.querySelector('.fifthTacresult').style.display = "flex";
     }
         //fifth column
         else if (fifthgameArray[2] == fifthgameArray[5] && fifthgameArray[2] == fifthgameArray[8] &&
             fifthgameArray[2] == 2 ){
             document.querySelector('.fifthTacresult').innerHTML = `O wins by the fifth column `
             fifthTacdone = true;
             // document.querySelector('.fifthTacresult').style.display = "flex";
         }

     //going diagonally
     // \ diagonal
     else if (fifthgameArray[0] == fifthgameArray[4] && fifthgameArray[0] == fifthgameArray[8] &&
         fifthgameArray[0] == 1 ){
         document.querySelector('.fifthTacresult').innerHTML = `X wins through the downhill diagonal `
         fifthTacdone = true;
         // document.querySelector('.fifthTacresult').style.display = "flex";
     }
         // \ diagonal
         else if (fifthgameArray[0] == fifthgameArray[4] && fifthgameArray[0] == fifthgameArray[8] &&
             fifthgameArray[0] == 2 ){
             document.querySelector('.fifthTacresult').innerHTML = `O wins through the downhill diagonal `
             fifthTacdone = true;
             // document.querySelector('.fifthTacresult').style.display = "flex";
         }

     // / diagonal    
     else if (fifthgameArray[2] == fifthgameArray[4] && fifthgameArray[2] == fifthgameArray[6] &&
         fifthgameArray[2] == 1 ){
         document.querySelector('.fifthTacresult').innerHTML = `X wins through the uphill diagonal `
         fifthTacdone = true;
         // document.querySelector('.fifthTacresult').style.display = "flex";
     }
         // / diagonal
         else if (fifthgameArray[2] == fifthgameArray[4] && fifthgameArray[2] == fifthgameArray[6] &&
             fifthgameArray[2] == 2 ){
             document.querySelector('.fifthTacresult').innerHTML = `O wins through the uphill diagonal `
             fifthTacdone = true;
             // document.querySelector('.fifthTacresult').style.display = "flex";
         }
     else if (fifthplayCount == 9) {
             document.querySelector('.fifthTacresult').innerHTML = `Draw`
             fifthTacdone = true;
             // document.querySelector('.fifthTacresult').style.display = "flex";
             console.log("it runs")
     }
 }

 reload= () => {
     document.location.reload(true)
 }


 sleep = () => {
     console.log("next guy's turn")
 }