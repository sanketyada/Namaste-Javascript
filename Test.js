// console.log("Sanket");

// let name;
// console.log(name);

//Datatype Conversition

//Converting in Number
// let key = undefined;
// let val = Number(key);
// console.log(val);

//"33" converted to number will giv 33 in number
//"Hitesh" converted to number will giv NaN
//"" converted to number will giv 0
//undifined converted to number will giv NaN
//true converted to number will giv 1
//null converted to number will giv 0

//Converting into Boolean
// let key = 22;
// let val = Boolean(key);

// console.log(val);

//"Hitesh" converted to number will giv true
//"" converted to number will giv false
//null =>false
//undefined ==>false
//33 ==>true

//Converted To String

// let num = undefined;
// let StringNum = String(num);
// console.log(typeof StringNum);
// console.log(StringNum);

//33 ==>"33"
//true==> "true"
//null ==>"null"
//undefined ==>"undefined"

//Auto Convversion
// let val = 1 + 2 + "3";
// let val2 = "3" + 2 + 1;
// console.log(typeof val);
// console.log(val);
// console.log(typeof val2);
// console.log(val2);

//Prefix & Postfix
// let num = 10;
// let newNum = ++num; //prefix (prechange and assign)
// console.log(newNum); //11
// console.log(num); //11

// let number = 21;
// let newNum2 = number++; //postfix(POstChange and assign)
// console.log(number); //22
// console.log(newNum2); //21

//Conditional Comprision
// console.log(18 > 12);
// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null < 0); //false
// console.log(null >= 0); //true

//Strict Check
console.log("2" == 2);   // true: Only compares value ("2" is converted to number 2)
console.log("2" === 2);  // false: Compares value & type ("string" !== "number" so "2" is not
//  converted to number 2)
