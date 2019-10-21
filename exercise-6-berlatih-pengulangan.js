// Menggunakan while
var str = "I love coding";
var str2 = "I will become a fullstack developer";
var num = 2;
var num2 = 20;
while (num < 21) {
  console.log(num + " - " + str);
  num += 2;
}
while (num2 > 0) {
  console.log(num2 + " - " + str2);
  num2 -= 2;
}

console.log("-----------------------------------------");

// Menggunakan For
for (var i = 1; i <= 20; i++) {
  console.log(i + " - " + str);
}
for (var j = 20; j >= 1; j--) {
  console.log(j + " - " + str2);
}

console.log("-----------------------------------------");

//  Ganjil Genap
var counter = 1;
for (var i = 1; i <= 100; i++) {
  if (counter % 2 === 0) {
    console.log("GENAP");
    counter++;
  } else {
    console.log("GANJIL");
    counter++;
  }
}

// Kelipatan 3, 6, dan 10

var counter = 1;
for (var counter = 1; counter <= 100; counter++) {
  if (counter % 10 === 0) {
    console.log(counter + " KELIPATAN 10");
    counter += 9;
  } else if (counter % 6 === 0) {
    console.log(counter + " KELIPATAN 6");
    counter += 5;
  } else if (counter % 3 === 0) {
    console.log(counter + " KELIPATAN 3");
    counter += 2;
  } else {
    counter++;
  }
}
