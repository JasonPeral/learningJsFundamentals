//Section 3-- PART 2 #32. activating strict mode
'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// //Using Strict mode helps us find bugs within the code by sending us error
// //messages
// if(passTest) hasDriverLicense = true;

// if(hasDriversLicense){
//     console.log("I can drive now!");
// }
// //Also what strict mode can catch is using reserve words that we cant use
// let if = cool;
// let private = 123;

//----------End of lecture 32------------//


//Section 3--PART 2 #33. Functions 

function logger(){
    console.log("This string is from a function");
}

//Actually using the function can be called calling // running or invoking the function
logger();
logger();// Going to display the string 2x

//The things within the brackets are called parameters
//Once the function is called the parameters will get defined 
//Think about the parameters that they are blank spaces that still need to get filled
function fruitProcessor(apple, orange){
    const juice = `Juice with ${apple} apples and ${orange} oranges`;
    return juice;
}


//the values that we include for the parameters are called function arguments
//only when we invoke or call the function are when we include the values for the function
//When we call this function alone even with us returning juice and juice being a string
//All it displays is 5 and 0
fruitProcessor(5, 0);

//When the function is called it gets processed with the arguments we give it
//Only until after is when the function returns what we have processed to return

//In theory after the function gets called with the arguments the line of code calling
//the function gets replaced with the result of the function.

//To capture the result of the function that replaces the line of code that calls the function
//we have to store the call in a variable then log the new variable to the console.
const appleJuice = fruitProcessor(6, 1);
//This log with the applejuice is going to display our function return statement.
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//------end of lesson 33 on FUNCTIONS ---------//


//Section 3 -- Part 2 lesson 34 function vs expressions

//we can do this here!!
//const age1 = calcAge1(2001);
//console.log(age1);
function calcAge1(birthYear){
    const age = 2022 - birthYear;
    return age;
    //We can also do it like this but I like the clean look of the variable return 
    // return 2022- birthYear;
}
//The biggest difference in declaration vs expression is that we can call the declaration before
//the function is declared like this above


//This is a function declaration
const age1 = calcAge1(2001);
console.log(age1);

//Function expression
//function expression the whole function is tied to a variable but is called the same way
const calcage2 = function (birthYear){
    const age = 2022 - birthYear;
    return age;
}
//The way we call the function is the same
const age2 = calcage2(2002);
console.log(age2, age1)

//-------------------end of lesson 34 on functions vs expressions ----------------//


//Section 3 -- Part 2 lesson 35 Arrow functions 

// const calcage2 = function (birthYear){
//     const age = 2022 - birthYear;
//     return age;
// }
//We are going to make this^^ function an arrow function below

//This arrow function is very simple and implicitly sets our return keyword when it is a 1 liner type of code
//This is the same as the function above
//Makes the code very simple

//The left side of the arrow function denotes our parameters or input
//The right side of the arrow function denotes the output of our function
const calcAge3 = birthyear => 2022 - birthyear;
const age3 = calcAge3(1999);
console.log(age3);

//This arrow function has 2 parameters and when that happens we need to wrap them in 
//parenthesis
const yearsUntilRetirement = (birthYear, fName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${fName} still has ${retirement} years till retirement`;
}

console.log(yearsUntilRetirement(2001, 'Jason'));
console.log(yearsUntilRetirement(2002, 'Hannah'));


//------------------- END OF LESSON 35 ON ARROW FUNCTIONS ------------------//


//Section 3 -- part 2 lesson 36 functions calling other functions


//This is the function thats going to be within our bigger function
//basically is requesting a parameter fruit which then will get multiplied by 4
function fruitSlicer(fruit){
    return fruit * 4;
}


function fruitProcessor36(apples, oranges){

    //The argument that gets inputed for the function fruit slicer doesnt come from a hard code 
    //The input for fruit slicer is coming from the arguments of fruitProcessor36
    //Which then instead of returning apple within the template literal we are returning 
    //the variable thats holding the applepieces and orangePieces
    const applePieces = fruitSlicer(apples);
    const orangePieces = fruitSlicer(oranges);
    const juice = `Juices are made with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    
    //We have the same return statement because that is still the statement we want to return
    return juice;
}

//When you look at this our input is only going into fruitProcessor36
//Which then gets redirected into fruitSlicer input within the fruitProcessor36 function
//This is how the data flow works

