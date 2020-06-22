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


//                                    Task # 13(pending)
// var userName = prompt("enter your name");
// for (var i = 0; i < userName.length; i++) {
//     if (userName.charCodeAt(i) === 33 || userName.charCodeAt(i) === 64 || userName.charCodeAt(i) === 44 || userName.charCodeAt(i) === 46) {
//         alert("Please enter a valid username.")
//         break;
//     }
// }

// var userName = prompt("enter your name");
// var validateCodes = [33, 64, 44, 46]
// for (var i = 0; i < userName.length; i++) {
//     var charCode = userName.charCodeAt(i)
//     if (validateCodes.includes(charCode)) {
//         alert("Please enter a valid username.")
//         break;
//     }
// }

//                                    Task # 14(pending)
// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var searchItems = bakeryItems.indexOf(userInput);
// userInput = userInput.toLowerCase();
// for (var i = 0; i <= bakeryItems.length; i++) {
//     if (userInput === bakeryItems) {
//         alert(bakeryItems + " is available at index " + searchItems + "in our bakery.");
//     }
//     break;
// }


//                                    Task # 15(pending)
// var userPassword = prompt("enter a password");
// if (userPassword === )


//                                    Task # 16(pending)
// var university = "University of Karachi";
// var convertedString = university.split(0, university.length);
// for (var i = 0; i < convertedString.length; i++) {
//     console.log(i + "\n ")
// }

//                                    Task # 17(pending)
// var userInput = prompt("enter any string");
// var lastUserInput = userInput.length-1;
// console.log(lastUserInput)


//                                    Task # 18
// var string = prompt("enter a paragraph or sentence");
// var tracker = prompt("which word do you want to count in the text ?")
// var count = string.split(tracker).length ;
// document.write("Text : " + string + "<br/>" + "There are " + count + " occurence(s) of the word " + tracker)



//                             *** Chapter # 26-30 ***
//                                  MATH METHODS
//                                    Task # 1
// var num = prompt("enter a positive number");
// var roundedNum = Math.round(num);
// var floorNum = Math.floor(num);
// var ceilNum = Math.ceil(num);
// document.write("Number : " + num + "<br/>"
//     + "Round Off Value : " + roundedNum + "<br/>"
//     + "Floor Value : " + floorNum + "<br/>"
//     + "Ceil Value : " + ceilNum)


//                                    Task # 2
// var num = prompt("enter a negative floating number");
// var roundedNum = Math.round(num);
// var floorNum = Math.floor(num);
// var ceilNum = Math.ceil(num);
// document.write("Number : " + num + "<br/>"
//     + "Round Off Value : " + roundedNum + "<br/>"
//     + "Floor Value : " + floorNum + "<br/>"
//     + "Ceil Value : " + ceilNum)


//                                    Task # 3
// var userValue = prompt("enter a number");
// var absNum = Math.abs(userValue);
// document.write("The absolute value of " + userValue + " is " + absNum)


//                                    Task # 4
// var randomNum = (Math.random() * 6).toFixed(0);
// document.write("Random Dice Value : " + randomNum)


//                                    Task # 5


//                                    Task # 6
// var randomNum = (Math.random() * 100).toFixed(0);
// document.write("Random number between 1 and 100 = " + randomNum)


//                                    Task # 7
// var weight = parseFloat(prompt("enter your weight in kilograms"));
// document.write("The weight of user is " + weight + " kilograms.")


//                                    Task # 8
// var secretNum = (Math.random() * (1, 10)).toFixed(0);
// var num = +prompt("enter a number between 1 and 10");
// if (num === secretNum.charCodeAt()) {
//     alert("Congratulations! " + "<br/>" + "You guessed it right.")
// }
// else {
//     alert("Try Again!")
// }



//                             *** Chapter # 31-34 ***
//                                  DATE METHODS
//                                    Task # 1
