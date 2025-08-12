let joke = async function () {
  let res = await fetch("https://official-joke-api.appspot.com/random_joke");
  let data = await res.json();
  ShowOndocumet(data);
  console.log(data);
};
function ShowOndocumet({setup:Setu,punchline}) {
  let container = document.getElementById("joke");
  let Setup = document.getElementById("Setup");
  Setup.innerText = Setu;
  let punchLine = document.getElementById("punchLine");
  punchLine.innerText = punchline;
}