// 1-- both functions are created 
// 2-- Input/Arguments get inputed to 1 function the fruitProcessor36
// 3-- Arguments are accepted into fruitProcessor36 then redirected to inputs
//     for fruitslicer function 
// 4-- the fruit slicer function gets invoked within fruitprocessor36 function
// 5-- we return statement with the variables we invoked fruit slicer with
// applePieces and orangePieces

console.log(fruitProcessor36(3, 6))

//-------------------- END OF LESSON 36 ON FUNCTIONS WITHIN FUNCTIONS ------------//


//------- SECTION 3 -- PART 2 lesson 37 Reviewing Functions ------//

const calcAge4 = function(birthYear){
    return 2022 - birthYear;
}
const retirementStat = function(age, fname){
    let retire = 65 - age;
    return retire;
}

const yearsUntilRetirement2 = function(birthYear, fName){
    const age = calcAge4(birthYear);
    const retirement1 = retirementStat(age, fName)

    //This is validation within a function to rule out the possiblility
    //of someone being over the retirement age
    if(retirement1 > 0){
        //The return statements here will automatically exit the function
        //so if you wanted something 
        return `${fName} has ${retirement1} years until retirement`;
    }
    else {
        return `${fName} has already reached retirement`
    }
    //Some shortcuts for vscode 
    //option up arrow on a line with move the line up or down
    //cmd D will use change all the occurances of the same variable at one time



    //return retirement1;
}
console.log(yearsUntilRetirement2(2001, 'Jason'));
console.log(yearsUntilRetirement2(1944, 'Daqueveon'));
//Everything looks good here until someone who has already retired 
//inputs their age 
//So basically have to include some validation

//Reviewing functions 
//There are 3 functions that we need to know
//Function declaration -- [Functionality] this function can be used before its declared 
//looks like this
function calcCalsLeft3(calories){
    return 2500 - calories;
}

//Then theres function expressions -- Basically a function value stored in variable
//Looks like this 
const calcCalsLeft2 = function(calories){
    return 2600 - calories;
}

//Finally there are arrow functions -- Great for quick one line functions
//Good for when you dont need to explicity use the return keyword
//Also has no this keyword
//Looks like this 
const calcCalsLeft1 = calories => 2700 - calories;

//These are 3 different ways of writing a function but they all work
//basically the same: Receive data, transform data and output data

//Structure of a common function 
// 1. function name 
// 2. Parameters -- placeholders to receive input values. like local variables (only within the block)
// 3. Function body -- blocks of code within the function body
// 4. Return statement which outputs a value from the function || also the return keyword terminates the function
// 5. calling the function we call the function with the parenthesis and add values as arguments
// 6. Variable to save retured value of the function 

//---------------END OF LESSON 37 ON REVIEWING FUNCTIONS------------------//


//------------------Section 3 -- part 2 lesson 39 introduction to arrays -------------------//

//Literal syntax and the most common way of creating an array
const friends = ['Jason', 'Ethan', 'Moedev']
console.log(friends);

//Another way of writing an array 
//Almost like how you would write an array in java
//Basically using an array function with the keyword new
//And to note doing this we are creating the array in brackets
const years1 = new Array(2001, 2002, 2003, 2004, 2005)

//arrays start at 0 so the length of the array is basically n-1 everytime
//1st element = 0 in this case and the last element is 2 in this case 
console.log(friends[0]);

//To get the length of the array this is how to do it
//This is called a property 
//Gives us the length of the array not in 0 based, -- it would give us 3 for an array size of 3
//This can be very useful, Example below
console.log(friends.length);

//If we wanted to log the last element of the array without counting manually we can make this expression
//with the propery of .length 
//because the property is not 0 based we have to subtract 1 from the array length to display the last
//element of the array
console.log(friends[friends.length - 1]);

//We can mutate/change certain parts of the array with this syntax
//first know which element we want to change then just change it like below
friends[2] = 'Jbp'
console.log(friends);

//We can also add another element like this
//We only had an array size of 3 and adding this [3] element would bring us to 4
//it works very seamlessly

//Before we knew that const values cannot be changed/mutated but that was for only primitive variables
//An array is not primitive and can be changed whether its const or not
friends[3] = 'Mohamwa'
console.log(friends)

//What we cant do is change the whole array when its a const value
//It is a type error like bellow
//friends = ['j', 'i', 'm'];

//In an array we can also put all sorts of data types within the array because of JS technology 
//We can even put an array within an array 
//example
let age = 2022 - 2001
let jason = ['Jason', 'Peral', age, friends, 'Programmer'];
console.log(jason);

