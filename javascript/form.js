/* ------------------------Form-Validation-------------------------*/
//Saying hey when these id have these events happen do this function
document.getElementById("fullName").addEventListener("blur", fullName);
document.getElementById("email").addEventListener("blur", email);
document.getElementById("message").addEventListener("keydown", message);
    // Full Name Validation
    
    function fullName() {
        console.log("fullname blur event Listner Working...");
        var innerText = document.getElementById("fullName").value;
        // This is a regular expression
        var letters = /^[A-Za-z\s]*$/;
        var Err     = "";

        if (innerText.match(letters)) {
            console.log("Input Text working.");
        }
        else {
            console.log("Name Validation Failed");
            Err = "Please remove numbers from name";
        }

        document.getElementById("Err").textContent = Err;
        
    }
   
    // Email Validation
    document.getElementById("email").addEventListener("blur", email);
    function email() {
        console.log("Email blur event-listener working");
        
        var position     = document.forms["form"]["email"].value;
        var atPosition   = position.indexOf("@");
        var dotPosition  = position.lastIndexOf(".");
        var emailErr     = "";

        if (atPosition<1 || dotPosition<atPosition+2 || dotPosition+2>=position.length) {
            console.log("Email Validation Working");
            emailErr = "Please enter a valid email";
        }
        else {
            console.log("Email Validation Failed");
        }
        //This is putting content into the empty div
        document.getElementById("emailErr").textContent = emailErr;
    }

 
/* ------------------------Form-Validation-End-------------------------*/

