/* This js file checks the play condition for selcting and enforcing the right game section to the player*/
// firstTacdone = false;
// secondTacdone = false;
// thirdTacdone = false;
// fourthTacdone = false;
// fifthTacdone = true;
// sixthTacdone = false;
// seventhTacdone = false;
// eightTacdone = false;
// ninthTacdone = false;

Tacselect = (a) => {
    if (a==1 && firstTacdone == false) {//another sub if statement will be added for when the target Tac is full 
        document.querySelector(".firstTac-container").style.display = "flex";

        document.querySelector(".secondTac-container").style.display = "none";
        document.querySelector(".thirdTac-container").style.display = "none";
        document.querySelector(".fourthTac-container").style.display = "none";
        document.querySelector(".fifthTac-container").style.display = "none";
        document.querySelector(".sixthTac-container").style.display = "none";
        document.querySelector(".seventhTac-container").style.display = "none";
        document.querySelector(".eightTac-container").style.display = "none";
        document.querySelector(".ninthTac-container").style.display = "none";
    }
    else if ( a == 1 && firstTacdone == true){
        displayAllTac()
    }


    else if (a==2  && secondTacdone == false) {
        document.querySelector(".secondTac-container").style.display = "flex";

        document.querySelector(".firstTac-container").style.display = "none";
        document.querySelector(".thirdTac-container").style.display = "none";
        document.querySelector(".fourthTac-container").style.display = "none";
        document.querySelector(".fifthTac-container").style.display = "none";
        document.querySelector(".sixthTac-container").style.display = "none";
        document.querySelector(".seventhTac-container").style.display = "none";
        document.querySelector(".eightTac-container").style.display = "none";
        document.querySelector(".ninthTac-container").style.display = "none";
    }
    else if ( a == 2 && secondTacdone == true){
        displayAllTac()
    }


    else if (a==3  && thirdTacdone == false) {
        document.querySelector(".thirdTac-container").style.display = "flex";

        document.querySelector(".secondTac-container").style.display = "none";
        document.querySelector(".firstTac-container").style.display = "none";
        document.querySelector(".fourthTac-container").style.display = "none";
        document.querySelector(".fifthTac-container").style.display = "none";
        document.querySelector(".sixthTac-container").style.display = "none";
        document.querySelector(".seventhTac-container").style.display = "none";
        document.querySelector(".eightTac-container").style.display = "none";
        document.querySelector(".ninthTac-container").style.display = "none";
    }
    else if ( a == 3 && thirdTacdone == true){
        displayAllTac()
    }


    else if (a==4 && fourthTacdone == false) {
        document.querySelector(".fourthTac-container").style.display = "flex";

        document.querySelector(".secondTac-container").style.display = "none";
        document.querySelector(".thirdTac-container").style.display = "none";
        document.querySelector(".firstTac-container").style.display = "none";
        document.querySelector(".fifthTac-container").style.display = "none";
        document.querySelector(".sixthTac-container").style.display = "none";
        document.querySelector(".seventhTac-container").style.display = "none";
        document.querySelector(".eightTac-container").style.display = "none";
        document.querySelector(".ninthTac-container").style.display = "none";
    }
    else if ( a == 4 && fourthTacdone == true){
        displayAllTac()
    }


    else if (a==5 && fifthTacdone == false) {
        document.querySelector(".fifthTac-container").style.display = "flex";

        document.querySelector(".secondTac-container").style.display = "none";
        document.querySelector(".thirdTac-container").style.display = "none";
        document.querySelector(".fourthTac-container").style.display = "none";
        document.querySelector(".firstTac-container").style.display = "none";
        document.querySelector(".sixthTac-container").style.display = "none";
        document.querySelector(".seventhTac-container").style.display = "none";
        document.querySelector(".eightTac-container").style.display = "none";
        document.querySelector(".ninthTac-container").style.display = "none";
    }
    else if ( a == 5 && fifthTacdone == true){
        displayAllTac()
    }


    else if (a==6 && sixthTacdone == false) {
        document.querySelector(".sixthTac-container").style.display = "flex";

        document.querySelector(".secondTac-container").style.display = "none";
        document.querySelector(".thirdTac-container").style.display = "none";
        document.querySelector(".fourthTac-container").style.display = "none";
        document.querySelector(".fifthTac-container").style.display = "none";
        document.querySelector(".firstTac-container").style.display = "none";
        document.querySelector(".seventhTac-container").style.display = "none";
        document.querySelector(".eightTac-container").style.display = "none";
        document.querySelector(".ninthTac-container").style.display = "none";
    }
    else if ( a == 6 && sixthTacdone == true){
        displayAllTac()
    }


    else if (a==7  && seventhTacdone == false) {
        document.querySelector(".seventhTac-container").style.display = "flex";

        document.querySelector(".secondTac-container").style.display = "none";
        document.querySelector(".thirdTac-container").style.display = "none";
        document.querySelector(".fourthTac-container").style.display = "none";
        document.querySelector(".fifthTac-container").style.display = "none";
        document.querySelector(".sixthTac-container").style.display = "none";
        document.querySelector(".firstTac-container").style.display = "none";
        document.querySelector(".eightTac-container").style.display = "none";
        document.querySelector(".ninthTac-container").style.display = "none";
    }
    else if ( a == 7 && seventhTacdone == true){
        displayAllTac()
    }


    else if (a==8 && eightTacdone == false) {
        document.querySelector(".eightTac-container").style.display = "flex";

        document.querySelector(".secondTac-container").style.display = "none";
        document.querySelector(".thirdTac-container").style.display = "none";
        document.querySelector(".fourthTac-container").style.display = "none";
        document.querySelector(".fifthTac-container").style.display = "none";
        document.querySelector(".sixthTac-container").style.display = "none";
        document.querySelector(".seventhTac-container").style.display = "none";
        document.querySelector(".firstTac-container").style.display = "none";
        document.querySelector(".ninthTac-container").style.display = "none";
    }
    else if ( a == 8 && eightTacdone == true){
        displayAllTac()
    }


    else if (a==9 && ninthTacdone == false) {
        document.querySelector(".ninthTac-container").style.display = "flex";

        document.querySelector(".secondTac-container").style.display = "none";
        document.querySelector(".thirdTac-container").style.display = "none";
        document.querySelector(".fourthTac-container").style.display = "none";
        document.querySelector(".fifthTac-container").style.display = "none";
        document.querySelector(".sixthTac-container").style.display = "none";
        document.querySelector(".seventhTac-container").style.display = "none";
        document.querySelector(".eightTac-container").style.display = "none";
        document.querySelector(".firstTac-container").style.display = "none";
    }
    else if ( a == 9 && ninthTacdone == true){
        displayAllTac()
    }

}

