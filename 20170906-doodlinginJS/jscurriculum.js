/*
JavaScript Curriculum
Sources:
  -FreeCodeCamp
  -Traversy - JavaScript Course, Udemy
A2MA - 2017-09-06
Notes: search 'b5h-stub' for stubs
*/

// ##############################################################################################################
// ##############################################################################################################
// General > JavaScript Basics
// ##############################################################################################################
// ##############################################################################################################

//alert("بسم الله الرحمن الرحيم");

//Takes name and age

//alert("Hello world, from JS");
//var user1Name = prompt("Welcome, user. What is your first name?");
//alert("Hello " + user1Name);
//console.log(user1Name);
//
//var user2Name = prompt("What is your last name?");
//alert("Name recorded: " + user1Name + " " + user2Name);
//console.log(user2Name);
//
//var age = prompt("How old are you, " + user1Name + "? Don't worry, I'm not a stalker. Honest.");
//alert("User age recorded: " + age);
//console.log(age);
//
//alert("Welcome, " + user1Name + " " + user2Name + ". You are " + age + " years old. Congrats.");

//finds age (approximate--come back and find exact age)

//alert("Enter your birthdate to find out your approximate age in days: ");

// const para = document.querySelector('#player');
// para.addEventListener('click', updateName);
// var ageDays = document.querySelector("#age-days");
// ageDays.addEventListener('click', updateAgeDays);
// var ageDayButton = document.querySelector("#age-day-button");
// ageDayButton.addEventListener('click', calcAgeDays);
// var ageRaw;
// var ageCooked;

// function calcAgeDays() {
//     ageRaw = prompt("Enter your age in years to find your approximate age in days: ");
//     ageCooked = ageRaw * 365.25;

// }
// function updateAgeDays() {
//     ageDays.innerHTML = ageCooked;
// }


// function updateName() {
//    let name = prompt('Enter your name, player: ');
//    para.textContent = 'Player 1 is ' + name;
// }



// function createParagraph() {
//     let para = document.createElement('p');
//     para.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ad commodi possimus tempore. Repellat accusamus fuga debitis, molestias laborum porro saepe facere. Magni, tenetur. Incidunt sapiente cumque reprehenderit recusandae, quam labore ratione culpa, dolorum officiis accusantium aperiam ea debitis velit laborum voluptatibus quaerat blanditiis error pariatur, ullam quasi. Aspernatur error pariatur, nam nostrum eaque harum sunt porro voluptas suscipit dignissimos architecto voluptate? Ea eum ipsam possimus corporis aperiam quis ut ducimus quidem totam tempora cupiditate explicabo rerum repellat maxime nostrum, a, mollitia consectetur at quod velit sapiente accusantium! Odit cum fugit repudiandae reprehenderit quae, maxime doloremque numquam optio expedita voluptas nostrum repellat eos. Delectus, nesciunt quos! Nostrum dignissimos, dolorem quas architecto nobis incidunt dolor ab obcaecati similique fuga sequi ipsum.';
//     document.body.appendChild(para);
// }
// const buttons = document.querySelectorAll('button');

// for(let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', createParagraph);
// }


// let val;

// val = 5;

// console.log(typeof val);

// val = String(5);

// val = (5).toString();

// val = Number('5'); // 5

// val = Number(true); // gives 1
// val = Number(false); // gives 0
// val = Number(null); // also gives 0
// val = Number('Some string'); // gives NaN
// val = Number([1, 2, 3, 4, 5]); // gives NaN


// val = parseInt('100.30'); // returns 100
// val = parseFloat('100.33'); // returns 100.3
// val = val.toFixed(2); // to get 2 more spaces

// // type coercion - when JS engine auto converts one data type to another

// // Math Object
// Math.PI
// Math.E
// Math.round() // rounds up or down depending on decimal
// Math.ceil() // rounds up always
// Math.floor() // rounds down always
// Math.sqrt()
// Math.abs()
// Math.pow(2, 2);
// Math.min()
// Math.max()

// // randomNumber = Math.floor(Math.random() * 10 + 1);

// // console.log(randomNumber);


// // Strings

// let stringVal = 'some string';

// stringVal = stringVal.concat(' ', 'and some concatenated material');

// console.log(stringVal);

// val = stringVal.indexOf('s');
// console.log(val);
// val = stringVal.lastIndexOf('s');
// console.log(val);
// val = stringVal.charAt('4');
// console.log(val);
// val = stringVal.charAt(stringVal.length - 1);
// console.log(val);

// val = stringVal.substring(0, 20); // end is non-inclusive; if no 
// // end indicated goes to end of string
// console.log(val);

// val = stringVal.slice(0, 20);
// console.log(val);
// val = stringVal.slice(-10);
// console.log(val);

// val = 'tag1, tag2, tag3, tag4, tag5';
// val = val.split(', ');
// console.log(val);

// val = stringVal.replace('material', 'string');

// console.log(val);

// val = stringVal.includes('Humpty');
// console.log(val);

// // Template literals - introduced in ES6
// const name = 'Joe';
// const age = 30;
// const job = 'consigliere';
// const city = 'New York';
// let html;

// // without template strings (es5)
// html = '<ul><li>Name: ' + name + '</li><li>, etc.</li></ul>';

// document.body.querySelector('#js-pad').innerHTML = html;

// // with template literals
// html = `<ul>
//             <li>Name: ${name}</li>
//             <li>, etc.</li>
//         </ul>`

// document.body.querySelector('#js-pad').innerHTML = html;

// /* 
// Arrays
// */
// testArray = new Array();

// for (var i = 0; i < 10; i++) {
//   testArray[i] = i + 45;
// }

// console.log(testArray);

// // testArray.unshift() // - adds on to the front.
// // testArray.shift() // remove from the front
// // testArray.splice();
// // testArray.reverse();

// testArray.sort(function (x, y) {
//   return x - y;
// })

// console.log(testArray);

// // finding with specific criteria

// function over50(num) {
//   return num > 50;
// }


// val = testArray.find(over50);

// console.log(val);

// /* 
// OBJECT LITERAL
// */

// person = {
//   name: 'Harry',
//   age: 11,
//   address: {
//     city: 'Little Whinging',
//     state: 'Surrey'
//   },
//   getBirthYear: function () {
//     return 2018 - this.age;
//   }
// }

// /* 
// Dates and Times
// */

// let someDate = new Date('10 12 1999 12:23:15');
// console.log(someDate);

// someDate = new Date('October 12 1999 12:23:15');
// console.log(someDate);

// someDate = new Date('10/12/1999 12:23:15');
// console.log(someDate);

// let someDate2 = new Date();
// console.log(someDate2);

// val = someDate2.getMonth(); // starts off at 0, so each month is one less
// console.log(val);

// someDate.getTime(); // gets the time since a set date


// ##############################################################################################################
// ##############################################################################################################
// FreeCodeCamp > JavaScript Algorithms and Data Structures Certification
// ##############################################################################################################
// ##############################################################################################################

// ##############################################################################################

// Basic JavaScript

// ##############################################################################################

// #############################################################################
// Loops
// #############################################################################

// // While loops
// console.log("Print all Numbers between -10 and 19");

// var counter = -10;

// while(counter < 20){
//     console.log(counter);
//     counter++;
// }

// console.log("Print all even numbers between 10 and 40");
// var counter = 10;

// while(counter < 40){
//     if(counter % 2 ===0){
//         console.log(counter);
//     }
//     counter++;
// }

// console.log("Print all odd numbers between 300 and 333");
// var counter = 300;

// while(counter < 333){
//     if(counter % 2 !== 0){
//         console.log(counter);
//     }
//     counter++;
// }

// console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
// var counter = 5;

// while(counter < 50){
//     if(counter % 5 === 0 && counter % 3 === 0){
//         console.log(counter);
//     }
//     counter++;
// }

// // For loops
// console.log("Print all Numbers between -10 and 19");
// function printNum(){
//     for(var i = -10; i < 20; i++){
// 	console.log(i);
//     }
// };
// console.log("Print all even numbers between 10 and 40");

// function printEven(){
//   for(var i = 10; i < 40; i++){
//       if(i % 2 === 0){
//           console.log(i);
//       }
//   }
// };

// console.log("Print all odd numbers between 300 and 333");
// function printOdd(){
//   for(var i = 300; i < 333; i++){
//       if(i % 2 !== 0){
//           console.log(i);
//       }
//   }
// };

// console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
// function printOddFew(){
//   for(var i = 5; i < 50; i++){
//       if(i % 5 === 0 && i % 3 === 0){
//           console.log(i);
//       }
//   }
// };

// Basic JavaScript: Profile Lookup
//Setup
// var contacts = [
//   {
//     "firstName": "Akira",
//     "lastName": "Laine",
//     "number": "0543236543",
//     "likes": ["Pizza", "Coding", "Brownie Points"]
//   },
//   {
//     "firstName": "Harry",
//     "lastName": "Potter",
//     "number": "0994372684",
//     "likes": ["Hogwarts", "Magic", "Hagrid"]
//   },
//   {
//     "firstName": "Sherlock",
//     "lastName": "Holmes",
//     "number": "0487345643",
//     "likes": ["Intriguing Cases", "Violin"]
//   },
//   {
//     "firstName": "Kristian",
//     "lastName": "Vos",
//     "number": "unknown",
//     "likes": ["JavaScript", "Gaming", "Foxes"]
//   }
// ];


// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName == name) {
//       if (contacts[i].hasOwnProperty(prop)) {
//         return contacts[i][prop];
//       } else {
//         return "No such property";
//       }

//     }
//   }
//   return "No such contact";
//   // Only change code above this line
// }

// // Change these values to test your function
// console.log(lookUpProfile("Sherlock", "likes"));
// console.log(lookUpProfile("Kristian", "lastName"));
// console.log(lookUpProfile("Harry", "likes"));
// console.log(lookUpProfile("Bob", "number"));
// console.log(lookUpProfile("Bob", "potato"));
// console.log(lookUpProfile("Akira", "address"));


// #############################################################################
//FACTORIALIZE
// #############################################################################

// console.log("Houston, we have a connection.");

// function factorialize(num) {
//   if (num > 0) {
//     var factorialization = num;
//     for (var i = 1; i < num; i++) {
//       factorialization *= (num - i);
//     }
//     return factorialization;
//   }
//   return 1;
// }

// //var num = prompt("Enter a number to be factorialized: ");
// //var numfactorial = factorialize(num);
// //alert("The factorial of " + num + " = " + numfactorial);

// #############################################################################
//PALINDROME
// #############################################################################

// // function palindromeTest(str){
// //   str = str.replace(/[\W_]/g, '');
// // }

// function palindromeOne(str) {
//   str = str.replace(/[\W_]/g, ''); //was not assigning string with the replaced regex to anything
//   console.log(str);
//   str = str.toLowerCase();
//   console.log(str);
//   var strreversed = str.split('').reverse().join('');
//   console.log(strreversed);
//   if (str === strreversed) {
//     return true;
//   }

//   return false;
// }

// // console.log(palindromeOne("eye"));
// // console.log(palindromeOne("race car"));
// // console.log(palindromeOne("_eye"));

// //this version of the palindromeChecker is more efficient, since it
// //compares first letter by last letter--that means it only has to check half--and
// //detects a failure as early as possible, after which it reports the failure
// //without needlessly checking subsequent letters
// function palindromeTwo(str) {
//   str = str.toLowerCase().replace(/[\W_]/g, '');
//   console.log(str);
//   for (var i = 0, len = str.length - 1; i < len / 2; i++) {
//     if (str[i] !== str[len - i]) {
//       return false;
//     }

//     return true;
//   }
// }

// // console.log(palindromeTwo("eye"));
// // console.log(palindromeTwo("race car"));
// // console.log(palindromeTwo("_eye"));

// //this version of the palindrome check is the shortest
// function palindromeThree(str) {
//   return str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('') ===
//     str.replace(/[\W_]/g, '').toLowerCase();
// }

// // console.log(palindromeThree("eye"));
// // console.log(palindromeThree("race car"));
// // console.log(palindromeThree("_eye"));
// // console.log(palindromeThree("not a palindrome"));

// #############################################################################
// Find WORD LENGTH, Return length of longest word
// #############################################################################

// // // First Try
// // function findLongestWord(str) {
// //   strarray = str.split(" ");
// //   var longest = '';
// //
// //   for(var i = 0; i < strarray.length-1; i++){
// //     if(strarray[i].length > strarray[i+1].length){
// //       if(longest < strarray[i].length){
// //         longest = strarray[i];
// //       }
// //     }else{
// //       if(longest < strarray[i+1].length){
// //         longest = strarray[i+1];
// //       }
// //     }
// //   }
// //   console.log(longest);
// //   return longest.length;
// // }

// // Second Try - works BUT:
// // I forgot to compare the LENGTH of longest to the length of the array element; careless mistake
// // unnecessary length and convolutedness.
// function findLongestWord(str) {
//   strarray = str.split(" ");
//   var longest = '';
//   // console.log(strarray.length);
//   // console.log(strarray[9]);
//   for (var i = 0; i < strarray.length - 1; i++) {
//     //using length-1 with i < is made neccessary only by the convoluted logic within the function.
//     //and only works because of "i+1" below
//     //var i = 0; i < strarray would work as well if i+1 hadn't been used.
//     // console.log(strarray[i]); //the last word would never be printed because i ends at strarray[length-1]
//     //the comparison would still work though, because i+1 ensures the scan is to the end.
//     if (strarray[i].length > strarray[i + 1].length) {
//       if (longest.length < strarray[i].length) {
//         longest = strarray[i];
//       }
//     } else {
//       if (longest.length < strarray[i + 1].length) {
//         longest = strarray[i + 1];
//       }
//     }
//   }
//   console.log(longest);
//   return longest.length;
// }

// // console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// // console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); //should return 6.
// // console.log(findLongestWord("May the force be with you")); //should return 5.
// // console.log(findLongestWord("Google do a barrel roll")); //should return 6.
// // console.log(findLongestWord("What is the average airspeed velocity of an unladen swallow")); //should return 8.
// // console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology")); //should return 19.


// // for just finding the maximum length, without returning the longest word:
// function longestWord(str) {
//   var words = str.split(" ");
//   var maxlength = 0;

//   for (var i = 0; i < words.length; i++) {
//     console.log(words[i]);
//     if (words[i].length > maxlength) {
//       maxlength = words[i].length;
//     }
//   }

//   return maxlength;
// }
// // console.log(longestWord("The quick brown fox jumped over the lazy dog"));

// // Another solution, using the Array object's reduce() method:

// function longestWordReduce(str) {
//   return str.split(" ")
//     .reduce(function (x, y) {
//       return Math.max(x, y.length)
//     }, [0]);
// }
// // see: https://forum.freecodecamp.org/t/javascript-array-prototype-reduce/14299
// // AND: https://forum.freecodecamp.org/t/using-array-prototype-reduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays/14687

// // console.log(longestWordReduce("What if we try a super-long word such as otorhinolaryngology"));

// // Advanced solution, seems most efficient because it compares a shorter
// // array each time, using splice to get rid of the parts already compared
// // and found to be shorter

// function findLongestRecursion(str) {
//   // splits each time because of the recursion
//   str = str.split(" ");

//   // if the array resulting from split is just one element long
//   // then that singular element is the longest
//   if (str.length == 1) {
//     return str[0].length;
//   }

//   //compares first two elements; if first is greater, discard second
//   //and pass back to function as argument.
//   if (str[0].length >= str[1].length) {
//     str.splice(1, 1);
//     return findLongestRecursion(str.join(" "));
//   }
//   // if second is greater, cut away the second and subsequent elements
//   // away from the first and pass back to function as argument
//   if (str[0].length <= str[1].length) {
//     return findLongestRecursion(str.slice(1, str.length).join(" "));
//   }
// }

// #############################################################################
//TitleCase A Sentence:
// #############################################################################

// //First Try:
// // function titleCase(str) {
// //   var words = str.split(" ");
// //
// //   for(var i = 0; i < words.length; i++){
// //     var letters = words[i].split('');
// //     letters[0].toUpperCase();
// //     words[i] = letters;
// //   }
// //   str = words.join(" ");
// //   return str;
// // }

// //Second Try:
// // function titleCase(str) {
// //   var words = str.split(" ");
// //
// //   for(var i = 0; i < words.length; i++){
// //     var letters = words[i].split('');
// //     letters[0].toUpperCase();
// //     words[i] = letters.join('');
// //   }
// //   str = words.join(" ");
// //   return str;
// // }

// //Third Try:

// // function titleCase(str) {
// //   var words = str.split(" ");
// //
// //   for(var i = 0; i < words.length; i++){
// //     var letters = words[i].split('');
// //     letters[0].to_s.toUpperCase();
// //     words[i] = letters.join('');
// //   }
// //   str = words.join(" ");
// //   return str;
// // }

// //FourthTry:
// // function titleCase(str) {
// //   var words = str.split(" ");
// //
// //   for(var i = 0; i < words.length; i++){
// //     var letters = words[i].split('');
// //     var firstLetter = letters[0];
// //     letters[0] = firstLetter.toUpperCase();
// //     words[i] = letters.join('');
// //   }
// //   str = words.join(" ");
// //   return str;
// // }

// // My Solution:
// function titleCase(str) {
//   var words = str.toLowerCase().split(" ");

//   for (var i = 0; i < words.length; i++) {
//     var letters = words[i].split('');
//     var firstLetter = letters[0];
//     letters[0] = firstLetter.toUpperCase();
//     words[i] = letters.join('');
//   }
//   str = words.join(" ");
//   return str;
// }

// titleCase("i'm a little tea pot");

// //Review attempt:
// //function titleCase(str) {
// //  var words = str.toLowerCase().split(" ");
// //  for(var i = 0; i < words.length; i++){
// //    var eachWord = words[i];
// //    var lttrs = eachWord.split('');
// //    lttrs[0] = lttrs[0].toUpperCase();
// //    words[i] = lttrs.join('');
// //  }
// //  return words.join(" ");
// //}

//2020 review
// Basic Algorithm Scripting: Title Case a Sentence
// function titleCase(str) {
//   let strArr = str.toLowerCase().split(' ');
//   let count = 0;
//   strArr.forEach(function (w) {
//     let wArr = w.split('');
//     wArr[0] = wArr[0].toUpperCase();
//     strArr[count] = wArr.join('');
//     count++;
//   });
//   return strArr.join(' ');
// }
// console.log(titleCase("I'm a little tea pot"));

// ERROR: TypeError: 0 is read-only: caused by trying to overwrite part of string with bracket notation