//Array exercise
//function to calc age 
const calcAgeL39 = function(birthY){
    return 2022 - birthY;
}
//Setting an array of birthyears for us to use within the function
const years = [2001, 2003, 2002, 1995, 1991, 1990];

//Use the array indexes to use within the function of calcAge || all of them are basically the same
const ageJ = calcAge1(years[0]);
const ageb = calcAge1(years[1]);
const agep = calcAge1(years[2]);
const agek = calcAge1(years[3]);
const agef = calcAge1(years[4]);

//Log the results to the console
console.log(ageJ, ageb, agep, agek, agef);
//Then we can place the results in an array as well
//After getting the results from the indexes we place them in a new array because without it, it would just be values floating around
const newAges = [calcAge1(years[0]),calcAge1(years[1]),calcAge1(years[2]),calcAge1(years[3]),calcAge1(years[4])]
console.log(newAges);


//--------------END OF INTRO TO ARRAYS ------------------------//

//SECTION 3 -- PART 2 Basic Array Operation (Methods)---------//


//The push method adds elements to the end of the array
const friends40 = ['Jason', 'Ethan', 'Moe', 'Mohamwa']
console.log(friends40); 

//Push is basically a function because of the parenthesis and it is attached
//to the friends40 array 
//If this method is captured with a variable you will realize that it captures 
//the new length of the array
const newLength = friends40.push('jj');

//This will change the array from a length of 4 to a length of 5 adding 
//the string jj to the end of the array elements 
console.log(friends40);
console.log(newLength);

//Method to add element to the beginning of the array we use this 
//this method will add a desired element to the start of the array 
//Also in theory if this is getting added to the front all the indexes of the 
//original elements gets +1
//Along with the push method we can capture this method into a variable and see
//the new length if we wanted to log it to the console
friends40.unshift('jbppp');
console.log(friends40);

//Method to remove elements
//pop method will remove the last element in the array 
//No arguments are needed when entering this method
//When you capture one of the pop methods in a variable you get the array element
//that got removed 
const popped = friends40.pop(); 
console.log(friends40);

//The captured method will display the removed element
console.log(popped);

//To remove the first element
//Also again if you capture this in a variabe it will return what element
//was removed from the array
friends40.shift();
console.log(friends40);

//Method that tells us which position a certain element is in the array
//If we know what the array element is called that we want to search it will
//tell us which index it is at with the 0 based type

//If we search for an element that is not there it will spit back -1 everytime
console.log(friends40.indexOf('Ethan'));

//Method to return a true or false if a certain element is just in the array
//This is comparing with strict parameters so it does not do type coercion 
//Also this is a case sensitive comparison so lower j and upper J can get you different answers
//With the includes method returning a boolean it creates a very useful
//case for when doing if statements
console.log(friends40.includes('Jason'));
console.log(friends40.includes('Donnovan'));


//---------------------END OF LESSON 40 ON  BASIC ARRAY OPERATIONS(METHODS)-------------//

//------------------------Lesson 42 introduction to Objects----------------------------//

//In an array we cant specify any of these elements in an array with a name but only by an order number 
//on how they appear
const jasonArray = [
    'Jason',
    'Ethan',
    'Moe',
    'Mohamwa',
    2022-2001,
    'Student',
    ['J','b','p']
]

//Objects are the most fundamental concepts of the whole javascript language
//The biggest difference vs objects vs arrays, when dealing with objects the order does not matter
//when we want to retrieve information 

//the order number of the array is the only way of getting information from an array

//This is a variable attached to an object which is in the curly braces
//These objects are used with key value pairs just like the json package back in adv front end
//These objects can quite literally hold anything within the key value pairs
const jason1 = {
    firstName: 'Jason',
    lastName: 'Peral',
    age: 2022 - 2001,
    occupation: 'Student/ Chef',
    friends: ['Ethan', 'Moe', 'Mohamwa']
}
//The first part of the key value pairs are called properies and the attached
//key value pair is the value of the property 
//example: the property firstName has the value of 'Jason'
//There are many ways of writing objects but this is the simplest form of objects 
//This form with curly braces are called object literals because we are writing the entire object content 

//Arrays and objects are very similar but the way to think about it is that 
//we should be using arrays for very structured uses where the data is ordered 
//and objects for more un structured data and data that we want to retrieve using a name


