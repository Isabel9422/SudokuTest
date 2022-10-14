import { check } from "./Isabel_Serna_test_javascript_algo_ex2.js";

var arrayRow = new Array(); // Create an array in order to check each row
var arrayColumn = new Array(); // Create an array in order to check each row

let x;

for(let i=0; i<9; i++){     //To check all rows
    for(let j=0; j<9; j++){
    x = document.querySelector(`tr.row${i} td#cell${j}`);
    arrayRow.push(x.innerHTML);
    }
}

console.log(arrayRow);

if (!(check(arrayRow))){
    alert('ERROR:ROW');
}

for(let i=0; i<9; i++){     //To check all columns
    for(let j=0; j<9; j++){
    x = document.querySelector(`tr.row${j} td#cell${i}`);
    arrayColumn.push(x.innerHTML);
    }
}

console.log(arrayColumn);


if (!(check(arrayColumn))){
    alert('ERROR:COLUMN');
}
