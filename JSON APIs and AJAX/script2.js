// [2] Change Text with click Events


// Task :

//Add code inside the onclick event handler to change the text inside the message element to say Here is the message.

// SOLUTION :
document.addEventListener('DOMContentLoaded', function(){
    // Add your code below this line
    document.getElementById("getMessage").onclick=function(){
        document.getElementsByClassName('message')[0].textContent="Here is the message";
    }

    // Add your code above this line
  });