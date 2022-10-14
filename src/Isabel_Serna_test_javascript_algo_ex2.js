export function check(arr) {
  var working = true; //To check if input is NaN or is repeated

  console.log(arr.length);

  for (let k = 0; k < 9; k++) {
    for (let s = k + 1; s < 9; s++) {
      if (arr[k] === arr[s]) {
        console.log("got it");
        working = false;
      }
    }
  }

  for (const e of arr) {
    if (e > 10 || e < 0 || e.toString().match(/[^1-9]/g)) {
      //In order to check if it's a number, and if it's between 1 to 9
      console.log("You have to write numbers.");
      working = false;
    }
  }

  if (working) {
    console.log('This row is correct !');
    return true;
  } else {
    console.log("You have written the same number twice");
    return false;
  }
}
