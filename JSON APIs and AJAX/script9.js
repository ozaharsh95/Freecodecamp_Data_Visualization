// [9] Get Geolocation Data to Find A User's GPS Coordinates
/*

Another cool thing you can do is access your user's current location. Every browser has a built in navigator that can give you this information.

The navigator will get the user's current longitude and latitude.

You will see a prompt to allow or block this site from knowing your current location. The challenge can be completed either way, as long as the code is correct.

By selecting allow, you will see the text on the output phone change to your latitude and longitude.

Here's code that does this:

if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}

*/


if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
      document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
    });
  }