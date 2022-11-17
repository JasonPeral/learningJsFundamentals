'use strict'

console.log("---------------START OF CHALLENGES SECTION----------------------");


//CODING CHALLENGE #1 SECTION 3 PART 2

//Data set 1 dolphins: 44, 23, 71
//Koalas: 65, 54, 49

const calcAverage = (x1, x2, x3) => {
    let average = (x1 + x2 + x3) /3
    return average; 
}
//Data set 1
const dolphinsSet1 = calcAverage (44, 23, 71);
const koalasSet1 = calcAverage(65, 54, 49);

//Checking if we get values from the function we just created
//console.log(dolphinsSet1, koalasSet1)

function checkWinner(avgD, avgK){
    if(avgD >= 2* avgK){
        console.log(`Dolphins win this set! (${avgD} vs ${avgK})`);
        return 0;
    }
    else if(avgK >= 2* avgD){
        console.log(`Koalas win this set! (${avgK} vs ${avgD})`);
        return 0;
    }
    else if(avgK != 2*avgD || avgD != 2*avgK){
        console.log(`Looks like nobody wins by the looks of it (${avgD} vs ${avgK})`);
        return 0;
    }
}
const winner = checkWinner(dolphinsSet1, koalasSet1)


//Data set 2 
//D: 85, 54, 41
//K: 23, 34, 27
const dSet2 = calcAverage(85, 54, 41);
const kSet2 = calcAverage(23, 34, 27);

const winner2 = checkWinner(dSet2, kSet2);

//----------------------END OF CODING CHALLENGE 1-------------//



//CODING CHALLENGE #2 SECTION 3 PART 2


//Q1    
function calcTip(bill){
    if(bill >= 50 && bill <= 300){
        let tip = bill * 0.15;
        return tip;
    }
    else{
        let tip = bill * 0.20
        return tip;
    }
    
}
//Test run to see if the tip is working
// let tip = calcTip(100);

// console.log(tip);
//Q2
// const bills = [125, 555, 44];

// let t1 = calcTip(bills[0]);
// let t2 = calcTip(bills[1]);
// let t3 = calcTip(bills[2]);

// //Outputing the correct tip values
// //console.log(t1, t2, t3);

// const tips = [t1, t2 , t3];
// //console.log(tips)
// const total =   [tips[0]+ bills[0],
//                 tips[1] + bills[1],
//                 tips[2] + bills[2]];

// console.log(total)


//--------CODING CHALLENGE #2 DONE AND EASY FOR ARRAYS----------------//



//--------CODING CHALLENGE #3 ---------------//
//Creating an object for marks data set which includes first name, last name 
//mass, height and a method that calculates the bmi within the object
const mark1 = {
    fName : 'Mark',
    lName : 'Miller',
    mass : 78,
    height : 1.69,
    bmi : function (){
        let calcbmi = this.mass / this.height ** 2
        //To limit decimal places we use the .toFixed(0) method
        return calcbmi.toFixed(2);
    }
}
//Same object as mark1 but with johns stats with the same method of bmi calculation
const john1 = { 
    fName : 'John',
    lName : 'Smith',
    mass : 92,
    height : 1.95,
    bmi : function(){
        let calcbmi = this.mass / this.height ** 2
        return calcbmi.toFixed(2)
    }
}
//Conditional statements to pick wether marks bmi is higher or 
//Johns bmi is higher and if its none of the 2 they will be considered equal
if(mark1.bmi() > john1.bmi()){
    console.log(`${mark1.fName}'s BMI(${mark1.bmi()}) is higher than ${john1.fName}'s BMI(${john1.bmi()})`);
}
else if(john1.bmi() > mark1.bmi()){
    console.log(`${john1.fName}'s BMI(${john1.bmi()}) is higher than ${mark1.fName}'s BMI(${mark1.bmi})`);
}
else{
    console.log(`Both ${mark1.fName} and ${john1.fName} seem to have the same BMI`)
}


// ------------ END OF CODING CHALLENGE #3 ON OBJECTS ------------ //

//CODING CHALLENGE #4

let bills1 = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
];

let total1 = [];
let tip = [];

for(let i=0; i < bills1.length ; i++){
     tip.push(calcTip(bills1[i]))
     console.log(`Tip for bill ${i}: ${tip[i]}`)

     total1.push(tip[i] + bills1[i]);
     console.log(`Total for bill ${i}: ${total1[i]}`)
}
console.log(bills1)
console.log(tip)

//End of Coding challenge #4