// //2017-09-30
// //FCCamp "Basic" solution for TitleCase problem:
// String.prototype.replaceAt = function (index, character) {
//   return this.substr(0, index) + character + this.substr(index + character.length);
// };


// function titleCase(str) {
//   var newTitle = str.split(' ');
//   var updatedTitle = [];
//   for (var st in newTitle) {
//     updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
//   }
//   return updatedTitle.join(' ');
// }


// //Intermediate Solution on FCCamp
// function titleCase(str) {
//   var convertToArray = str.toLowerCase().split(" ");
//   var result = convertToArray.map(function (val) {
//     return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//   });
//   return result.join(" ");
// }

// titleCase("I'm a little tea pot");

// //Advanced solution:
// function titleCase(str) {
//   return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
// }

// //the regex searches from the beginning of the string (^) for a non-whitespace character (\S) that comes only after a whitespace (\s), and the search is global.

// #############################################################################
//Retrieve Largest Numbers from two dimensional Array
// #############################################################################

// //first Try
// function largestOfFour(arr) {
//   var maxNumArr = [];
//   var maxNum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] > maxNum) {
//         maxNum = arr[i][j];
//       }
//     }
//     maxNumArr.push(maxNum);
//     maxNum = 0; //this shouldn't necessarily be set to zero here; could be reset to arr[i][0] at each round above
//   }
//   return maxNumArr;
// }

// //Second try
// function largestOfFour(arr) {
//   var maxNumArr = [];
//   var maxNum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//       maxNum = arr[i][0];
//       if (arr[i][j] > maxNum) {
//         maxNum = arr[i][j];
//       }
//     }
//     maxNumArr.push(maxNum);
//   }
//   return maxNumArr;
// }

// #############################################################################
//CONFIRM ENDING
// #############################################################################
// //My Solution
// function confirmEnding(str, target) {
//   var x = target.length;
//   if (str.substr(str.length - x, x) === target) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(confirmEnding("Bastian", "n"));

// //https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-confirm-the-ending/16006
// //[See confirmEnding solutions at link above]

// #############################################################################
//REPEAT STRING
// #############################################################################

// function repeatStringNumTimes(str, num) {
//   var originalStr = str;
//   var count = num - 1;
//   if (num > 0) {
//     while (count > 0) {
//       str += originalStr;
//       count--;
//     }
//   } else {
//     str = "";
//   }
//   return str;
// }

// repeatStringNumTimes("abc", 3);


// #############################################################################
//TRUNCATE STRING
// Basic Algorithm Scripting: Truncate a String
// #############################################################################

// //A2MA - first succesful effort
// function truncateString(str, num) {
//   var truncStr = str;
//   if (str.length > num) {
//     if (num > 3) {
//       truncStr = str.slice(0, str.length - (str.length - (num - 3))) +
//         "...";
//     } else {
//       truncStr = str.slice(0, str.length - (str.length - num)) +
//         "...";
//     }
//   }
//   return truncStr;
// }

// truncateString("A-tisket a-tasket A green and yellow basket", 11);

// function truncateString(str, num) {
//   // Clear out that junk in your trunk
//   if (str.length <= num) {
//     return str;
//   } else {
//     return str = str.substring(0, num) + "...";
//   }
// }
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//FCCamp solutions @ https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-truncate-a-string/16089

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX go back and check intermediate and advanced largestNumber solutions later
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 2017-09-26: REVIEW solutions on freecodecamp; also go back and look at last palindrome solution

// #############################################################################
//SPLIT ARRAY INTO 2D ARRAY
//2017-12-07
// #############################################################################

//attempt 0.1
//function chunkArrayInGroups(arr, chunkSize){
//    arrSliced = [];
//    for(var i = 0; i < arr.length; i + chunkSize){
//        arrSliced.push(arr.slice(i, chunkSize));
//    }
//
//    return arrSliced;
//}

//FCC says: potential infinite loop. I had some confusion with the loop, with i, and with the start and end of the slice function.

//Final:
function chunkArrayInGroups(arr, chunkSize) {
  arr2 = [];
  var start = 0;
  var end = 0;
  for (var i = 0; i < arr.length; i += chunkSize) {
    end += chunkSize;
    miniArr = arr.slice(start, end);
    arr2.push(miniArr);
    start += chunkSize;
  }

  return arr2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);


// #############################################################################
//COMPARE FIRST TWO STRINGS IN AN ARRAY
//2018-01-01
// #############################################################################

function mutation(arr) {
  var match = true;
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase();

  for (var i = 0; i < second.length; i++) {
    var result = first.indexOf(second[i]);
    if (result != -1) {
      match = true;
    } else {
      match = false;
      break;
    }
  }
  return match;
}

mutation(["hello", "hey"]);

// #############################################################################
// Basic Algorithm Scripting: Falsy Bouncer
//Remove all Falsy Values from Array
// #############################################################################

//ATTEMPT 1
//function bouncer(arr) {
//  // Don't show a false ID to this bouncer.
//    var filtered = arr.filter(new Boolean(element) != false);
//    return arr;
//}

// attempt 2020-02-02
function bouncer1(arr) {
  // Don't show a false ID to this bouncer.
  let tracker = arr.length;
  for (let i = 0; i < tracker; i++) {
    if (!arr[i] == true) {
      arr.splice(i, 1);
      i -= 1;
      tracker -= 1;
    }
  }
  return arr;
}
console.log(bouncer2([7, "ate", "", false, 9]));

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var filtered = arr.filter(Boolean);
  return filtered;
}

// OR 

function bouncer3(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);
}

//OR

function bouncer4(arr) {
  // Don't show a false ID to this bouncer.
  var filtered = arr.filter(function (v) {
    return !!v;
  });
  return filtered;
}

// or

function bouncer5(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function (v) {
    return !!v;
  });
}

//bouncer([7, "ate", "", false, 9]);
//bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9];
//bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
//bouncer([false, null, 0, NaN, undefined, ""]) should return [].
//bouncer([1, null, NaN, 2, undefined]) should return [1, 2].


// #############################################################################
//Filter certain Values from Array
// #############################################################################

function destroyer(arr) {
  // Remove all the values
  var rawArr = arguments[0];
  console.log(arguments);
  //   console.log(arg1);
  //   console.log(arg2);
  var filtArr = rawArr;

  for (var i = 1; i < arguments.length; i++) {
    filtArr = filtArr.filter(element => element != arguments[i]);
  }

  console.log(filtArr);
  console.log(rawArr);
  return filtArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);



// #############################################################################
//Find Place of Value in Array
// #############################################################################
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.

  var placement;

  arr.sort(function (a, b) {
    return a - b;
  });


  for (var i = 0; i < arr.length; i++) {
    if (arr[i] - num >= 0) {
      placement = i;
      break;
    }
    placement = i + 1;
  }

  return placement;
}

getIndexToIns([40, 60], 50);


// #############################################################################
//Binary Search Implementation in JavaScript
// #############################################################################
/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */

/* var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess = -1;

    while(max >= min){
        guess = Math.floor((min + max) / 2);
        println(max);
        println(min);
        // println(guess);
        // println(array[guess]);
        if(array[guess] === targetValue){
            min = guess + 1;
        }else if(array[guess] < targetValue){
            min = guess + 1;
        }else{
            max = guess - 1;
        }
    }

	return guess;
}; */

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

// var result = doSearch(primes, 73);
// println("Found prime at index " + result);

// Program.assertEqual(doSearch(primes, 73), 20);


/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */

