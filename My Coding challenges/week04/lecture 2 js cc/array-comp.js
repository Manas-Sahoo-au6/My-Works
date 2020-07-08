//print the comparing of both array
var arr1 = [1, 2, 3, 4, 3];
var arr2 = [1, 2, 3, 4, 5];

if (arr1.length !== arr2.length) {
  console.log("Arrays are not equal");
} else {
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log("Arrays are not equal");
      return;
    }
  }
  console.log("Arrays are equal");
}