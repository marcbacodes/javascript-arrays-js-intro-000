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
  const moreChocolateBars=[...chocolateBars,"mars"];
  return moreChocolateBars;
}

function destructivelyAddElementToEndOfArray(){
  chocolateBars.push("mars");
  return chocolateBars;
}