var doSearch = function (array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  var guess = -1;

  while (max >= min) {
    guess = Math.floor((min + max) / 2);
    // println(max);
    // println(min);
    // println(guess);
    // println(array[guess]);
    if (array[guess] === targetValue) {
      return guess;
    } else if (array[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

// var result = doSearch(primes, 73);
// println("Found prime at index " + result);

Program.assertEqual(doSearch(primes, 73), 20);


// #############################################################################
//Deciphering a message encoded by the Caesar cipher
// #############################################################################

function rot13(str) { // LBH QVQ VG!
  var original = [];
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 65 && str.charCodeAt(i) < 90) {
      //     var test = "Z";
      //     console.log(test.charCodeAt(0));
      var code = str.charCodeAt(i) - 13;
      original.push(String.fromCharCode(code));
    }
  }
  str2 = original.toString();
  return str2;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

FINAL:
function rot13(str) { // LBH QVQ VG!
  var original = [];
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      //     var test = "Z";
      //     console.log(test.charCodeAt(0));
      var code = str.charCodeAt(i) - 13;
      if (code < 65) {
        var diff = 65 - code;
        code = 91 - diff;
      }
      original.push(String.fromCharCode(code));
    } else {
      original.push(str[i]);
    }
  }
  str2 = original.join("");
  return str2;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC.");
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");


// #############################################################################
//REVIEW: isEven, factorial, replace characters with regex 2018-06-26, CSteele Web Dev Bootcamp, Udemy
// #############################################################################

// function isEven(num) {
//   if (num % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isEvenShorter(num) {
//   return num % 2 == 0;
// }

// //recursive factorialization
// function factorialRecursive(num) {
//   if (num > 1) {
//     return num * (factorialRecursive(num - 1));
//   } else if (num = 1) {
//     return 1;
//   } else {
//     return "Error";
//   }
// }

// function factorial(num) {
//   var result = 1;
//   for (var i = 2; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }


// function kebabToSnake(str) {
//   return str.replace(/-/g, '_');
// }

// #############################################################################
//Basic JS Objects: record collection, 2019-01-08, FreeCodeCamp
// #############################################################################

// // Setup
// var collection = {
//   "2548": {
//     "album": "Slippery When Wet",
//     "artist": "Bon Jovi",
//     "tracks": [
//       "Let It Rock",
//       "You Give Love a Bad Name"
//     ]
//   },
//   "2468": {
//     "album": "1999",
//     "artist": "Prince",
//     "tracks": [
//       "1999",
//       "Little Red Corvette"
//     ]
//   },
//   "1245": {
//     "artist": "Robert Palmer",
//     "tracks": []
//   },
//   "5439": {
//     "album": "ABBA Gold"
//   }
// };
// // Keep a copy of the collection for tests
// var collectionCopy = JSON.parse(JSON.stringify(collection));

// // Only change code below this line
// function updateRecords(id, prop, value) {
//   if (prop == 'tracks' && value != '') {
//     if (!collection[id].hasOwnProperty(prop)) {
//       collection[id][prop] = [];
//       collection[id][prop].push(value);
//     } else {
//       collection[id][prop].push(value);
//     }
//   } else if (!collection.hasOwnProperty(prop) && value != '') {
//     collection[id][prop] = value;
//   } if (value == '') {
//     delete collection[id][prop];
//     console.log(collection[id]);
//   }
//   return collection;
// }

// // OR

// function updateRecords(id, prop, value) {
//   if (value == '') {
//     delete collection[id][prop];
//   } else if (prop == 'tracks') {
//     if (!collection[id].hasOwnProperty(prop)) {
//       collection[id][prop] = [];
//     }
//     collection[id][prop].push(value);
//   } else {
//     collection[id][prop] = value;
//   }
//   return collection;
// }

// // Alter values below to test your code
// updateRecords(5439, "artist", "ABBA");
// updateRecords(2548, "artist", "");


/* #############################################################################
Do...While, 2019-01-09, FreeCodeCamp
Notes: b5h-stub
#############################################################################*/



/* #############################################################################
Basic JavaScript: Replace Loops using Recursion, 2019-10-30, FreeCodeCamp
Notes: 
#############################################################################*/
function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return arr[0];
  } else {
    return arr[n] + sum(arr, n - 1)
  }
  // Only change code above this line
}

// see freecodecamp correct answer not working 2019 - 10 - 22 135059.jpg

/* #############################################################################
parseInt, 2019-01-10, FreeCodeCamp
Notes: parseInt takes a string, parses it, and returns an integer. parseInt also has the radix argument,
which tells you the base of the number in the string. The radix can range from 2 to 26; if 2, it is binary, for example,
and the string will be read as binary and then returned as a (base 10) number.
#############################################################################*/
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");


/* #############################################################################
Ternary (conditional) Operator, 2019-01-10, FreeCodeCamp
Notes: short version of if else. Syntax: condition ? <statement if true>: <statement if false>;.
Chaining together ternary operators can achieve the effect of if-else if-else:
(condition if) ? <statement> : (condition else if) ? <statement> : <statement for else>;
#############################################################################*/


// regular ternary example
function checkEqual(a, b) {
  return a == b ? true : false;
}

checkEqual(1, 2);

// chained ternary example
function checkSign(num) {
  return (num > 0) ? "positive" : (num == 0) ? "zero" : "negative";
}

checkSign(10);

/* #############################################################################
If statements, comparison, 2019-01-10, FreeCodeCamp
Notes:
#############################################################################*/

// smart testing for undefined/defined variable:
if (typeof id !== 'undefined') {
  console.log(`The id is ${id}`);
} else {
  console.log('No id. ')
}

/* #############################################################################
Use recursion to create a countdown, 2019-11 or thereafter in early 2020, FreeCodeCamp
Notes: 
#############################################################################*/

// Basic JavaScript: Use Recursion to Create a Countdown
//Only change code below this line
function countdown(myArray, n){
  if(n == 1) {
    return myArray.push(1);
  } else if(n>1) {
    myArray.push(n);
    countdown(myArray, n-1);
    return myArray;
  }
}
console.log(countdown([], 10));

OR

// Basic JavaScript: Use Recursion to Create a Countdown
//Only change code below this line
function countdown(myArray, n){
  if(n == 1) {
    return myArray.push(1);
  } else if(n>1) {
    myArray.push(n);
    return countdown(myArray, n-1);;
  }
}
console.log(countdown([], 10));

/* #############################################################################
Basic JavaScript: Use Recursion to Create a Range of Numbers, 2019-11 or thereafter in early 2020, FreeCodeCamp
Notes: 
#############################################################################*/

// Basic JavaScript: Use Recursion to Create a Range of Numbers:

function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum) {
    return [startNum];
  } else {
    let arrNums = rangeOfNumbers(startNum, endNum - 1)
    arrNums.push(endNum);
    return arrNums;
  }
}

// ES6

// ##############################################################################################

/* #############################################################################
ES6 Write Higher Order Arrow Functions, 2019-01-22, FreeCodeCamp
Notes:
#############################################################################*/
// // const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
// const squareList = (arr) => {
//   "use strict";
//   // change code below this line
//   const squaredIntegers = arr.filter((num) => num > 0 && num %1 == 0).map((num)=> num**2);
//   // change code above this line
//   return squaredIntegers;
// };
// // test your code
// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);

// // OR
// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
// const squareList = (arr) => {
//   "use strict";
//   // change code below this line
//   const squaredIntegers = (arr.filter((num) => num > 0 && num % 1 === 0)).map((num) => Math.pow(num, 2));
//   // change code above this line
//   return squaredIntegers;
// };
// // test your code
// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);

/* #############################################################################
ES6 Example of setting default parameter, 2019-01-26, FreeCodeCamp
Notes:
#############################################################################*/

const increment = (function () {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6\

/* #############################################################################
ES6 Example of using rest operator to handle variable number of arguments held in an array 2019-01-26, FreeCodeCamp
Notes:
#############################################################################*/


// BEFORE
// const sum = (function() {
//   "use strict";
//   return function sum(x, y, z) {
//     const args = [ x, y, z ];
//     return args.reduce((a, b) => a + b, 0);
//   };
// })();
// console.log(sum(1, 2, 3)); // 6

// AFTER

const sum = (function () {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5));

/* #############################################################################
2019-01-29 - ES6 Example of using destructuring to swap two values, FreeCodeCamp
Notes:
#############################################################################*/

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a, b] = [b, a];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8

/* #############################################################################
2019-01-30 - ES6 Example of using destructuring to obtain part of an array, FreeCodeCamp
Notes:
#############################################################################*/

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a, b, ...arr] = source; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

/* #############################################################################
2019-02-01 - ES6 using destructuring to obtain part of an object, by passing it through or in-place. - FreeCodeCamp
Notes:
#############################################################################*/