//-----------------End of lesson 42 on intro to objects --------------//



//Lesson 43 on DOT VS bracket NOTATION 

//Using object from last lesson to this lesson
const jason43 = {
    firstName: 'Jason',
    lastName: 'Peral',
    age: 2022 - 2001,
    occupation: 'Student/ Chef',
    friends: ['Ethan', 'Moe', 'Mohamwa']
}
//Checking what the output is for the flat object 
console.log(jason43);


//Getting a property from an object using the dot notation
//Retreival method: name of object -> . -> property you want to retreive 
console.log(jason43.lastName);

//Getting a property value from an object using the bracket notation 
//Retreival method: name of object -> square bracket [] -> property you want to retreive in ''
console.log(jason43['firstName']);


//The big difference between these 2 are that in the bracket notation 
//you can put any expression you like inside the brackets
//remember an operation is an expression so anything that produces a value
//an example of this is: 
const nameKey = 'Name';
console.log(jason43['first' + nameKey]);
console.log(jason43['last' + nameKey]);


//More examples of usecases for bracket notation 
//Here we are asking the users what they want to know about me 
//give them the options from the object and whatever they input will be 
//stored in variable which then will get pushed into the bracket notation 
//of the object retreival
//This can only happen with bracket notation as the dot notation cannot take expression as an "argument"

//const question = prompt('What do you want to know about me? Choose between firstName, lastName, age, occupuation and friends')

//Here we take a step further and create some logic for if the user enters a non
//property value to parse
// if(jason43[question]){
//     console.log(jason43[question]);
// }
// else{
// //    prompt('Invalid question please choose from the selection provided')
// }

//-------------------//
//How to use the dot and bracket notation to add new properties to the object
//dot notation adding property and value
jason43.location = 'Toronto';
//bracket notation adding property and value
jason43['socialMedia'] = '@jbp.23';
console.log(jason43)

//IN CLASS CHALLENGE

console.log(jason43.friends);
let lengthFriend = jason43.friends.length;
console.log(jason43.firstName + ' has ' + lengthFriend + ' friends and his best friend is named ' + jason43.friends[0]);


//------End of lesson 43 on dot Dot vs bracket notations ----------//


// ----------- Section 3: Javascript fundamentals part 2 lesson 44. Object Methods ---------------//

const jason44 = {
    fName : 'Jason',
    lName : 'Peral',
    bYear : 2001,
    hasLicense : true,
    //We can use this keyword to tell us that we are using whatever attached variable 
    //in the scope
    calcAge1 : function(bYear){
        //console.log(this)
        return 2022 - this.bYear;
    }
    
};

console.log(jason44)
//Any function attached to an object is called a method
//Displaying the object method with the dot notation 
console.log(jason44.calcAge1(jason44.bYear))

//Displaying the object method with the bracket notation 
console.log(jason44['calcAge1'](jason44.bYear))

//in class challenge 
//Create an object method that returns the string below 
//"Jason is a 21 year old chef/Programmer and he has a drivers licnese"

const challenge = { 
    fName : 'Jason',
    age : 21,
    occupation : 'chef / Programmer',
    hasDriversLicense : function(age){
        if(this.age > 16){
            return  'has a drivers license'
        }
        else{
            return 'does not have a driver license'
        }
    },
    summary : function (){
        return `${this.fName} is a ${this.age} year old ${this.occupation} and he ${this.hasDriversLicense(this.age)}`
    }
    
}
//Another way of creating this object method 
const chall = {
    fName : 'Jason',
    birthY : 2001,
    occupation : 'chef / Programmer',
    hasDriversLicense : true,
    calcAge : function(){
        this.age = 2022 - 2001;
        return this.age
    },
    summary : function(){//Here we are using a ternary operator for the drivers license
        return `${this.fName} is a ${this.calcAge()} years old ${this.occupation}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`
    }
}

console.log(challenge.summary());
console.log(chall.summary());

//End of lesson 44 on object methods

//lesson 46 iteration: the for loop 

//If we wanted a counter for the amount of reps in the gym 
//It would be very repetitive and not really the point of code
//Like this is very wrong
// console.log('Lifting weights repition 1')
// console.log('Lifting weights repition 2')
// console.log('Lifting weights repition 3')
// console.log('Lifting weights repition 4')
// console.log('Lifting weights repition 5')
// console.log('Lifting weights repition 6')

