// [3] Get JSON with the JavaScript XMLHttpRequest Method

/***************************************************************************************************************
                                                                                                                
            JavaScript Object	                        JSON

1.	Keys in key/value pairs                 1. Keys in key/value pairs need
    don’t always need double quotes.	      to be enclosed in double quotes.

2.	It is only used by JavaScript.	       2. Other programming languages are able to generate and use JSON.

3.	Functions are compatible               3. Functions are incompatible with JSON.
    with JavaScript Object.	

4.	JSON.stringify()                       4. JSON.parse()
    JavaScript objects -> JSON format.	      JSON data -> JavaScript object.

****************************************************************************************************************/


// TASK :

// Update the code to create and send a GET request to the freeCodeCamp Cat Photo API. Then click the Get Message button. Your AJAX function will replace the The message will go here text with the raw JSON output from the API.


// Solution:

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      // Add your code below this line

        //First, an instance of the XMLHttpRequest object is created and saved in the req variable
        const request = new XMLHttpRequest();


        //Next, the open method initializes a request - this example is requesting data from an API, therefore is a GET request. 
        //The second argument for open is the URL of the API you are requesting data from. 
        //The third argument is a Boolean value where true makes it an asynchronous request.
        request.open("GET",'https://api.thecatapi.com/v1/images/search',true);


        //The send method sends the request.
        request.send();


        //Finally, the onload event handler parses the returned data and applies the JSON.stringify method to convert the JavaScript object into a string. This string is then inserted as the message text.
        request.onload = function(){
            const json = JSON.parse(request.responseText);
            document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
        }

      // Add your code above this line
    };
  });