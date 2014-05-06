/* Lesson 6

Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize 
the first letter of each word. Words will be separated by only one space. 

Use the Parameter Testing feature in the box below to test your code with different arguments.

*/

function letterCapitalize(str) {
    var myString = str.split(" ");

    for (var i = 0; i < myString.length; i++) {
        //myString[i] = myString[i].charAt(0).toUpperCase() + myString[i].substr(1);
        myString[i] = myString[i][0].toUpperCase() + myString[i].substr(1);
    }

     
    return myString.join(" ");

}


//alert(letterCapitalize("We are Happy"));

/*
Challenge 7
Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 

1. turn the string into an aray
2. check the value of each character
3. If the character is a letter
4. Check the value of the characters to the left and right
5. If those do not equal + plus symbols
6. return false
7. else true

*/

/*function SimpleSymbols(str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var correct = true;
    var myArray = str.split("");
    for (var i = 0; i < myArray.length; i++) {
        var index = alphabet.indexOf(myArray[i]);
        if (index !== -1 && (myArray[i - 1] !== "+" || myArray[i + 1] !== "+")) {
            correct = false;
        }
    }
    return correct;
}

alert(SimpleSymbols("f++d+")); */



/* Using the JavaScript language, have the function CheckNums(num1,num2) take both parameters being passed and 
return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are 
equal to each other then return the string -1. 

    Use the Parameter Testing feature in the box below to test your code with different arguments.

function checkNums(num1, num2) {

    if (num1 > num2) {
        return "true";
    }
    else if (num1 < num2) {
        return "false";
    }

    else {
        return "-1";
    }
    

}

alert(checkNums(47, 47));

*/

/*Lesson 8 - Using the JavaScript language, have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.


    1. Get the hours by dividing by 60 and rounding down
    2. Get the minutes by modulo 60 
    3. Concatenate the numbers with a colon in between
*/

function TimeConvert(num) {
    var hours = Math.floor(num / 60);
    var minutes = Math.floor(num % 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    num = hours + ":" + minutes;
    return num.toString();
}

alert(TimeConvert(245));