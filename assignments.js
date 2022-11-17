'use strict';

console.log('-----------------------------------------------');
console.log("START OF THE ASSINGMENT BLOCKS");
//Assingment for part 2 fundamentals lecture 33 Functions
function describeCountry(country, population, capitalCity){

    let description =  `${country} has a population of ${population} million and
    its capital city is ${capitalCity}`;
    
    return description;
}

//A problem I ran into here is that I was inputting the countries without any single or
//double quotes and it would come out that Canada is not defined.

//When inputting a string make sure to add your quotation marks or the compiler 
//will think you are trying to input a variable into the argument
let describeCanada = describeCountry('canada', 38, 'ottawa');
let describeUsa = describeCountry('Usa', 329.5, 'Washington');
let describePhillipines = describeCountry('Phillipines', 109.6, 'Manila');

console.log(describeCanada);
console.log(describeUsa);
console.log(describePhillipines);

//-----------END OF FUNCTIONS ASSIGNMENT -----------//


//Assignment for part 2 function declaration vs expression 

//Q1 
function percentageOfWorld(population, country){
    let percentage = (population / 7900)*100
    return `${country} is ${percentage}% of the world population of 7990 Mill`
}

const percentCanada = percentageOfWorld(38, 'Canada');
const percentUsa = percentageOfWorld(329.5, 'USA')
const percentRussia = percentageOfWorld(144.1, 'Russia')
console.log(percentCanada);
console.log(percentUsa);
console.log(percentRussia);

//Q4

const percentageOfWorld2 = function(population, country){
    let percentage = (population / 7900)*100
    return `${country} is ${percentage}% of the world population of 7990 Mill for an expression`
}

const percentCanada2 = percentageOfWorld2(38, 'Canada');
const percentUsa2 = percentageOfWorld2(329.5, 'USA');
const percentRussia2 = percentageOfWorld2(144.1, 'Russia');

console.log(percentCanada2);
console.log(percentUsa2);
console.log(percentRussia2);

//--------------END OF ASSIGNMENT FOR FUNCTIONS DECLARATION VS EXPRESSIONS ------------//



//-----------ASSIGNMENT FOR ARROW FUNCTIONS --------------//
//Q1

const percentageOfWorld3 = population => (population/7900) *100;
console.log(percentageOfWorld3(180))

//OR

const percentageOfWorld4 = (population, country) => {
    let percentage = (population/7900)*100
    return `${country} is ${percentage}% of world pop and this is on an arrow function`
}

console.log(percentageOfWorld4(180, 'Canada'));


//-----------END OF ASSIGNMENT ARROW FUNCTIONS -------------//

//------------ASSINGMENT FOR FUNCTIONS CALLING OTHER FUNCTIONS----------//

function describePopulation(country, population){
    const percentage = percentageOfWorld3(population);
    
    return `${country} has a population of ${population} Mill which is ${percentage}% of the worlds population`;
}

const cont1 = describePopulation('China', 1441.2);
const cont2 = describePopulation('Korea', 51);
const cont3 = describePopulation('Mexico', 126);

console.log(cont1);
console.log(cont2);
console.log(cont3);

//----------END OF ASSIGNMENT ON FUNCTIONS CALLING OTHER FUNCTIONS----------//



//Assignment for introduction to arrays -----------------------//
//1. Create an array with 4 values of different populations 
let populations = [38, 1441.2, 51, 126];
if(populations.length == 4){
    console.log('true');
    
}else{
    console.log('false')
    
}

function percentOfWorld10(population){
    let percentage = (population / 7900)*100;
    return percentage;
}

const canadaArr = percentOfWorld10(populations[0]);
const chinaArr = percentOfWorld10(populations[1]);
const koreaArr = percentOfWorld10(populations[2]);
const mexicoArr = percentOfWorld10(populations[3]);

let percentages = [canadaArr, chinaArr, koreaArr, mexicoArr];
console.log(populations, percentages);


//--------------END OF ASSIGNMENTS ON FUNDAMENTALS OF ARRAYS -----------------//



//-----------------Assignment for basic array operations (methods)------------//

//q1
//q1 Create a list of neighboring countries to 1 country in an array
const neighbors = ['Belarus', 'Poland', 'Ukraine']
console.log(neighbors);

//q2
//Add a new country that came into the neighbors and add it to the end of the array
neighbors.push('Utopia');
console.log(neighbors);

