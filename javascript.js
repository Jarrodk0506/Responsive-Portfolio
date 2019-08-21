// const fs = require('fs');

$(document).ready(function() {

    $(".submit").on("click", function() {

        console.log("Capture");
        var fName = document.getElementById('fname').value;
        var lName = document.getElementById('lname').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('subject').value;
       
        var divider = "\n------------------------------------------------------------\n\n";
        var info = "\nFirst Name: " + fName + "\nLast Name: " + lName + "\nEmail: " + email + "\nMessage: " + message + divider;
        console.log(info);

    //     fs.appendFile("log.txt", info + divider, function(err) {
    //     if (err) throw err;
    //     console.log(info);
    //   });

    });


});







