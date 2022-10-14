
var body = document.getElementsByTagName("body")[0];

var tabla = document.createElement("table");
var tblBody = document.createElement("tbody");

tabla.setAttribute("id","tabla");

var array_number = new Array(9);
array_number[0] = "4 2 7 3 5 1 9 8 6";
array_number[1] = "9 8 3 7 6 2 5 1 4";
array_number[2] = "1 5 6 8 9 4 7 2 3";
array_number[3] = "2 3 9 1 8 5 4 6 7";
array_number[4] = "7 4 1 6 3 9 2 5 8";
array_number[5] = "5 6 8 2 4 7 1 3 9";
array_number[6] = "8 7 2 9 1 3 6 4 5";
array_number[7] = "3 9 5 4 2 6 8 7 1";
array_number[8] = "6 1 4 5 7 8 3 9 6";

array_number = array_number.toString().replaceAll(" ", "");
array_number = array_number.toString().split(",");

for (var i = 0; i < 9; i++) {
  var row = document.createElement("tr");
  row.setAttribute("class",`row${i}`);    //We use setAttribute to be able to access to the values later
  for (var j = 0; j < 9; j++) {
    var cell = document.createElement("td");
    cell.setAttribute("id",`cell${i,j}`)
    var textocell = document.createTextNode(array_number[i][j]);
    cell.appendChild(textocell);
    row.appendChild(cell);
  }
  tblBody.appendChild(row);
}

tabla.appendChild(tblBody);
body.appendChild(tabla);
tabla.setAttribute("border", "2");