//q3 
//Overtime the country has shrivled and has dissapeared
//Back to the initial array we had
neighbors.pop(); 
console.log(neighbors);

//q4 
//If the neighbors does not include Germany then respond with not a central
//european country
//I had the if statement comparing the neighbors array to the neighbors array includes germany like this
// if(neighbors != neighbors.includes('Germany')){}
//When it should be if (argument.incliudes == true or false){Output this}
if(neighbors.includes('Germany') == false){
    console.log('Probably not a central European Country! 🥸');
}else{
    console.log('Probably a central european country!');
}

//Q5
let x1 = neighbors.indexOf('Belarus');
let x2 = neighbors.indexOf('Poland');
let x3 = neighbors.indexOf('Ukraine');

neighbors[x1] = 'Belarus Q5';
neighbors[x2] = 'Poland Q5';
neighbors[x3] = 'Ukraine Q5';
console.log(neighbors);

//-------------------END OF ASSIGNMENT ON ARRAY OPERATIONS(METHODS)-----------------------------//



//--------------------Assignment for introduction to objects -----------//

const myCountry = {
    country : 'Canada',
    capital : 'Ottawa',
    langauge: 'English',
    population: 38,
    neighbors : ['New York', 'Chicago', 'Buffalo']
}

console.log(myCountry);

//------------------End of intro to objects assignment ----------------//

//----------------Assignment for dot vs bracket notation --------------//
//q1 use the object from the last assignment
console.log(`${myCountry.country} has ${myCountry.population} Million ${myCountry.langauge} speaking people, ${myCountry.neighbors.length} neighboring states to ontario and a capital called ${myCountry.capital}`);

//q2 increase population by 2 million using dot notation 
//Could do it like this or just reassign the value if you know exactly how much it is 
myCountry.population = myCountry.population + 2;
console.log(`${myCountry.country} has ${myCountry.population} Million ${myCountry.langauge} speaking people, ${myCountry.neighbors.length} neighboring states to ontario and a capital called ${myCountry.capital}`);
//Now they want us to decrease by 2 million using bracket notation 
myCountry['population'] = myCountry['population'] - 2;
console.log(`${myCountry.country} has ${myCountry.population} Million ${myCountry.langauge} speaking people, ${myCountry.neighbors.length} neighboring states to ontario and a capital called ${myCountry.capital}`);

//End of assignment on dot vs bracket notation 

// -------Assignment for object methods ---------- //

// We have to grab the object from intro to object assignment

const myObj = {
    country : 'Canada',
    capital : 'Ottawa',
    langauge: 'English',
    population: 38,
    neighbors : ['New York', 'Chicago', 'Buffalo'],
    describe : function(){
        console.log(`
        ${this.country} has ${this.population} Million ${this.langauge} 
        speaking people, ${this.neighbors.length} neighbor states to Ontario, 
        and the capital is ${this.capital}`)
    },
    checkIsland : function(){
        this.neighbors.length === 0 ? console.log(`is an island`) : console.log(`Is not an island`)
    }
}

//These 2 ways of console logging are the same but 
//assigning a simple variable helps keep things clean
//console.log(myObj.describe());
let x = myObj.describe();
console.log(x);

// let y = myObj.checkIsland()
// console.log(y)

//End of assignment on object methods 

//Assignment for iteration of the for looop

//This will iterate 50x so i will comment it out to keep it clean
// for(let x = 1; x <= 50; x++){
//     console.log(`voter #${x} is currently voting!🇺🇸`)
// }


//-------- end of assignment on object methods ------------//

// LOOPING ARRAYS, BREAKING AND CONTINUING 
//Q1 
let populations1 = [38, 1441.2, 51, 126];
//Q2
for(let i = 0; i < populations.length; i++){
    let percentages2 = percentOfWorld10(populations1[i])
    //q3
    console.log(percentages2, populations1)
}
//This way of setting new values to a new array is way easier and less time consuiming 

//End of assignment on looping arrays, breaking and continuing

//Assignment on looping backwards and loops in loops
//q1
const listOfNeighbors = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
]
for(let i = 0; i < listOfNeighbors.length; i++){
    for(let x = 0; x < listOfNeighbors[i].length; x++){
        console.log(`Neighboring countries ${listOfNeighbors[i][x]}`)
    }
}
