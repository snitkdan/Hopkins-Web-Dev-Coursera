/**
 * Created by Danik on 9/4/2016.
 */

//Event Handling
document.addEventListener("DOMContentLoaded", function(event){
  function sayHello(event){
    console.log(event);
    this.textContent = "Said it!";
    var name = document.getElementById("name").value;
    var message = "Hello " + name + "!";
    //document.getElementById("content").textContent = message;
    document.getElementById("content").innerHTML = "<h2>" + message + "</h2>";

    if (name === 'student'){
      var title = document.querySelector("h1").textContent;
      title += " & Lovin' it!";
      var title = document.querySelector("h1").textContent = title;
    }
  }
  document.querySelector('button').addEventListener('click', sayHello);

  document.querySelector("body").addEventListener("mousemove",
    function(event){
      if (event.shiftKey === true){
      console.log("( " + event.clientX + " , " + event.clientY + " )");
      }
    }
  );
});
/*console.log(this);
//document.querySelector("button").addEventListener("click", sayHello);
document.querySelector('button').onclick = sayHello; //same as above*/


/*//DOM manipulation -- Part 1
console.log(document.getElementById("title"));
console.log(document instanceof HTMLDocument);*/

/*
//DOM manipulation -- Part 2
function sayHello(){
  this.textContent = "Said it!";
  var name = document.getElementById("name").value;
  var message = "Hello " + name + "!";
  //document.getElementById("content").textContent = message;
  document.getElementById("content").innerHTML = "<h2>" + message + "</h2>";

  if (name === 'student'){
    var title = document.querySelector("h1").textContent;
    title += " & Lovin' it!";
    var title = document.querySelector("h1").textContent = title;
  }
}
*/
