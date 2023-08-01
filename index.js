// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = array => array.slice(0,2);
const returnLastTwoDrivers = function (driversList) {
    let updatedDrivers = [...driversList]; //Practicing different methods in this function instead of slicing I created a new array and copied elements from driversList into it
    updatedDrivers.shift(); //removes the first driver
    updatedDrivers.shift(); //removes the first driver for a second time
    return updatedDrivers; //note this method implies I know how many drivers are present, best is probably .slice(-2) which always obtains last 2 drivers
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(multiplier) {  
    return function (fare) {            //This function returns an anonymous function and only passes in the multiplier that the returned function will use
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);
fareDoubler();
const fareTripler = createFareMultiplier(3);
fareTripler();

function selectDifferentDrivers (driversList, returnDriversFxn) { //This is a callback function
    return returnDriversFxn(driversList);
}


