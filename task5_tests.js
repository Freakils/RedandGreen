// Check that the div with id testresult doesn't have the class failing or passing. Use console.log to display a message that tells you what the result of the check was.
var testresult = document.getElementById("testresult");

    if(testresult.className === "failing"){
        console.log("the statement/test result is true/passing, because the class is : " +testresult.className);
    }   
    else if (testresult.className === "passing"){
            console.log("the check is passing because the class is 'passing'");
    }
    else{
        console.log ("the statement/test results is false/failing"); 
        }
// Check that the button has the text 'Make failing'. Use console.log to display a message that tells you what the result of the check was.
var button = document.getElementById("button");
    
    if(button.innerHTML === "Make failing"){
        console.log("the statement about the button text is true/passing, beacause yes the text is : " + button.innerHTML);
    }
    else    {
        console.log ("the statement about the button text is false/failing");
    }
 // Call setTestStatus('testresult', 'testbutton', 'failing');
     
// setTestStatus('testresult', 'testbutton', 'failing');

// Check that #testresult has the class failing. The CSS should give it a red background.
      if(testresult.className === "failing"){
          console.log ("the test is true/passing, because the class is : " +testresult.className);
     }
      else {
          console.log("the test results is false/failing");
      }
// Check that the button has the text 'Make passing'. Use console.log to display a message that tells you what the result of the check was.
     if(button.innerHTML === "Make passing"){
         console.log ("the button text is passing because the text is : " + button.innerHTML);
     }
     else {
         console.log("the button text is failing because currently the text is Make failing");
     }
// Call setTestStatus('testresult', 'testbutton', 'passing');.
        
// setTestStatus('testresult', 'testbutton', 'passing');

// Check that #testresult has the class passing. The CSS should give it a green background.
     if(testresult.className === "passing"){
         console.log ("the test is passing because the background is green, and the class is " +testresult.className);
     }
     else {
         console.log("the test has failed, because it is not is expected");
     }
// Check that the button has the text 'Make failing'.
     if(button.innerHTML === "Make failing"){
         console.log ("the result is passing because the text is :" +button.innerHTML);
     }
     else {
         console.log("the result is failing, its not what is expected");
     }
// Display 'success' if testresult has the class passing, otherwise display 'failure'.
     if(testresult.className === "passing"){
        console.log ("success");
     }
     else {
        console.log("failure");
     };

