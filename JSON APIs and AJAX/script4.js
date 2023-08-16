// [4] Get JSON with the JavaScript fetch method


// Task:

//Update the code to create and send a GET request to the freeCodeCamp Cat Photo API. But this time, using the fetch method instead of XMLHttpRequest.

// Solution

// for freecodecamp.org's  website  editor only 
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick= () => {
      // Add your code below this line


fetch(URL1)
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').innerHTML += JSON.stringify(data);
  })
      // Add your code above this line
    };
  });

