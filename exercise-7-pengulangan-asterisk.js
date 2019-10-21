var rows1 = 5; // input the number of rows
var ast = "";

for (var i = 0; i < rows1; i++) {
  ast += "*";
  console.log(ast);
  ast = "";
}

var rows2 = 5; // input the number of rows
var ast2 = "";

for (var i = 0; i < rows2; i++) {
  for (var j = 0; j < rows2; j++) {
    ast2 += "*";
  }
  console.log(ast2);
  ast2 = "";
}

var rows3 = 5; // input the number of rows
var ast3 = "";

for (var i = 0; i < rows3; i++) {
  for (var j = 0; j < i + 1; j++) {
    ast3 += "*";
  }
  console.log(ast3);
  ast3 = "";
}
