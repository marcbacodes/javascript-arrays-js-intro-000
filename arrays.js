var chocolateBars=["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(chocolateBars){
const moreChocolateBars=["foo",... chocolateBars];
return moreChocolateBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars){
chocolateBars.unshift("foo");
return chocolateBars;
}

function addElementToEndOfArray(chocolateBars){
  const moreChocolateBars=[...chocolateBars,"foo"];
  return moreChocolateBars;
}

function destructivelyAddElementToEndOfArray(chocolateBars){
  chocolateBars.push("foo");
  return chocolateBars;
}

function accessElementInArray(chocolateBars){
  return chocolateBars[0];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  //var newChocolateBars=chocolateBars.shift();
  return chocolateBars;
  return chocolateBars.shift();
}
