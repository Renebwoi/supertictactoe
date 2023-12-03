 // document.querySelector('.firstTac').addEventListener("click", displayValue(1))
 secondgameArray = [,,,,,,,,,]
 // console.log(secondgameArray.length)
 secondplayCount = 0
//  state = 0

 seconddisplayValue = (i) => {
     
     //for the first box
     if (i == 1){
     if (state == 0) {
         document.querySelector('.tab2p1').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         secondgameArray[i-1] = 1;
         // console.log(secondgameArray[0]);
         secondplayCount++;

         state++;
         document.querySelector('.tab2p1').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab2p1').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         secondgameArray[i-1] = 2;
         secondplayCount++;
         state--;
         document.querySelector('.tab2p1').onclick = "sleep()"
     }}
     //end for first box

     //for the second box
     if (i == 2){
     if (state == 0) {
         document.querySelector('.tab2p2').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         secondgameArray[i-1] = 1;
         secondplayCount++;
         state++;
         document.querySelector('.tab2p2').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab2p2').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         secondgameArray[i-1] = 2;
         secondplayCount++;
         state--;
         document.querySelector('.tab2p2').onclick = "sleep()"
     }}
     //end for second box


     //for the third box
     if (i == 3){
     if (state == 0) {
         document.querySelector('.tab2p3').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         secondgameArray[i-1] = 1;
         secondplayCount++;

         state++;
         document.querySelector('.tab2p3').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab2p3').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         secondgameArray[i-1] = 2;
         secondplayCount++;
         state--;
         document.querySelector('.tab2p3').onclick = "sleep()"
     }}
     //end for third box


     //for the fourth box
     if (i == 4){
     if (state == 0) {
         document.querySelector('.tab2p4').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         secondgameArray[i-1] = 1;
         secondplayCount++;
         state++;
         document.querySelector('.tab2p4').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab2p4').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         secondgameArray[i-1] = 2;
         secondplayCount++;
         state--;
         document.querySelector('.tab2p4').onclick = "sleep()"
     }}
     //end for fourth box


     //fifth box start
     if (i == 5){
     if (state == 0) {
         document.querySelector('.tab2p5').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         secondgameArray[i-1] = 1;
         secondplayCount++;
         state++;
         document.querySelector('.tab2p5').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab2p5').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         secondgameArray[i-1] = 2;
         secondplayCount++;
         state--;
         document.querySelector('.tab2p5').onclick = "sleep()"
     }}
     //fifth box end


     //sixth box start
     if (i == 6){
     if (state == 0) {
         document.querySelector('.tab2p6').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         secondgameArray[i-1] = 1;
         secondplayCount++;
         state++;
         document.querySelector('.tab2p6').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab2p6').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         secondgameArray[i-1] = 2;
         secondplayCount++;
         state--;
         document.querySelector('.tab2p6').onclick = "sleep()"
     }}
     //sixth box end


     //seventh box start
     if (i == 7){
     if (state == 0) {
         document.querySelector('.tab2p7').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         secondgameArray[i-1] = 1;
         secondplayCount++;
         state++;
         document.querySelector('.tab2p7').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab2p7').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         secondgameArray[i-1] = 2;
         secondplayCount++;
         state--;
         document.querySelector('.tab2p7').onclick = "sleep()"
     }}
     //seventh box end


     //eight box start
     if (i == 8){
     if (state == 0) {
         document.querySelector('.tab2p8').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         secondgameArray[i-1] = 1;
         secondplayCount++;
         state++;
         document.querySelector('.tab2p8').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab2p8').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         secondgameArray[i-1] = 2;
         secondplayCount++;
         state--;
         document.querySelector('.tab2p8').onclick = "sleep()"
     }}
     //eight box end


     //ninth box start
     if (i == 9){
     if (state == 0) {
         document.querySelector('.tab2p9').innerHTML =
         `<div class="box-selectX">
         <div class="Xbar1"></div>
         <div class="Xbar2"></div>`;

         secondgameArray[i-1] = 1;
         secondplayCount++;
         state++;
         document.querySelector('.tab2p9').onclick = "sleep()"
     }
     else if (state == 1) {
         document.querySelector('.tab2p9').innerHTML =
         `<div class="box-selectO">
         <div class="Ocircle1"></div>
         `;

         secondgameArray[i-1] = 2;
         secondplayCount++;
         state--;
         document.querySelector('.tab2p9').onclick = "sleep()"
     }}
     //ninth box end

    //  console.log(secondgameArray)

     secondcheckWin();
 }
 secondTacdone = false;
 secondcheckWin = () => {
     //checking win condition //we can also run a loop on the horizontal,
     // vertical or diagonal to run 3(2 for diagonal) times and add 1 to the indexes each time
     //but i'll just use this to better my edits

     //starting horizontally
     //firstrow
     if (secondgameArray[0] == secondgameArray[1] && secondgameArray[0] == secondgameArray[2] &&
         secondgameArray[0] == 1 ){
         document.querySelector('.secondTacresult').innerHTML = `X wins by the first row `
         secondTacdone = true;
         TacBlock(2, 1);
         // document.querySelector('.secondTacresult').style.display = "flex"; <button onclick="reload()"> Refresh </button>
     }
         //firstrow
         else if (secondgameArray[0] == secondgameArray[1] && secondgameArray[0] == secondgameArray[2] &&
             secondgameArray[0] == 2 ){
             document.querySelector('.secondTacresult').innerHTML = `O wins by the first row `
             secondTacdone = true;
             TacBlock(2, 0);
             // document.querySelector('.secondTacresult').style.display = "flex";
         }

     //second row
    else if (secondgameArray[3] == secondgameArray[4] && secondgameArray[3] == secondgameArray[5] &&
         secondgameArray[3] == 1 ){
         document.querySelector('.secondTacresult').innerHTML = `X wins by the second row `
         secondTacdone = true;
         TacBlock(2, 1);
         // document.querySelector('.secondTacresult').style.display = "flex";
     }
         else if (secondgameArray[3] == secondgameArray[4] && secondgameArray[3] == secondgameArray[5] &&
             secondgameArray[3] == 2 ){
             document.querySelector('.secondTacresult').innerHTML = `O wins by the second row `
             secondTacdone = true;
             TacBlock(2, 0);
             // document.querySelector('.secondTacresult').style.display = "flex";
         }

     //third row
    else if (secondgameArray[6] === secondgameArray[7] && secondgameArray[6] === secondgameArray[8] &&
         secondgameArray[6] == 1 ){
         document.querySelector('.secondTacresult').innerHTML = `X wins by the third row `
         secondTacdone = true;
         TacBlock(2, 1);
         // document.querySelector('.secondTacresult').style.display = "flex";
     }
         else if (secondgameArray[6] === secondgameArray[7] && secondgameArray[6] === secondgameArray[8] &&
             secondgameArray[6] == 2 ){
             document.querySelector('.secondTacresult').innerHTML = `O wins by the third row `
             secondTacdone = true;
             TacBlock(2, 0);
             // document.querySelector('.secondTacresult').style.display = "flex";
         }
     
     //going vertically
     //first column
    else if (secondgameArray[0] == secondgameArray[3] && secondgameArray[0] == secondgameArray[6] &&
         secondgameArray[0] == 1 ){
         document.querySelector('.secondTacresult').innerHTML =  `X wins by the first column `
         secondTacdone = true;
         TacBlock(2, 1);
         // document.querySelector('.secondTacresult').style.display = "flex";
     }
         //first column
         else if (secondgameArray[0] == secondgameArray[3] && secondgameArray[0] == secondgameArray[6] &&
             secondgameArray[0] == 2 ){
             document.querySelector('.secondTacresult').innerHTML = `O wins by the first column `
             secondTacdone = true;
             TacBlock(2, 0);
             // document.querySelector('.secondTacresult').style.display = "flex";
         }

     //second column
     else if (secondgameArray[1] == secondgameArray[4] && secondgameArray[1] == secondgameArray[7] &&
         secondgameArray[1] == 1 ){
         document.querySelector('.secondTacresult').innerHTML = `X wins by the second column `
         secondTacdone = true;
         TacBlock(2, 1);
         // document.querySelector('.secondTacresult').style.display = "flex";
     }
         //second column
         else if (secondgameArray[1] == secondgameArray[4] && secondgameArray[1] == secondgameArray[7] &&
             secondgameArray[1] == 2 ){
             document.querySelector('.secondTacresult').innerHTML = `O wins by the second column `
             secondTacdone = true;
             TacBlock(2, 0);
             // document.querySelector('.secondTacresult').style.display = "flex";
         }

     //third column
     else if (secondgameArray[2] == secondgameArray[5] && secondgameArray[2] == secondgameArray[8] &&
         secondgameArray[2] == 1 ){
         document.querySelector('.secondTacresult').innerHTML =  `X wins by the third column `
         secondTacdone = true;
         TacBlock(2, 1);
         // document.querySelector('.secondTacresult').style.display = "flex";
     }
         //third column
         else if (secondgameArray[2] == secondgameArray[5] && secondgameArray[2] == secondgameArray[8] &&
             secondgameArray[2] == 2 ){
             document.querySelector('.secondTacresult').innerHTML = `O wins by the third column `
             secondTacdone = true;
             TacBlock(2, 0);
             // document.querySelector('.secondTacresult').style.display = "flex";
         }

     //going diagonally
     // \ diagonal
     else if (secondgameArray[0] == secondgameArray[4] && secondgameArray[0] == secondgameArray[8] &&
         secondgameArray[0] == 1 ){
         document.querySelector('.secondTacresult').innerHTML = `X wins through the downhill diagonal `
         secondTacdone = true;
         TacBlock(2, 1);
         // document.querySelector('.secondTacresult').style.display = "flex";
     }
         // \ diagonal
         else if (secondgameArray[0] == secondgameArray[4] && secondgameArray[0] == secondgameArray[8] &&
             secondgameArray[0] == 2 ){
             document.querySelector('.secondTacresult').innerHTML = `O wins through the downhill diagonal `
             secondTacdone = true;
             TacBlock(2, 0);
             // document.querySelector('.secondTacresult').style.display = "flex";
         }

     // / diagonal    
     else if (secondgameArray[2] == secondgameArray[4] && secondgameArray[2] == secondgameArray[6] &&
         secondgameArray[2] == 1 ){
         document.querySelector('.secondTacresult').innerHTML = `X wins through the uphill diagonal `
         secondTacdone = true;
         TacBlock(2, 1);
         // document.querySelector('.secondTacresult').style.display = "flex";
     }
         // / diagonal
         else if (secondgameArray[2] == secondgameArray[4] && secondgameArray[2] == secondgameArray[6] &&
             secondgameArray[2] == 2 ){
             document.querySelector('.secondTacresult').innerHTML = `O wins through the uphill diagonal `
             secondTacdone = true;
             TacBlock(2, 0);
             // document.querySelector('.secondTacresult').style.display = "flex";
         }
     else if (secondplayCount == 9) {
             document.querySelector('.secondTacresult').innerHTML = `Draw`
             secondTacdone = true;
             TacBlock(2, 2);
             // document.querySelector('.secondTacresult').style.display = "flex";
             console.log("it runs")
     }
 }

 reload= () => {
     document.location.reload(true)
 }


 sleep = () => {
     console.log("next guy's turn")
 }