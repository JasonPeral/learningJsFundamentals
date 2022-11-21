// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//Live server for a development tool 
//1. vscode extension 
//2. Node.js and a npm package

//Live server is just an extension and is is like a quick way without reloading 
//websites to see what we are doing online which is good for developers
console.log("Live server extension")
console.log('test 2')


//Node.js is a more effecient way of doing liveserver and it is more professional
console.log("node.js Requires you to type in the console to activate liveserver ");

//Lesson 59 
//Problem solving this problem 
//We work for a company building a smart home thermometer. Our most recent task
//is this:'given an array of tempuratures of one day, calculate the tempurature
//amplitutde. Keep in mind that sometimes there might be a sensor error

const tempurature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];


//1st thing we need to do is understand the problem 
//1st thing to understand in the problem is what is the temp amplitude
//answer: difference between highest and lowest temp
//Then we have to figure out how to get the max and min values from an array
//There can be a sensor error and what we will do when the error occurs

//2nd thing is to breakl up the problem into sub-problems 
// tasks 
// --figure out how to ignore the error in the array
// how to find max and min value in the array 
//subtract min and max and return the value 

function calcAmplitude(tempurature){
    let max = tempurature[0];
    let min = tempurature[0]
    for(let i = 0; i < tempurature.length; i ++){
        if(tempurature[i] > max){
            max = tempurature[i]
        }
        else if(tempurature[i]< min){
            min = tempurature[i]
        }
        else if(typeof tempurature[i] !== 'number'){
            continue;
        }
    }
    console.log(max, min)
    return max - min
}

let amplitude = calcAmplitude(tempurature);
console.log(amplitude)


//End of lesson 59 on problem solving

//Lesson 60 on debugging
//First we need to identify the bug
// Understand how it happens or if its happening to only certain users with certain machines

//Next we need to find the bug in our code 
//--Isolating exactly were the bug is happening in code

//Next we have to fix the bug 
//--Replace wrong code with new solution 

//Prevent 
//--Prevent the bug to happening again by looking for similar code we did and checking
//for the same code 

//A more advanced way of preventing bugs is writing testing software
//Pretty important

//61. Debugging with the console and breakpoints

const measureKelvin = function(){
    const measurements = {
        type : 'temp',
        unit : 'celsius',
        //Here we are going to fix our problem
        //convert the string to a number
        //value : Number(prompt('Degrees celsius'))
        value : 10
    }

    //Working our way back we always look for where the bug looks like
    //its starting from.
    //We log the object and realize that the number is logged from a prompt 
    //as a string and that its just appending its value to 273

    //console.table gives us a nicely formatted table when logging 
    //things like objects
    console.table(measurements);

    //Different types of console logging
    console.log(measurements);
    // console.warn(measurements.value);
    // console.error(measurements.value);


    const kelvin = measurements.value + 273 
    return kelvin;
}
//First we have to identify the bug in the code
//The bug is in the converted value
console.log(measureKelvin());

//First we have to look for the bug, Our bug was that the results of the measureKelvin function is incorrect 
//We start prodding around to find the bug exact location
//We log the whole object to check if all values are correct because we are pulling an object property into the function
//We realize that the prompt to input a number in the object returns the input as a string
//The way we fixed that is to use the Number function and wrap the whole prompt inside
//reloaded and fixed the bug 

//How to use a debugger
 
//1. Go into sources in the developer tools 
//2. Then go to the javascript named file that you are using
//3. We set a breakpoint by pressing on any line on the number side
//4. We look into the right side where we can see the scope of the breakpoint and see what is defined and ll that
//5. Use the step through to go line through line 