/*
// passing through, then destructuring
const profileUpdate = (profileData) => {
  const {name, age, nationality, location } = profileData;
  // etc.
}
// destructuring in place
const profileUpdate = ({name, age, nationality, location }) => {
  // etc.
}
*/

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function () {
  "use strict"; // do not change this line

  // change code below this line
  return function half({ max, min }) {
    // use function argument destructuring
    return (max + min) / 2.0;
  };
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015


// // // Create strings with template literals
// // const result = {
// //   success: ["max-length", "no-amd", "prefer-arrow-functions"],
// //   failure: ["no-var", "var-on-top", "linebreak"],
// //   skipped: ["id-blacklist", "no-dup-keys"]
// // };

// function makeList(arr) {
//   "use strict";

//   // change code below this line
//   const resultDisplayArray = [`<li class="text-warning">${arr[0]}</li>`, `<li class="text-warning">${arr[1]}</li>`, `<li class="text-warning">${arr[2]}</li>`];
//   // change code above this line

//   return resultDisplayArray;
// }
// /**
//  * makeList(result.failure) should return:
//  * [ `<li class="text-warning">no-var</li>`,
//  *   `<li class="text-warning">var-on-top</li>`,
//  *   `<li class="text-warning">linebreak</li>` ]
//  **/
// const resultDisplayArray = makeList(result.failure);
// console.log(resultDisplayArray);

/* #############################################################################
Date:? - ES6: Use Destructuring Assignment to Extract Values from Objects - FreeCodeCamp
Notes:
#############################################################################*/
// ES6: Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
// change code below this line
const { today, tomorrow } = HIGH_TEMPERATURES;
// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;
// change code above this line
console.log(yesterday) // should be not defined
console.log(today); // should be 77
console.log(tomorrow); // should be 80


/* #############################################################################
2019-02-02 - ES6 concise object literal declaration - FreeCodeCamp
Notes:
#############################################################################*/

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name,
    age,
    gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

/* #############################################################################
2019-02-02 - ES6 removal of requirement for function keyword when defining function w/in object - FreeCodeCamp
Notes:
#############################################################################*/


// change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

/* #############################################################################
2019-02-03 - ES6 class syntax usage - FreeCodeCamp
Notes:
#############################################################################*/

// class Vegetable {
//   "use strict";
//   /* Alter code below this line */
//   constructor(name) {
//     this.name = name;
//   }
//   /* Alter code above this line */
// }

// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // => should be 'carrot'

// 2019-09-14 - in my second pass, the problem was phrased as follows:
// function makeClass() {
//   "use strict";
//   /* Alter code below this line */
//   class Vegetable {
//     constructor(name) {
//       this.name = name;
//     }
//   }
//   return Vegetable;
// }
// const Vegetable = makeClass();
// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // => should be 'carrot'

/* #############################################################################
2019-02-04 - ES6 getter and setter - FreeCodeCamp
Notes:
#############################################################################*/

// function makeClass() {
//   "use strict";
//   /* Alter code below this line */
//   class Thermostat {
//     constructor(fahrenheit) {
//       this._fahrenheit = fahrenheit;
//     }

//     get temperature() {
//       return (this._fahrenheit - 32) * 5 / 9;
//     }

//     set temperature(updatedTemp) {
//       this._fahrenheit = (updatedTemp * 9.0 / 5) + 32; 
        // don't think this makes sense, because the user would be using fahrenheit for getter and setter
        // implementation below better
//     }
//   }
//   /* Alter code above this line */
//   return Thermostat;
// }
// const Thermostat = makeClass();
// const thermos = new Thermostat(76); // setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in C
// console.log(temp);
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in C
// console.log(temp);

// function makeClass() {
//   "use strict";
//   /* Alter code below this line */
//   class Thermostat {
//     constructor(fahrenheit) {
//       this.fahrenheit = fahrenheit;
//     }

//     get celsius() {
//       return 5 / 9 * (this.fahrenheit - 32)
//     }

//     set celsius(changedFahrenheit) {
//       this.fahrenheit = changedFahrenheit;
//     }
//   }
//   /* Alter code above this line */
//   return Thermostat;
// }
// const Thermostat = makeClass();
// const thermos = new Thermostat(76); // setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in C
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in C

/* #############################################################################
2019-02-04 - ES6: Create a Module Script - FreeCodeCamp
Notes:
#############################################################################*/

// <!-- ES6: Create a Module Script -->
// <html>
//   <body>
//     <!-- add your code below -->
//     <script type="module" src="index.js"> </script>
//     <!-- add your code above -->
//   </body>
// </html>

/* #############################################################################
// ES6: Create a JavaScript Promise - FreeCodeCamp
Notes:
#############################################################################*/
// ES6: Create a JavaScript Promise
const makeServerRequest = new Promise((resolve, reject) => {
});


/* #############################################################################
// ES6: Complete a Promise with resolve and reject - FreeCodeCamp
Notes:
#############################################################################*/
// ES6: Complete a Promise with resolve and reject
// Make the promise handle success and failure. If responseFromServer is true, call the resolve method to successfully complete the promise. Pass resolve a string with the value We got the data. If responseFromServer is false, use the reject method instead and pass it the string: Data not received.
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

/* #############################################################################
// ES6: Handle a Fulfilled Promise with then - FreeCodeCamp
Notes:
#############################################################################*/
// ES6: Handle a Fulfilled Promise with then
// Add the then method to your promise. Use result as the parameter of its callback function and log result to the console.
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
}).then(result => {
  console.log(result);
});

/* #############################################################################
// ES6: Handle a Rejected Promise with catch - FreeCodeCamp
Notes:
#############################################################################*/
// ES6: Handle a Rejected Promise with catch
// Add the catch method to your promise. Use error as the parameter of its callback function and log error to the console.
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result => {
  console.log(result);
}).catch(error => {
  console.log(error);
});

// ##############################################################################################################

// Regular Expressions

// ##############################################################################################################


/* #############################################################################
2019-02-18 - RegEx example for range of alphabetical characters - FreeCodeCamp
Notes:
#############################################################################*/

// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/gi; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line

/* #############################################################################
2019-02-19 - RegEx example for range of alphabetical characters and numerals - FreeCodeCamp
Notes:
#############################################################################*/

// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line

/* #############################################################################
2019-02-19 - RegEx example of exclusion - FreeCodeCamp
Notes:
#############################################################################*/

// let quoteSample = "3 blind mice.";
// let myRegex = /[^\d^aeiou]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
// console.log(result);

/* #############################################################################
2019-02-19 - RegEx example of matching one or more consecutively recurring characters - FreeCodeCamp
Notes:
#############################################################################*/

// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g; // Change this line
// let result = difficultSpelling.match(myRegex);
// console.log(result);

/* #############################################################################
2019-02-19 - RegEx example of finding a character that occurs zero or more times, consecutively - FreeCodeCamp
Notes:
#############################################################################*/

// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// let chewieRegex = /Aa*/; // Change this line
// let result = chewieQuote.match(chewieRegex);
// console.log(result);

/* #############################################################################
2019-02-20 - RegEx example of finding lazy match - FreeCodeCamp
Notes:
#############################################################################*/

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; // Change this line
// let result = text.match(myRegex);
// console.log(result);

/* #############################################################################
2019-02-20 - RegEx exercise - FreeCodeCamp
Notes:
#############################################################################*/

// example crowd gathering
// let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

// let reCriminals = /C+/g; // Change this line

// let matchedCriminals = crowd.match(reCriminals);
// console.log(matchedCriminals);

/* #############################################################################
2019-02-20 - RegEx example: finding a term only at the beginning of a searched value - FreeCodeCamp
Notes:
#############################################################################*/

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

/* #############################################################################
2019-02-25 - RegEx exercise: username validation: 
1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
2) Username letters can be lowercase and uppercase.
3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.
- FreeCodeCamp
Notes:
#############################################################################*/

let username = "007";
let userCheck = /[a-z][a-z]+|[a-z]+[\d*$]/i; // Change this line
let result = userCheck.test(username);
let resultText = username.match(userCheck);
console.log(resultText);

/* #############################################################################
2019-02-26 - RegEx example: finding whitespace - FreeCodeCamp
Notes:
#############################################################################*/

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
console.log(result);

/* #############################################################################
2019-02-26 - RegEx example: finding inverse whitespace - FreeCodeCamp
Notes:
#############################################################################*/

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

/* #############################################################################
2019-02-26 - RegEx example: finding a range of occurrences of a target, finding a specific number - FreeCodeCamp
Notes:
#############################################################################*/

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

/* #############################################################################
2019-02-26 - RegEx example: marking a target item as optional with ? immediately succeeding. - FreeCodeCamp
Notes:
#############################################################################*/

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

/* #############################################################################
2019-02-26 - RegEx example: lookaheads, positive and negative; using positive lookaheads to check
password for length and for at least two numbers. - FreeCodeCamp
Notes:
#############################################################################*/
// A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

//     let password = "abc123";
//     let checkPass = /(?=\w{3,6})(?=\D*\d)/;
//     checkPass.test(password); // Returns true

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=[\D]*\d\d)/; // Change this line
let result = pwRegex.test(sampleWord);

/* #############################################################################
2019-02-26 - RegEx exercise: using capture groups with back-reference - FreeCodeCamp
Notes:
#############################################################################*/

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);
let resultText = repeatNum.match(reRegex);
console.log(resultText);

let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
console.log(repeatStr.match(repeatRegex));

/* #############################################################################
2019-02-26 - RegEx example: calling :replace() on a string - FreeCodeCamp
Notes:
#############################################################################*/

let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);

/* #############################################################################
2019-02-26 - RegEx exercise: calling :replace() on a string to strip whitespace - FreeCodeCamp
Notes: review later; why is g necessary?
#############################################################################*/

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line
console.log(result);

/* #############################################################################
Date:? - various additional regex exercises - FreeCodeCamp
Notes: review later; why is g necessary?
#############################################################################*/

// Regular Expressions: Check For Mixed Grouping of Characters
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) .*Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

// Regular Expressions: Use Capture Groups to Search and Replace
let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);

// Regular Expressions: Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /(\s+)(.+\S)(\s+)/; // Change this line
let result = hello.replace(wsRegex, '$2'); // Change this line
console.log(result);

// Their solution:
let wsRegex = /^\s+|\s$/g;
let result = hello.replace(wsRegex, '');

// ##############################################################################################################

// Debugging*
// *No notes or work taken.

// ##############################################################################################################

// use typeof to check type of variable


// ##############################################################################################################

// Basic Data Structures

// ##############################################################################################################

/* #############################################################################
2019-02-26 - using Array.reduce - FreeCodeCamp
Notes: 
#############################################################################*/

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

/* #############################################################################
2019-02-26 - creating a matrix - FreeCodeCamp
Notes: 
#############################################################################*/

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    row = [];
    console.log('i is' + i)
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
      console.log('j is' + j)
      console.log(row);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
    console.log(newArray);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

/* #############################################################################
2019-03-05 - :splice() - FreeCodeCamp
Notes: for the previous basic data structure sections (:push(), :unshift(), :pop(), :shift()) see
B5h-a
#############################################################################*/

// :splice(<starting index>, <number of elements to delete>, <optional: elements to replace removed elements>);
// num of elements to delete includes the first.
//:splice() returns a new array of the removed elements.

function htmlColorNames(arr) {
  // change code below this line
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
  // change code above this line
  return arr;
}

// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));


/* #############################################################################
2019-03-07 - :slice() - FreeCodeCamp
Notes: see B5h
#############################################################################*/

function forecast(arr) {
  // change code below this line
  let arrPortion = arr.slice(2, 4);
  return arrPortion;
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

/* #############################################################################
2019-03-07 - copy array with spread operator- FreeCodeCamp
Notes: see B5h
#############################################################################*/

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
    newArr.push([...arr]);
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));

/* #############################################################################
2019-04-13 - combine arrays with spread operator - FreeCodeCamp
Notes: see B5h
#############################################################################*/

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // change this line
  return sentence;
}

