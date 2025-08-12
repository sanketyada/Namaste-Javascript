//Object Literals
let newsymbol = Symbol("123");
let myObj = {
  roll_no: 20,
  name: "Snaket Yadav",
  age: 20,
  isPresent: true,
  [newsymbol]: "345",
  greet: () => {
    console.log(
      `Welcome ${myObj.name},{this.name} will not workWe gonna start our journy From here.`
    );
  },
};

console.log(myObj.roll_no); //1st way
console.log(myObj["name"]);
console.log(myObj["isPresent"]);
console.log("Here is Symbol As a Key", newsymbol);
console.log(myObj.greet());

myObj.welcome = function () {
  console.log(`${this.name}`);
};
console.log(myObj.welcome());
