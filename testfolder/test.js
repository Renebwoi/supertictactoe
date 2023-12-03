function changeSecond() {

//     var xhr = new XMLHttpRequest (); 
// xhr.open ('GET', 'test2.html'); // open a GET request to the HTML file
// xhr.onreadystatechange = function () { // define a function to handle the response
//   if (xhr.readyState == 4 && xhr.status == 200) { // check if the request is completed and successful
//     document.getElementById ('content').innerHTML = xhr.responseText; // insert the HTML content into the div element
//   }
// };
// xhr.send (); // send the request


fetch ('test2.html') // make a GET request to the HTML file
  .then (response => response.text ()) // get the HTML content as a string
  .then (html => {
    document.getElementById ('content').innerHTML = html; // insert the HTML content into the div element
  })
  .catch (error => {
    console.error (error); // handle any errors
  });

}

document.getElementById('content').click();