var chocolateBars=["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(chocolateBars,1){
chocolateBars.unshift("foo",1);
return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars){
const moreChocolateBars=chocolateBars.unshift("mars");
return moreChocolateBars;
}

function addElementToEndOfArray(){

}

function destructivelyAddElementToEndOfArray(){

}
