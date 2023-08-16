// [5] Access the JSON Data from an API

// TASK :

//For the cat with the id of 2, print to the console the second value in the codeNames array. You should use bracket and dot notation on the object (which is saved in the variable json) to access the value.

// SOLUTION :

// for only website editor
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json', true);
      req.send();
      req.onload=function(){
        const json = JSON.parse(req.responseText);
        document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
        // Add your code below this line
        console.log(json[2].codeNames[1]);
        // Add your code above this line
      };
    };
  });