// // do not change code below this line
// console.log(spreadOut());


/* #############################################################################
2019-04-16 - find an element in an array with indexOf() - FreeCodeCamp
Notes: "Basic Data Structures: Check For The Presence of an Element With indexOf()"; see B5h
#############################################################################*/
function quickCheck(arr, elem) {
  // change code below this line
  if (arr.indexOf(elem) == -1) {
    return false;
  } else {
    return true;
  }
  // change code above this line
}

// // change code here to test different cases:
// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

/* #############################################################################
2019-04-19 - iteration with for loop - FreeCodeCamp
Notes: see B5h
#############################################################################*/

function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }

  }
  // change code above this line
  return newArr;
}

// // change code here to test different cases:
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
// console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
// console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2));
// console.log(filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter"));

//version from repeat (after losing progress):
function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i].length != 'undefined') {
      if (arr[i].indexOf(elem) == -1) {
        newArr.push(arr[i]);
      }
    }
  }
  // change code above this line
  return newArr;
}

// // change code here to test different cases:
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

/* #############################################################################
2019-04-21 - objects: nesting, access with dot and bracket notations - FreeCodeCamp
Notes: see B5h
#############################################################################*/

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// change code below this line
// userActivity.data.online = 45;
userActivity['data']['online'] = 45;
// change code above this line

console.log(userActivity);

/* #############################################################################
2019-10-25 - objects: add key value pairs - FreeCodeCamp
Notes: see B5h, "Add Key-Value Pairs to JavaScript Objects"
#############################################################################*/
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// change code below this line
foods.bananas = 13;
foods['grapes'] = 35;
foods['strawberries'] = 27; // in quotations because it can also take in a variable name that refers to the key name, so outside of a variable the name has to be a string
let kiwi = 'kiwi';
foods[kiwi] = 34;
// change code above this line

console.log(foods);


/* #############################################################################
2019-04-21 - objects: delete keyword - FreeCodeCamp
Notes: see B5h
#############################################################################*/


let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// change code above this line

console.log(foods);


/* #############################################################################
2019-04-21 - objects: check object for property - FreeCodeCamp
Notes: see B5h
#############################################################################*/

// Basic Data Structures: Check if an Object has a Property


// users.hasOwnProperty('Alan');
// 'Alan' in users;
// // both return true


// My Solution 

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

// function isEveryoneHere(obj) {
//   // change code below this line
//   if (users.hasOwnProperty('Alan') && users.hasOwnProperty('Jeff') && users.hasOwnProperty('Sarah')
//     && users.hasOwnProperty('Ryan')) {
//     return true;
//   }
//   return false;
//   // change code above this line
// }

console.log(isEveryoneHere(users));

// Better solution 

function isEveryoneHere(obj) {
  // change code below this line
  if (users.hasOwnProperty('Alan', 'Sarah', 'Ryan', 'Jeff')) {
    return true;
  }
  return false;
  // change code above this line
}

// best solution

function isEveryoneHere(obj) {
  // change code below this line
  return users.hasOwnProperty('Alan', 'Sarah', 'Ryan', 'Jeff') ? true : false;

  // if (users.hasOwnProperty('Alan', 'Sarah', 'Ryan', 'Jeff')) {
  //   return true;
  // }
  // return false;
  // change code above this line
}

/* #############################################################################
2019-04-25 - objects: iterate through keys with for...in - FreeCodeCamp
Notes: see B5h
#############################################################################*/

// FreeCodeCamp NOTE:
// Objects do not maintain an ordering to stored keys like arrays do; thus a keys position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.

function countOnline(obj) {
  // change code below this line
  let usersOnline = 0;
  for (let user in obj) {
    if (obj[user].online == true) {
      usersOnline += 1;
    };
  };
  return usersOnline;
  // change code above this line
}

console.log(countOnline(users));
console.log(users.Jeff.online === false);

// 2019-10-29 solution:
// Basic Data Structures: Loop through Object with for…in…

// function countOnline(usersObj) {
//   // change code below this line
//   let usersOnline = 0;
//   for (let user in usersObj) {
//     if (usersObj[user]['online'] == true) {
//       usersOnline += 1;
//     }
//   }
//   return usersOnline;
//   // change code above this line
// }

/* #############################################################################
2019-05-03 - generate array from object's keys; order is not specified. - FreeCodeCamp
Notes: see B5h
#############################################################################*/

function getArrayOfUsers(obj) {
  // change code below this line
  return Object.keys(obj);
  // change code above this line
}

/* #############################################################################
2019-10-29- Modify an array stored in an object - FreeCodeCamp
Notes: see B5h
#############################################################################*/
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends
  // change code above this line
}

console.log(addFriend(user, 'Pete'));

// ##############################################################################################################

// Basic Algorithm Scripting

// ##############################################################################################################

/* #############################################################################
2019-05-04 - basic algorithm scripting: Convert Celsius to Fahrenheit - FreeCodeCamp
Notes: shown on FCCamp as finished, but I can't find it in my notes or this file,
so I'll do it again.
#############################################################################*/

// function convertToF(celsius) {
//   let fahrenheit;
//   fahrenheit = celsius * (9 / 5) + 32;
//   return fahrenheit;
// }

// console.log(convertToF(30));
// console.log(convertToF(0));
// console.log(convertToF(-30));
// console.log(convertToF(-10));
// console.log(convertToF(20));

/* #############################################################################
2019-05-04 - basic algorithm scripting: Reverse a string - FreeCodeCamp
Notes: shown on FCCamp as finished, but I can't find it in my notes or this file,
so I'll do it again.
#############################################################################*/

// function reverseStringShort(str) {
//   return str.split('').reverse().join('');
// }

// reverseString("hello");

// // LONGER
// function reverseStringLong(str) {
//   var array = str.split('');
//   var reversedArray = array.reverse();
//   reversedString = reversedArray.join('');
//   return reversedString;
// }

// // OR
// function reverseString(str) {
//   let strArr = str.split('').reverse();
//   str = strArr.join('');
//   return str;
// }

// console.log(reverseString("hello"));

/* #############################################################################
2019-05-04 - basic algorithm scripting: Factorialize - FreeCodeCamp
Notes: shown on FCCamp as finished, but I can't find it in my notes or this file,
so I'll do it again.
#############################################################################*/


function factorialize(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

console.log(factorialize(5));


/* #############################################################################
2019-05-04 - basic algorithm scripting: finding the first number that satisfies a condition. - FreeCodeCamp
Notes: see B5h
#############################################################################*/



function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) == true) {
      num = arr[i];
      break;
    } else {
      num = undefined;
    }
  }
  console.log(num);
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

/* #############################################################################
Basic Algorithm Scripting: Finders Keepers - FreeCodeCamp
Notes: see B5h
#############################################################################*/

function findElement(arr, func) {
  let num;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) == true) {
      return arr[i];
    }
  }
  return num;
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));


/* #############################################################################
2019-05-04 - check if value is classified as boolean primitive - FreeCodeCamp
Notes: see B5h
#############################################################################*/

// function booWho(thing) {
//   let bool;
//   if (typeof thing == "boolean") {
//     bool = true;
//   } else {
//     bool = false;
//   }
//   return bool;
// }

// booWho(null);
// booWho(true);
// booWho([1, 2, 3]);
// booWho(1);

// review

// Basic Algorithm Scripting: Boo who
// function booWho(bool) {
//   // What is the new fad diet for ghost developers? The Boolean.
//   return typeof bool == 'boolean';
// }
// console.log(booWho(null));

/* #############################################################################
2019-05-04 - :slice() and :splice() - FreeCodeCamp
Notes: see B5h
#############################################################################*/

function frankenSplice(arr1, arr2, n) {
  let splicedArr = arr2.slice(0);
  for (let i = 0; i < arr1.length; i++) {
    splicedArr.splice(n + i, 0, arr1[i]);
  }
  return splicedArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2, 3], [4, 5], 1));

// 2019/2020 review:
// Basic Algorithm Scripting: Slice and Splice

function frankenSplice2(arr1, arr2, n) {
  let arrF = arr2;
  let arrRest = arrF.splice(n, arr2.length - n + 1)
  arrF = arrF.concat(arr1.concat(arrRest));
  return arrF;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

/* #############################################################################
Date: end of 2019 - various additions - FreeCodeCamp
Notes:
#############################################################################*/

// Basic Algorithm Scripting: Find the Longest Word in a String
function findLongestWordLength(str) {
  let sentenceArr = str.split(' ');
  let longest = '';
  for(let i = 0; i < sentenceArr.length; i++){
    // console.log(sentenceArr[i]);
    if(sentenceArr[i].length > longest.length){
      longest = sentenceArr[i];
    }
  }
  console.log(longest);
  return longest.length;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

//  Basic Algorithm Scripting: Return Largest Numbers in Arrays
function largestOfFour(arr) {
  // You can do this!
  let max = 0;
  let maxArr = []; 
  for(var i = 0; i < arr.length; i++){
    max = arr[i][0];
    for(var j = 0; j < arr[i].length; j++){
      if(arr[i][j] > max){
        max = arr[i][j];
      }
    }
    maxArr.push(max);
  }
  return maxArr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

// Basic Algorithm Scripting: Confirm the Ending
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str.substring(str.length-target.length) == target;
}
console.log(confirmEnding("Bastian", "n"));


// Basic Algorithm Scripting: Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  // repeat after me
  let multStr = '';
  if (num > 0) {
    while(num > 0) {
      multStr += str;
      num--;
    }
    return multStr;
  } else {
    return '';
  }
}
console.log(repeatStringNumTimes("abc", 3));






// Basic Algorithm Scripting: Where do I Belong
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  let place = arr.length;
  arr.sort(function (a, b) {
    if (a < b) {
      return -1;
    } else if (a > b ) {
      return 1;
    } else {
      return 0;
    }
  });
  for(let i = 0; i < arr.length; i++){
    if(arr[i] >= num){
      place = i;
      break;
    }
  }
  return place;
}
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([2, 5, 10], 15));