function displayAllTac() {//i may add an amimation or alert to say the player can play in any tab
    document.querySelector(".ninthTac-container").style.display = "flex";

        document.querySelector(".secondTac-container").style.display = "flex";
        document.querySelector(".thirdTac-container").style.display = "flex";
        document.querySelector(".fourthTac-container").style.display = "flex";
        document.querySelector(".fifthTac-container").style.display = "flex";
        document.querySelector(".sixthTac-container").style.display = "flex";
        document.querySelector(".seventhTac-container").style.display = "flex";
        document.querySelector(".eightTac-container").style.display = "flex";
        document.querySelector(".firstTac-container").style.display = "flex";
}

// document.querySelectorAll('.firstTacselect').addEventListener("click", function select() {//stuff wont just add the event listener to all elements of the same class
//     Tacselect(1);
// });

// document.querySelectorAll('.secondTacselect').addEventListener("click", function select() {
//     Tacselect(2);
// });

// document.querySelectorAll('.thirdTacselect').addEventListener("click", function select() {
//     Tacselect(3);
// });

// document.querySelectorAll('.fourthTacselect').addEventListener("click", function select() {
//     Tacselect(4);
// });

// document.querySelectorAll('.fifthTacselect').addEventListener("click", function select() {
//     Tacselect(5);
// });

// document.querySelectorAll('.sixthTacselect').addEventListener("click", function select() {
//     Tacselect(6);
// });

// document.querySelectorAll('.seventhTacselect').addEventListener("click", function select() {
//     Tacselect(7);
// });

// document.querySelectorAll('.eightTacselect').addEventListener("click", function select() {
//     Tacselect(8);
// });

// document.querySelectorAll('.ninthTacselect').addEventListener("click", function select() {
//     Tacselect(9);
// });