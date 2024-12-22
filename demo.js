// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, 
// welcome the user like this: “Welcome to city of lights”

// let cityname = prompt("Write City name here!").toLowerCase();

// if (cityname == "karachi") {
//     document.write("welcom to city of Lights <br>");
// }

// else if (cityname == "lahore") {
//     document.write("Ha bhai Lahore waloo! <br>");

// }

// else if (cityname == "islamabad") {
//     document.write("Ha bhai islamabad waloo! <br>");

// }

// else{
//    document.write(`welcom to the ${cityname}! <br>`)
// } 


// // 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the
// // user is female, give the message: Good Morning Ma’am.

// let gender = prompt ("Please write your Gender here Male/Female").toLocaleLowerCase();

// if (gender == "female") {
//     document.write("Hello Ma'am, How are you? <br>");  
// }

// else if(gender == "male") {
//     document.write("Good Morning Sir <br>");
// }

// // 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:


// let colorinput = prompt("Write here about the color of road traffic signal").toLocaleLowerCase();

// if(colorinput == "red".toLocaleLowerCase()){
//     document.write(`
//   <h2>Traffic Lights Signals</h2>
//   <table border="1">
//     <thead>
//       <tr>
//         <th>Signal color</th>
//         <th><message</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>${colorinput}</td>
//         <td>Must Stop</td>
//       </tr>`);
// }

// else if(colorinput == "Green".toLocaleLowerCase()){
//     document.write(`
//   <h2>Traffic Lights Signals</h2>
//   <table border="1">
//     <thead>
//       <tr>
//         <th>Signal color</th>
//         <th><message</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>${colorinput}</td>
//         <td>Move now</td>
//       </tr>`);
// }

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”



// let petrol = prompt("please mention here petrol in liters").toLocaleLowerCase();

// if(petrol == "2 litres"){
//     document.write("Please refill the fuel in your car");
// }

// else if(petrol == "1 litres", "0.5litres") {
//     document.write("Now, you will have to refil your tanke");
// }


// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.


// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 84){
// alert("given condition for variable b is true");
// }

// chapter -12

// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour > 18) {
// document.write(greeting = "Good day")}

// else{
//     document.write(greeting = "Good evening");
// }

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// let yourtime = prompt("write your time here!");

// if (yourtime >= 0 && yourtime < 1200) {

//     if(yourtime === 0){
//         document.write("It's 12 AM (midnight).")
//     }

//     else(yourtime === 100) 
//     {
//         document.write("It's PM (evening)).")
//     };
// }