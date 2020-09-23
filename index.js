const returnFirstTwoDrivers = function (driversArray) {
  return driversArray.slice(0,2);
};

const returnLastTwoDrivers = function (driversArray) {
  return driversArray.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function (fare) { return fare * num };
}

const fareDoubler = function (fare) { createFareMultiplier(2)(fare) };

const fareTripler = function (fare) { createFareMultiplier(3)(fare) };

function selectDifferentDrivers(driversArray, driversFunction) {
  return driversFunction(driversArray);
}
