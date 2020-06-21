//                             *** Chapter # 21-25 ***
//                                 STRING METHODS 
//                                    Task # 1
// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
// lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
// var fullName = firstName + " " + lastName;
// alert("Hello " + fullName)


//                                    Task # 2
// var mobile = prompt("what's your favorite mobile model");
// var length = mobile.length;
// document.write("My favorite phone is : " + mobile + " Plus " + "<br>" + "Length of String : " + length);


//                                    Task # 3
// var user_word = prompt("enter any string");
// var tracker = prompt("which word's index do you want to find?");
// var index = user_word.indexOf(tracker);
// document.write("String : " + user_word + "<br/>");
// document.write("Index of " + tracker + " = " + index);


//                                    Task # 4
// var string = prompt("enter any string");
// var tracker = prompt("which word's last index do you want to find?");
// var lastIndex = string.lastIndexOf(tracker);
// document.write("String : " + string + "<br/>" + "Last index of " + tracker + " = " + lastIndex);


//                                    Task # 5
// var string = prompt("enter any string");
// var tracker = prompt("at what index do you want to find a character");
// var character = string.charAt(tracker);
// document.write("String : " + string + "<br/>" + "Character at index " + tracker + " = " + character);


//                                    Task # 6
// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// var fullName = firstName + " " + lastName;
//  alert("Hello " + fullName)


//                                    Task # 7
// var city = "Hyderabad";
// var replace = "Islamabad";
// replace = city.replace("Hyder", "Islam");
// document.write("City : " + city + "<br/>" + "After Replacement : " + replace)


//                                    Task # 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// message = message.replace(/and/g, "&");
// document.write(message)


//                                    Task # 9
// var userValue = prompt("enter any numeric value");
// var userValueType = typeof (userValue);
// var convertedUservalue = Number(userValue);
// var userValueType_1 = typeof (convertedUservalue);
// document.write("Value : " + userValue + "<br/>" + "Type : " + userValueType + "<br/>" + "Value : " + convertedUservalue + "<br/>" + "Type : " + userValueType_1)


//                                    Task # 10
// var userInput = prompt("enter your string");
// var convertedUserInput = userInput.toUpperCase();
// document.write("User input : " + userInput + "<br/>" + "Upper Case : " + convertedUserInput)


//                                    Task # 11
// var userInput = prompt("enter your string").toLowerCase();
// var convertedUserInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
// document.write("User input : " + userInput + "<br/>" + "Title Case : " + convertedUserInput)


//                                    Task # 12
// var num = +prompt("enter a decimal value");
// var convertedNum = num.toString().replace(/\./g , "");
// document.write("Number : " + num + "<br/>" + "Result : " + convertedNum)


//                                    Task # 13
var userName = prompt("enter your name");
for (var i = 0; i <= userName.length; i++) {
    if (userName === "@".charCodeAt(0) || "!".charCodeAt(0) || ".".charCodeAt(0) || ",".charCodeAt(0)) {
        alert("Please enter a valid username.")
    }
    break;
}
