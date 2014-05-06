//Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize 
//the first letter of each word. Words will be separated by only one space. 

//Use the Parameter Testing feature in the box below to test your code with different arguments.

function letterCapitalize(str) {
    var myString = str.split(" ");

    for (var i = 0; i < myString.length; i++) {
        myString[i] = myString[i].charAt(0).toUpperCase() + myString[i].substr(1);
    }

     
    return myString.join(" ");

}

alert(letterCapitalize("We are Happy"));

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
//LetterCapitalize(readline());
