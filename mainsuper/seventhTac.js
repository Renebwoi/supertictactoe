 // document.querySelector('.firstTac').addEventListener("click", displayValue(1))
 seventhgameArray = [,,,,,,,,,]
 // console.log(seventhgameArray.length)
 seventhplayCount = 0
//  state = 0

 seventhdisplayValue = (i) => {
     
     //for the first box
     if (i == 1){
     if (state == 0) {
         document.querySelector('.tab7p1').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         seventhgameArray[i-1] = 1;
         // console.log(seventhgameArray[0]);
         seventhplayCount++;

         state++;
         document.querySelector('.tinyTab7p1').textContent = "X";
         document.querySelector('.tab7p1').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab7p1').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         seventhgameArray[i-1] = 2;
         seventhplayCount++;
         state--;
         document.querySelector('.tinyTab7p1').textContent = "O";
         document.querySelector('.tab7p1').onclick = "sleep()"
     }}
     //end for first box

     //for the seventh box
     if (i == 2){
     if (state == 0) {
         document.querySelector('.tab7p2').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         seventhgameArray[i-1] = 1;
         seventhplayCount++;
         state++;
         document.querySelector('.tinyTab7p2').textContent = "X";
         document.querySelector('.tab7p2').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab7p2').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         seventhgameArray[i-1] = 2;
         seventhplayCount++;
         state--;
         document.querySelector('.tinyTab7p2').textContent = "O";
         document.querySelector('.tab7p2').onclick = "sleep()"
     }}
     //end for seventh box


     //for the seventh box
     if (i == 3){
     if (state == 0) {
         document.querySelector('.tab7p3').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         seventhgameArray[i-1] = 1;
         seventhplayCount++;

         state++;
         document.querySelector('.tinyTab7p3').textContent = "X";
         document.querySelector('.tab7p3').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab7p3').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         seventhgameArray[i-1] = 2;
         seventhplayCount++;
         state--;
         document.querySelector('.tinyTab7p3').textContent = "O";
         document.querySelector('.tab7p3').onclick = "sleep()"
     }}
     //end for seventh box


     //for the fourth box
     if (i == 4){
     if (state == 0) {
         document.querySelector('.tab7p4').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         seventhgameArray[i-1] = 1;
         seventhplayCount++;
         state++;
         document.querySelector('.tinyTab7p4').textContent = "X";
         document.querySelector('.tab7p4').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab7p4').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         seventhgameArray[i-1] = 2;
         seventhplayCount++;
         state--;
         document.querySelector('.tinyTab7p4').textContent = "O";
         document.querySelector('.tab7p4').onclick = "sleep()"
     }}
     //end for fourth box


     //fifth box start
     if (i == 5){
     if (state == 0) {
         document.querySelector('.tab7p5').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         seventhgameArray[i-1] = 1;
         seventhplayCount++;
         state++;
         document.querySelector('.tinyTab7p5').textContent = "X";
         document.querySelector('.tab7p5').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab7p5').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         seventhgameArray[i-1] = 2;
         seventhplayCount++;
         state--;
         document.querySelector('.tinyTab7p5').textContent = "O";
         document.querySelector('.tab7p5').onclick = "sleep()"
     }}
     //fifth box end


     //sixth box start
     if (i == 6){
     if (state == 0) {
         document.querySelector('.tab7p6').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         seventhgameArray[i-1] = 1;
         seventhplayCount++;
         state++;
         document.querySelector('.tinyTab7p6').textContent = "X";
         document.querySelector('.tab7p6').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab7p6').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         seventhgameArray[i-1] = 2;
         seventhplayCount++;
         state--;
         document.querySelector('.tinyTab7p6').textContent = "O";
         document.querySelector('.tab7p6').onclick = "sleep()"
     }}
     //sixth box end


     //seventh box start
     if (i == 7){
     if (state == 0) {
         document.querySelector('.tab7p7').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         seventhgameArray[i-1] = 1;
         seventhplayCount++;
         state++;
         document.querySelector('.tinyTab7p7').textContent = "X";
         document.querySelector('.tab7p7').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab7p7').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         seventhgameArray[i-1] = 2;
         seventhplayCount++;
         state--;
         document.querySelector('.tinyTab7p7').textContent = "O";
         document.querySelector('.tab7p7').onclick = "sleep()"
     }}
     //seventh box end


     //eight box start
     if (i == 8){
     if (state == 0) {
         document.querySelector('.tab7p8').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         seventhgameArray[i-1] = 1;
         seventhplayCount++;
         state++;
         document.querySelector('.tinyTab7p8').textContent = "X";
         document.querySelector('.tab7p8').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab7p8').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         seventhgameArray[i-1] = 2;
         seventhplayCount++;
         state--;
         document.querySelector('.tinyTab7p8').textContent = "O";
         document.querySelector('.tab7p8').onclick = "sleep()"
     }}
     //eight box end


     //ninth box start
     if (i == 9){
     if (state == 0) {
         document.querySelector('.tab7p9').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         seventhgameArray[i-1] = 1;
         seventhplayCount++;
         state++;
         document.querySelector('.tinyTab7p9').textContent = "X";
         document.querySelector('.tab7p9').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab7p9').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         seventhgameArray[i-1] = 2;
         seventhplayCount++;
         state--;
         document.querySelector('.tinyTab7p9').textContent = "O";
         document.querySelector('.tab7p9').onclick = "sleep()"
     }}
     //ninth box end

    //  console.log(seventhgameArray)

     seventhcheckWin();
 }

 seventhTacdone = false;
 seventhcheckWin = () => {
     //checking win condition //we can also run a loop on the horizontal,
     // vertical or diagonal to run 3(2 for diagonal) times and add 1 to the indexes each time
     //but i'll just use this to better my edits

     //starting horizontally
     //firstrow
     if (seventhgameArray[0] == seventhgameArray[1] && seventhgameArray[0] == seventhgameArray[2] &&
         seventhgameArray[0] == 1 ){
         document.querySelector('.seventhTacresult').innerHTML = `X wins by the first row `
         seventhTacdone = true;
         TacBlock(7, 1);
         // document.querySelector('.seventhTacresult').style.display = "flex"; <button onclick="reload()"> Refresh </button>
     }
         //firstrow
         else if (seventhgameArray[0] == seventhgameArray[1] && seventhgameArray[0] == seventhgameArray[2] &&
             seventhgameArray[0] == 2 ){
             document.querySelector('.seventhTacresult').innerHTML = `O wins by the first row `
             seventhTacdone = true;
             TacBlock(7, 0);
             // document.querySelector('.seventhTacresult').style.display = "flex";
         }

     //seventh row
    else if (seventhgameArray[3] == seventhgameArray[4] && seventhgameArray[3] == seventhgameArray[5] &&
         seventhgameArray[3] == 1 ){
         document.querySelector('.seventhTacresult').innerHTML = `X wins by the second row `
         seventhTacdone = true;
         TacBlock(7, 1);
         // document.querySelector('.seventhTacresult').style.display = "flex";
     }
         else if (seventhgameArray[3] == seventhgameArray[4] && seventhgameArray[3] == seventhgameArray[5] &&
             seventhgameArray[3] == 2 ){
             document.querySelector('.seventhTacresult').innerHTML = `O wins by the second row `
             seventhTacdone = true;
             TacBlock(7, 0);
             // document.querySelector('.seventhTacresult').style.display = "flex";
         }

     //seventh row
    else if (seventhgameArray[6] === seventhgameArray[7] && seventhgameArray[6] === seventhgameArray[8] &&
         seventhgameArray[6] == 1 ){
         document.querySelector('.seventhTacresult').innerHTML = `X wins by the third row `
         seventhTacdone = true;
         TacBlock(7, 1);
         // document.querySelector('.seventhTacresult').style.display = "flex";
     }
         else if (seventhgameArray[6] === seventhgameArray[7] && seventhgameArray[6] === seventhgameArray[8] &&
             seventhgameArray[6] == 2 ){
             document.querySelector('.seventhTacresult').innerHTML = `O wins by the third row `
             seventhTacdone = true;
             TacBlock(7, 0);
             // document.querySelector('.seventhTacresult').style.display = "flex";
         }
     
     //going vertically
     //first column
    else if (seventhgameArray[0] == seventhgameArray[3] && seventhgameArray[0] == seventhgameArray[6] &&
         seventhgameArray[0] == 1 ){
         document.querySelector('.seventhTacresult').innerHTML =  `X wins by the first column `
         seventhTacdone = true;
         TacBlock(7, 1);
         // document.querySelector('.seventhTacresult').style.display = "flex";
     }
         //first column
         else if (seventhgameArray[0] == seventhgameArray[3] && seventhgameArray[0] == seventhgameArray[6] &&
             seventhgameArray[0] == 2 ){
             document.querySelector('.seventhTacresult').innerHTML = `O wins by the first column `
             seventhTacdone = true;
             TacBlock(7, 0);
             // document.querySelector('.seventhTacresult').style.display = "flex";
         }

     //seventh column
     else if (seventhgameArray[1] == seventhgameArray[4] && seventhgameArray[1] == seventhgameArray[7] &&
         seventhgameArray[1] == 1 ){
         document.querySelector('.seventhTacresult').innerHTML = `X wins by the second column `
         seventhTacdone = true;
         TacBlock(7, 1);
         // document.querySelector('.seventhTacresult').style.display = "flex";
     }
         //seventh column
         else if (seventhgameArray[1] == seventhgameArray[4] && seventhgameArray[1] == seventhgameArray[7] &&
             seventhgameArray[1] == 2 ){
             document.querySelector('.seventhTacresult').innerHTML = `O wins by the second column `
             seventhTacdone = true;
             TacBlock(7, 0);
             // document.querySelector('.seventhTacresult').style.display = "flex";
         }

     //seventh column
     else if (seventhgameArray[2] == seventhgameArray[5] && seventhgameArray[2] == seventhgameArray[8] &&
         seventhgameArray[2] == 1 ){
         document.querySelector('.seventhTacresult').innerHTML =  `X wins by the third column `
         seventhTacdone = true;
         TacBlock(7, 1);
         // document.querySelector('.seventhTacresult').style.display = "flex";
     }
         //seventh column
         else if (seventhgameArray[2] == seventhgameArray[5] && seventhgameArray[2] == seventhgameArray[8] &&
             seventhgameArray[2] == 2 ){
             document.querySelector('.seventhTacresult').innerHTML = `O wins by the third column `
             seventhTacdone = true;
             TacBlock(7, 0);
             // document.querySelector('.seventhTacresult').style.display = "flex";
         }

     //going diagonally
     // \ diagonal
     else if (seventhgameArray[0] == seventhgameArray[4] && seventhgameArray[0] == seventhgameArray[8] &&
         seventhgameArray[0] == 1 ){
         document.querySelector('.seventhTacresult').innerHTML = `X wins through the downhill diagonal `
         seventhTacdone = true;
         TacBlock(7, 1);
         // document.querySelector('.seventhTacresult').style.display = "flex";
     }
         // \ diagonal
         else if (seventhgameArray[0] == seventhgameArray[4] && seventhgameArray[0] == seventhgameArray[8] &&
             seventhgameArray[0] == 2 ){
             document.querySelector('.seventhTacresult').innerHTML = `O wins through the downhill diagonal `
             seventhTacdone = true;
             TacBlock(7, 0);
             // document.querySelector('.seventhTacresult').style.display = "flex";
         }

     // / diagonal    
     else if (seventhgameArray[2] == seventhgameArray[4] && seventhgameArray[2] == seventhgameArray[6] &&
         seventhgameArray[2] == 1 ){
         document.querySelector('.seventhTacresult').innerHTML = `X wins through the uphill diagonal `
         seventhTacdone = true;
         TacBlock(7, 1);
         // document.querySelector('.seventhTacresult').style.display = "flex";
     }
         // / diagonal
         else if (seventhgameArray[2] == seventhgameArray[4] && seventhgameArray[2] == seventhgameArray[6] &&
             seventhgameArray[2] == 2 ){
             document.querySelector('.seventhTacresult').innerHTML = `O wins through the uphill diagonal `
             seventhTacdone = true;
             TacBlock(7, 0);
             // document.querySelector('.seventhTacresult').style.display = "flex";
         }
     else if (seventhplayCount == 9) {
             document.querySelector('.seventhTacresult').innerHTML = `Draw`
             seventhTacdone = true;
             TacBlock(7, 2);
             // document.querySelector('.seventhTacresult').style.display = "flex";
             console.log("it runs")
     }
 }

 reload= () => {
     document.location.reload(true)
 }


 sleep = () => {
     console.log("next guy's turn")
 }