// Basic Algorithm Scripting: Mutations
function mutation(arr) {
  let includes = false;
  for(let i = 0; i < arr[1].length; i++){
    if(!arr[0].toLowerCase().includes(arr[1][i].toLowerCase())){
      includes = false;
      break;
    }else{
      includes = true;
    }
  }
  return includes;
}
console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["Mary", "Army"]));
// mutation(["hello", "Hello"]) should return true.
// mutation(["Mary", "Army"]) should return true.
// mutation(["Mary", "Aarmy"]) should return true.
// mutation(["Noel", "Ole"]) should return true.


// OR

// Basic Algorithm Scripting: Mutations
function mutation2(arr) {
  let includes = false;
  for(let i = 0; i < arr[1].length; i++){
    includes = arr[0].toLowerCase().includes(arr[1][i].toLowerCase());
    if(!includes){
      break;
    }
  }
  return includes;
}
console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["Mary", "Army"]));


// Basic Algorithm Scripting: Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  let start = 0;
  let newArr = [];
  for(let i = 0; i < arr.length; i+=size){
    newArr.push(arr.slice(start, start+size));
    start += size;
    console.log(start);
  }
  return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));


// ##############################################################################################################

// Object Oriented Programming

// ##############################################################################################################

/* #############################################################################
// // ES5 and ES2015 - constructors
#############################################################################*/

// const something = {
//   name: 'something',
//   age: 17289403
// }

// constructor

// function Person(name){
//     this.name = name;
//     console.log(this);
// }

// function Person(name, dob){
//     this.name = name;
//     this.birthday = new Date(dob);
//     this.calcAge = function(){
//         const diff = Date.now() - this.birthday.getTime(); // figuring out the difference between now and time at birth
//         console.log(diff);
//         const ageDate = new Date(diff); // calculating time between now and birth as if it were from 1970
//         console.log(ageDate);
//         console.log(ageDate.getUTCFullYear());
//         return Math.abs(ageDate.getUTCFullYear() - 1970); // converting to years, taking away 1970 to get the difference between now and birth in years.
//     };
// }

// const henry = new Person('Henry');
// const pavlov = new Person('Pavlov', '9-26-1849'); // M-DD-YYYY does not work in firefox, works in chrome 
// const marietta = new Person('Marietta', '9-26-2000');
// const brad = new Person('Brad', '9-10-1981');
// const martius = new Person('Martius', '1981-10-10'); // YYYY-MM-DD works in firefox and chrome

// // 'this' in the global scope refers to Window

// // JavaScript built in constructors

// // String
// const name1 = 'Publius'; // creates a string
// const name2 = new String('Publius'); // creates an object of the String class.
// console.log(typeof name1); // string
// console.log(typeof name2); // object - meaning CANNOT compare with === to a string, but can compare with == which checks just value not type

// // Number
// const num1 = 5; // creates a number
// const num2 = new Number(5); // creates an object of the Number class.

// // Boolean
// const bool1 = true; // creates a number
// const bool2 = new Boolean(true); // creates an object of the Number class.

// // Function
// const getSum1 = function(x, y) {
//     return x + y;
// }

// const getSum2 = new Function('x', 'y', 'return x + y');

// // Objects
// const yara = {name: 'Yara'};
// const yara2 = new Object({name: 'Yara'});
// console.log(yara2);

// // Arrays
// const arr1 = [1, 2, 3, 4, 5, 6];
// const arr2 = new Array(1, 2, 3,4,5, 6);
// console.log(arr2);

// // Regular expressions
// const re1 = /\w+/;
// const re2 = new RegExp ('\\w+'); // have to escape with the constructor

/* #############################################################################
// // ES5 and ES2015: Prototypes
#############################################################################*/
// // object literals from Object.prototype
// // creating an object from a constructor: Constructor.prototype
// // prototype chain: can go up from Constructor.prototype to Object.prototype

// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//     // this.calcAge = function(){
//     //     const diff = Date.now() - this.birthday.getTime(); // figuring out the difference 
//     //     const ageDate = new Date(diff); // calculating time between now and birth as if it were from 1970
//     //     return Math.abs(ageDate.getUTCFullYear() - 1970); // converting to years, taking away 1970 to get the difference between now and birth in years.
//     // };
// }

// // functions that would be repeated across different objects can be placed in
// // a prototype instead of the constructor:
// Person.prototype.calcAge = function () {
//     const diff = Date.now() - this.birthday.getTime(); // figuring out the difference 
//     const ageDate = new Date(diff); // calculating time between now and birth as if it were from 1970
//     return Math.abs(ageDate.getUTCFullYear() - 1970); // converting to years, taking away 1970 to get the difference between now and birth in years.
// };

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// // this can still be called in the old way: hala.calcAge(), rashed.calcAge().

// const hala = new Person('Hala', 'Hammoud', '8-12-90');
// const rashed = new Person('Rashed', 'Zaidoun', 'April 15 1987');

// // gets married
// Person.prototype.getsMarried = function(newLastName) {
//     this.lastName = newLastName;
// }


// // hasOwnProperty
// console.log(hala.hasOwnProperty('firstName')); // returns true
// console.log(hala.hasOwnProperty('getFullName')); // returns false

//Objects can hold methods.

/* #############################################################################
// // ES5 and ES2015: Constructor
#############################################################################*/

// function Dog(name, color) {
//   this.name = name;
//   this.color = color;
//   this.numLegs = 4;
// }

// let terrier = new Dog('Donato', 'Puce');
// console.log(terrier.name);

// function House(numBedrooms) {
//   this.numBedrooms = numBedrooms;
// }

// // Add your code below this line
// let myHouse = new House(9);
// myHouse instanceof House;

/* #############################################################################
// // ES5 and ES2015: Prototypal Inheritance
#############################################################################*/

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.greeting = function () {
//   return `Hello there, from ${this.firstName} ${this.lastName}.`;
// }

// person1 = new Person('Adam', 'Sayyad');

// // customer constructor using Person constructor
// function Customer(firstName, lastName, phoneNumber, membership) {
//   Person.call(this, firstName, lastName);
//   this.phoneNumber = phoneNumber;
//   this.membership = membership;
// }

// // inheriting Person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// // make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// customer1 = new Customer('Adil', 'Waddah', '614-908-7654', 'Standard');

// // override with new customer greeting
// Customer.prototype.greeting = function () {
//   return `Hello there, ${this.firstName} ${this.lastName}. Welcome to our company!`;
// }

// using Object.create

// const personPrototypes = {
//   greeting: function () {
//     return `Hello, ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function (newLastName) {
//     this.lastName = newLastName;
//   }
// }

// const hind = Object.create(personPrototypes);
// hind.firstName = 'Hind';
// hind.lastName = 'Umara';
// hind.age = 45;

// // can call the function from prototype:
// console.log(hind.greeting());

// hind.getsMarried("Still Umara");

// console.log(hind.greeting());

// // Object.create can take in another argument, an object of values
// const jabir = Object.create(personPrototypes, {
//   firstName: { value: 'Jabir' },
//   lastName: { value: 'Rassas' },
//   age: { value: 32 }
// });

/* #############################################################################
// // ES6 way of making classes: syntactic "sugar" or cover over the ES5 ways.
#############################################################################*/

// // // CLASS DECLARATION IN ES2015 suggested by VSCode:
// // class Person {
// //     constructor(firstName, lastName) {
// //         this.firstName = firstName;
// //         this.lastName = lastName;
// //     }
// //     greeting() {
// //     }
// // }

// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }

//   greeting() {
//     return `Hello there, ${this.firstName} ${this.lastName}!`
//   }

//   calculateAge() {
//     const diff = Date.now() - this.dob.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//   getsMarried(newLastName) {
//     this.lastName = newLastName;
//   }

//   // static methods: use without instantiating Object
//   static addNum(x, y) {
//     return x + y;
//   }
// }

// const rabia = new Person('Rabia', 'Chawdhry', '6/30/1990');

// rabia.getsMarried('Henderson');

// console.log(Personl.addNum(1, 2));

// // 
// // sub classes

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   greeting() {
//     return `Hello there, ${this.firstName} ${this.lastName}!`;
//   }
// }

// class Customer extends Person {
//   constructor(firstName, lastName, phone, membership) {
//     super(firstName, lastName);
//     this.phone = phone;
//     this.membership = membership;
//   }

//   static getMembershipCost() {
//     if (this.membership == 'Deluxe') {
//       return 500;
//     } else {
//       return 200;
//     }
//   }
// }

// const abed = new Customer('Abed', 'Amro', '456-852-8974', 'Deluxe');

// // can use methods extended from parent class


/* #############################################################################
// end of 2019: Object oriented programming additions from FCCamp.
#############################################################################*/

// Object Oriented Programming: Create a Method on an Object
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() { return "This dog has " + dog.numLegs +" legs."}
};
dog.sayLegs();

// Object Oriented Programming: Make Code More Reusable with the this Keyword
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};
dog.sayLegs();