//For loop keeps running while the condition is true 
//There are 3 parts to a loop 
// 1.The starting variable
// 2.Condition to where the starting variable should eventually end
// 3.incrementing the control variable 

//Here we use the counter variable to increase the rep count in the 
//console.log each iteration
for(let x = 0; x < 10; x++){
    console.log(`Lifting rep = ${x}`)   
}
//This is basically the gist of the for loop 
//Just have to make sure it doesnt go into infinte loop

//Another example of a for loop below 
//A clock counter telling the time
for(let x = 1; x <= 12; x++){
    console.log(`Its only ${x} o'clock`)
}

//END OF LESS 46 ON ITERATION: THE FOR LOOP

//Lesson 47 Looping arrays, breaking and continuing

const less47 = [
    'Jason',
    'Peral',
    2022 - 2001,
    'Student',
    ['Ethan', 'Moe', 'Mohamwa'],
    ['Man', 'He', 'Him']
];

//The .length method works because its not 0 based and it will essentially say 5 elements of the array 
//which when something is 0 based it will be perfect for a 0 based array
const types = [];
for(let i = 0; i < less47.length ; i++){
    console.log(less47[i])

    //Here we are filling an array using the array we are looping through already
    //This is 1 way of doing it
    // types[i] = typeof less47[i];
    
    //Here we are using an array method to push the typeof to the end of the array
    types.push(typeof less47[i]);
}

console.log(types);



//----//
//EXAMPLE
const years47 = [
    2001, 
    2002,
    2000,
    1995,
    1991
]
const ages = []

for(let i = 0; i < years47.length; i ++){
    let x = 2022 - years47[i];
    ages.push(x);
}
console.log(ages);

//Continue and break statements
//Here we are writing a control structure within a control structure
//Within the for loop we are writing to only display string type values of the less47 then continues 
//after the condition has been proven false
for(let i = 0; i < less47.length ; i++){
    if(typeof less47[i] !== 'string') continue;
    console.log(less47[i])
}
console.log('-----------------------------')

//Break method
//For the break statements, once the condition has been met we will break and terminate the 
//statements. In this case once a number is visible terminate the loop
for(let i = 0; i<less47.length; i++){
    if(typeof less47[i] === 'number') break;
    console.log(less47[i])
}

//-----------------END OF LESSON 47 ON LOOPING THROUGH ARRAYS, CONTINUE AND BREAKING---------

//LESSON 48 LOOPING BACKWARDS AND LOOPS IN LOOPS

//Lets create a new array for this lesson
const xyz = [
    'jason',
    'peral',
    2022 - 2001,
    'Student programmer',
    ['Macbook pro 2018', 'modern 14','Macbook air M1 2021']
]

//Looping backwards tut
//Normally we starts at index 0 then increment up to arr.length
//We initalized i to the length of the array using arr.length
//Because arrays are never a negative number we == 0 or i>= 0 
//Then the increment is going to decrease with '--' 
for(let i = xyz.length -1 ; i >= 0; i--){
    console.log( i, xyz[i])
}

//Loop inside of a loop
//First we iterate the 1st loop once 
//Then we have to complete the whole inner loop before the 2nd loop for the first loop iterates 
//Then once the first for loop iterates the 2nd for loop will iterate completely
for(let exercise = 1; exercise < 4; exercise++){
    console.log(`Starting exercise ${exercise}`);
    for(let rep = 1; rep < 6; rep++){
        console.log(`Counting rep #${rep}`);
    }

}

//END OF LESSON 48 ON LOOPING BACKWARDS AND LOOPS IN LOOPS


//LESSON 49 ON THE WHILE LOOP 
//This is a for loop
for(let x = 0; x < 10; x++){
    console.log(`Lifting rep = ${x}`)   
}
//We will recreate this as a while loop
//We want to keep the loop running while the condition is true
//We still need the other components which is the start of the control variable 
//and the incrementing of the variable

let rep = 0
while(rep < 10){
    console.log(`Lifitng rep: ${rep}`);
    //We add the counter incrementation at the end 
    rep++
}

//More example of the for loop
//This method will produce a random number each time
//We want to use the while loop to keep looping until we land a 6
 
// console.log(dice)
let dice = 0
while(dice !== 6){
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6)console.log('You finally rolled a 6')
}
//THE while loop is good for loops that we dont know exactly when its going to end 
//But we know that a parameter will hit to end the loop eventually
//END OF JAVASCRIPT FUNDFAMENTALS 