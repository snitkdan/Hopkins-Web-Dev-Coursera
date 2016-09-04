/**
 * Created by Danik on 9/4/2016.
 */
document.addEventListener("DOMContentLoaded",
  function(event) {
  // Unobtrusive event binding
  document.querySelector("button").addEventListener("click",
    function(){
      //Call server to get the name
      $ajaxUtils.sendGetRequest("/data/names.txt",
        function(res) {
          var message = "Hello " + res.fName + " " + res.lName + ". You are " + res.age + " years old!";
          document.querySelector("#content").innerHTML = "<h2>" + message + "</h2>";
        });

    });
  });
