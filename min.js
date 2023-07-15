var arr = [3, 6, 2, 56, 32, 5, 89, 325];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] < largest) {
    largest = arr[i];
  }
}
console.log(largest);
