function filterRange (arr, a, b) {
  let res = [];
  for (let i=0; i<arr.length; i++) {
    if (a<arr[i] && arr[i]<b) res.push(arr[i]);
  }
  return console.log(res);
}



let arr = [5, 3, 8, 1];

filterRange(arr, 1, 4); 