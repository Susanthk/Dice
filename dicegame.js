var count = 0;

function dicenum() {
  if (count == 1) {
    var removedata = document.getElementById("pics");
    removedata.innerHTML = " ";
    count--;
  }
  var dice = document.getElementById("input").value;
  randomnum(dice);
}

function randomnum(dice) {
  var numbers = [];
  for (var i = 0; i < dice; i++) {
    num = Math.floor(Math.random() * 6) + 1;
    numbers.push(num);
  }
  //   alert(numbers);
  displaydice(numbers);
  return numbers;
}

function displaydice(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    var imgnum = document.createElement("img");
    imgnum.src = "./images/dice" + numbers[i] + ".png";
    document.getElementById("pics").appendChild(imgnum);
    var images = document.getElementsByTagName("img");

    images[i].className += "imgclass"; //Adding a imgclass
  }
  count++;
}

// function dicenum() {

//   var numbers = [];

//   document.getElementById("pics").removeChild("img");
//   var dice = document.getElementById("input").value;

//   for (var i = 0; i < dice; i++) {
//     num = Math.floor(Math.random() * 6) + 1;
//     numbers.push(num);
//   }

//   alert(numbers);
//   for (var i = 0; i < numbers.length; i++) {
//     var imgnum = document.createElement("img");
//     imgnum.src = "./images/dice" + numbers[i] + ".png";
//     document.getElementById("pics").appendChild(imgnum);
//   }

// }
