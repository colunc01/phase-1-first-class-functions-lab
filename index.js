// Code your solution in this file!

// I copy and pasted the formulas into the array because that was the only way I figured out how to pass all the tests.
// const returnFirstTwoDrivers = function(array) {
//     return array.slice(0,2);
// };

// const returnLastTwoDrivers= function(array) {
//     var array1 = [array[array.length-2], array[array.length-1]];
//     return array1;
// };

const selectingDrivers = [
    returnFirstTwoDrivers = function(array) {
            return array.slice(0,2);
     },

     returnLastTwoDrivers= function(array) {
        var array1 = [array[array.length-2], array[array.length-1]];
        return array1;
    }
];


function createFareMultiplier(mult){
    return function multiplied(value){
        return value*mult;
    };
    
}


function fareDoubler(number){
    //console.log(number);
    const doubledFare = createFareMultiplier(number);
    //console.log(doubledFare);
    return number *2;
}

function fareTripler(number){
    return number *3;
}

function selectDifferentDrivers(array,arg2){
    return arg2(array);
}