// Object Oriented Programming: Define a Constructor Function
function Dog() {
    this.name = '';
    this.color = '';
    this.numLegs = 1;
}

// Object Oriented Programming: Use a Constructor to Create Objects
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Add your code below this line
let hound = new Dog();

// Object Oriented Programming: Extend Constructors to Receive Arguments
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Dog("Henry", "grey");

// Object Oriented Programming: Verify an Object's Constructor with instanceof
/* jshint expr: true */
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
// Add your code below this line
let myHouse = new House(4);
myHouse instanceof House;


// Object Oriented Programming: Understand Own Properties

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for (let prop in canary){
  if(canary.hasOwnProperty(prop)){
    ownProps.push(prop);
  }
}

// Object Oriented Programming: Use Prototype Properties to Reduce Duplicate Code

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

// Add your code above this line
let beagle = new Dog("Snoopy");
console.log(beagle.numLegs);  // prints 4

// Object Oriented Programming: Iterate Over All Properties
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
let ownProps = [];
let prototypeProps = [];
// Add your code below this line
for (let prop in beagle) {
  if(beagle.hasOwnProperty(prop)){
    ownProps.push(prop);
  }else{
    prototypeProps.push(prop);
  }
}


// Object Oriented Programming: Understand the Constructor Property
function Dog(name) {
  this.name = name;
}
let beagle = new Dog();
// Add your code below this line
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}
// NOTE: constructor property can be overwritten; to check, better to use
// instanceof method.
console.log(joinDogFraternity(beagle))


// Object Oriented Programming: Change the Prototype to a New Object
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  // Add your code below this line
  numLegs: 4,
  eat: function() {
    console.log("I am a dog that is eating, chow, chow, chow.")
  },
  describe: function(){
    console.log("My name is " + this.name);
  }
};


// Object Oriented Programming: Remember to Set the Constructor Property when Changing the Prototype
function Dog(name) {
  this.name = name;
}
// Modify the code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

// Object Oriented Programming: Understand Where an Object’s Prototype Comes From
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
// Add your code below this line
Dog.prototype.isPrototypeOf(beagle);


// Object Oriented Programming: Understand the Prototype Chain
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);  // => true
// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

// Object Oriented Programming: Use Inheritance So You Don't Repeat Yourself
function Cat(name) {
  this.name = name;
}
Cat.prototype = {
  constructor: Cat,
};
function Bear(name) {
  this.name = name;
}
Bear.prototype = {
  constructor: Bear,
};
function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};


// Object Oriented Programming: Inherit Behaviors from a Supertype, pt 1
function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
// Add your code below this line
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);
duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom"


// Object Oriented Programming: Set the Child's Prototype to an Instance of the Parent
function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
function Dog() { }
// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"


// Object Oriented Programming: Reset an Inherited Constructor Property
function Animal() { }
function Bird() { }
function Dog() { }
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
// Add your code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
let duck = new Bird();
let beagle = new Dog();


// Object Oriented Programming: Add Methods After Inheritance
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };
function Dog() { }
// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log("I am barking. Woof woof.");
}

// Add your code above this line
let beagle = new Dog();
beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"


// Object Oriented Programming: Override Inherited Methods
function Bird() { }
Bird.prototype.fly = function() { return "I am flying!"; };
function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
// Add your code below this line
Penguin.prototype.fly = function(){
    return ("Alas, this is a flightless bird.");
}

// Add your code above this line
let penguin = new Penguin();
console.log(penguin.fly());


// Object Oriented Programming: Use a Mixin to Add Common Behavior Between Unrelated Objects

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Add your code below this line
let glideMixin = function(obj) {
  obj.glide = function(){
    return "I am now glide. How marvelous it is to glide."
  }
}

glideMixin(bird);
glideMixin(boat);


// Object Oriented Programming: Use Closure to Protect Properties Within an Object from Being Modified Externally - functions have access to context in which they are created.
function Bird() {
  let weight = 15;
  this.getWeight = function(){
    return weight;
  }
}


// Object Oriented Programming: Understand the Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("A cozy nest is ready");
})();


// Object Oriented Programming: Use an IIFE to Create a Module that contains similar functions
let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();
// can then use module for storing similar functions and placing them in objects.


// ##############################################################################################################

// Functional Programming
// FreeCodeCamp
/* move from OneNote to here */
// ##############################################################################################################


// ##############################################################################################################

// Intermediate Algorithm Scripting
// FreeCodeCamp

// ##############################################################################################################

/* #############################################################################
// // 2020-06-27: Intermediate Algorithm Scripting: Sum All Numbers in a Range
#############################################################################*/

function sumAll(arr) {
  let numBw = [];
  numBw = numBw.concat(arr).sort((a, b) => { return a - b });
  let sum = 0;
  for (let i = numBw[0]; i <= numBw[numBw.length - 1]; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));

/* #############################################################################
// // 2020-06-27: Intermediate Algorithm Scripting: Diff Two Arrays
#############################################################################*/
function diffArray(arr1, arr2) {
  var newArr = [];
  newArr = arr1.filter(value => arr2.indexOf(value) == -1);
  newArr = newArr.concat(arr2.filter(value => arr1.indexOf(value) == -1));
  return newArr;
}

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
// console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

/* #############################################################################
// // 2020-07-03: Intermediate Algorithm Scripting: Seek and Destroy
#############################################################################*/
function destroyer(arr) {
  return arr.filter(item => {
    let pass = true;
    let i = 1;
    while (pass && i < arguments.length) {
      console.log("Item: " + item);
      console.log(arguments[i]);
      pass = !(item == arguments[i]);
      i++;
    }
    return pass;
  });
}
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));

/* #############################################################################
// // 2020-06-27: Intermediate Algorithm Scripting: Wherefore art thou
#############################################################################*/
 /* 
Make a function that looks through an array of objects(first argument) and returns an array of all objects that have matching name and value pairs(second argument).Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
For example, if the first argument is[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array(the first argument), because it contains the name and its value, that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  arr = collection.filter(item => {
    for (let key in source) {
      if (!item.hasOwnProperty(key) || item[key] != source[key]) {
        return false;
      }
    }
    return true;
  });
  // Only change code above this line
  return arr;
}

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].

/* #############################################################################
// // 2020-07-03: Intermediate Algorithm Scripting: Spinal Tap Case
#############################################################################*/

// From <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case> 

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/[\s_]/g, "-").toLowerCase();
}
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("AllThe-small Things"));


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split



// ##############################################################################################################

// Async Foundations
// CSteele Web Dev Bootcamp, Udemy

// ##############################################################################################################

// // forEach implementation, 2018-06-26, 

// function myForEach(arr, func) {
//   for (var i = 0; i < arr.length - 1; i++) {
//     func(arr[i]);
//   }
// }

// // Array.prototype.myForEach = function(func){
// //   for(var i = 0; i < this.length; i++){
// //     func(this[i]);
// //   }
// // }

// // implementation of findIndex
// function findIndex(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i, arr)) {  //  === true not necessary
//       return i;
//     }
//   }
//   return -1;
// }

// ##############################################################################################################

// Browser Practice

// ##############################################################################################################

// let someWord = 'difficult';
// // undefined
// someWord[0].toUpperCase();
// // "D"
// someWord
// // "difficult"
// someWord.slice(1);
// // "ifficult"
// someWord
// // "difficult"
// let someSentence = 'This is a sentence, pretty and bold.';
// someSentence.split(" ");
// // returns Array(7)["This", "is", "a", "sentence,", "pretty", "and", "bold."]
// let body = document.querySelector('body');
// function randNum() { return Math.round(Math.random() * 255); }
// setInterval(function () { body.style.backgroundColor = `rgb(${randNum()}, ${randNum()}, ${randNum()})` }, 500);


// // Browser Countdown Practice
// let seconds = prompt("Count down from how many seconds?");

// function printTime(seconds) {
//   let intervalId = setInterval(
//     function () {
//       if (seconds <= 0) {
//         console.log("Ring Ring Ring!!!")
//         clearInterval(intervalId);
//       } else {
//         console.log("Time remaining: " + seconds);
//       }
//       seconds--;
//     }, 1000);
// }

// printTime(seconds);


// ##############################################################################################################

// Algorithms in JavaScript

// ##############################################################################################################

// This function partitions given array and returns 
//  the index of the pivot.
var partition = function (array, p, r) {
  // KA: This code has been purposefully obfuscated,
  // KA: as you will implement it yourself in next challenge
  var e = array, t = p, n = r; var r = function (e, t, n) { var r = e[t]; e[t] = e[n]; e[n] = r; }; var i = t; for (var s = t; s < n; s++) { if (e[s] <= e[n]) { r(e, s, i); i++; } } r(e, n, i); return i;
};

var quickSort = function (array, p, r) {
  if (p < r) {
    var pivot = partition(array, p, r);
    quickSort(array, p, pivot - 1);
    quickSort(array, pivot + 1, r);
  }
};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length - 1);
println("Array after sorting: " + array);
Program.assertEqual(array, [2, 3, 5, 6, 7, 9, 10, 11, 12, 14]);

var array2 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6, 90, 0];
quickSort(array2, 0, array2.length - 1);
println("Array after sorting: " + array2);
Program.assertEqual(array2, [0, 2, 3, 5, 6, 7, 9, 10, 11, 12, 14, 90]);