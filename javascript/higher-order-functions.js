// function greaterThan(n) {
//     return m => m > n;
//   }
//   let greaterThan10 = greaterThan(10);
//   console.log(greaterThan10(11));
// console.log(greaterThan10);

function greaterThan(n) {
  return m => m > n;
}
let greaterThan20 = greaterThan(20);
// console.log(greaterThan20(10));
console.log(greaterThan(20)(10));

function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);