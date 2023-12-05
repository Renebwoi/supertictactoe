let PreviewState = 0;

function ToggleGamePreview () {
    if (PreviewState == 0) {
        document.querySelector('.GamePreview').style.display = "flex";
        // document.querySelector('.GamePreview').style.opacity = "1";
        document.querySelector('.GamePreviewButton').textContent = "Hide Game Map";
        // document.querySelector('.GamePreview').style.animationName = "FadeIn";
        PreviewState = 1;
    }
    else if (PreviewState == 1) {
        // document.querySelector('.GamePreview').style.animationName = "FadeOut";
        document.querySelector('.GamePreviewButton').textContent = "Show Game Map";
        // document.querySelector('.GamePreview').style.opacity = "0";
        // document.querySelector('.GamePreview').style.display = "none";
        
        document.querySelector('.GamePreview').style.display = "none";
        // document.querySelector('.GamePreview').style.display = "none";

        PreviewState = 0;
    }


}

// function hide(){
//     if (Ev<1){
//         Ev = Ev + 0.1;
//     }
//     else{
//         document.querySelector('.GamePreview').style.display = "none";
//         clearInterval
//     }
//     }

    // var opacity=0; 
    // var intervalID=0; 
    // window.onload=fadeout; 

    
    //     function fadeout(){ 
    //         setInterval(hide, 200); 
    //     } 
    // function hide(){ 
    //     var body=document.querySelector('.GamePreview'); 
    //     opacity = 
    // Number(window.getComputedStyle(body).getPropertyValue("opacity")) 
      
    //         if(opacity>0){ 
    //             opacity=opacity-0.1; 
    //                     body.style.opacity=opacity 
    //         } 
    //         else{ 
    //             clearInterval(intervalID); 
    //         } 
    //     } 
