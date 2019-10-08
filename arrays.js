var chocolateBars=["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(chocolateBars){
const moreChocolateBars=["foo",... chocolateBars];
return moreChocolateBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars){
chocolateBars.unshift("foo");
return chocolateBars;
}

function addElementToEndOfArray(){
  const evenMoreChocolateBars=[...chocolateBars,"foo"];
  return evenMoreChocolateBars;
}

function destructivelyAddElementToEndOfArray(){
  chocolateBars.push()"foo");
  return chocolateBars;
}
