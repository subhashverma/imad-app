// counter code
var button = document.getElementById('counter');
button.onclick = function () {
  // create a request object
  var request = new XMLHttpRequest();
  // capture the response and store it in a variable
  request.onreadystatechange = function (){
      if (request.readyState === XMLHttpRequest.DONE) {
          // TAKE some action
          if (request.status === 200) {
              var counter = request.responseText;
               var span = document.getElementById('count');
               span.innerHTML = counter.toString();
              
          }
      }
      // not done yet
  };
  
  // make the reqest
  
  request.open('GET','http://subhashverma446.imad.hasura-app.io/counter', true);
  request.open(null);
};