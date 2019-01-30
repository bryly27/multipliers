function findMultipliers(arr) {

  if (arr.length < 5) {
    return false;
  }

  arr.sort((a, b) => {
    return a - b;
  });

  if (arr.length === 5) {
    return arr[0] * arr[1] * arr[2] * arr[3] * arr[4]
  } else {
    return Math.max(
      arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3] * arr[arr.length - 4] * arr[arr.length - 5],
      arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3] * arr[0] * arr[1],
      arr[0] * arr[1] * arr[2] * arr[3] * arr[arr.length - 1]
    );
  } 
}