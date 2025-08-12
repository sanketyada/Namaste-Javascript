function handler(user) {
  console.log(`Hii this is ${user}`);
}
handler(); ///Hii this is undefined
handler("Sanket Yadav"); //Hii this is Sanket Yadav

//Rest oprater
function handleRest(val1, val2, ...data) {
  return data; //[ 40, 50, 60 ]
}
console.log(handleRest(20, 30, 40, 50, 60));

// Passing Object into function
function handleObject(data) {
  console.log(`Hii This is ${data.name}.I am a ${data.prof}`);
}
handleObject({
  name: "Raghuveer",
  prof: "Teacher",
});

//Passing Array into Function
function handlArray(myArray) {
  console.log(myArray[0]);
}
handlArray([2, 3, 4, 5]);
