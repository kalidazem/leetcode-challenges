const fib = (n) => {
  console.log(">>>>", n, "<<<<");
  if (n <= 1) return 1;
  return fib(n - 1) + fib(n - 2);
};

/**
 * 6 => 5  & 4
 * 5 => 4 & 3
 * 4 => 3 & 2
 * 3 => 2 & 1
 * 2 => 1 & 0
 * 1 => 1
 */

//[Done] exited with code=null in >>>>>>>4.579 seconds<<<<<<<< --> never yielded results;
let test1 = fib(5);
console.log(test1);

const fibWithMemoization = (n, memo) => {
  memo = memo || {};
  if (memo[n]) return memo[n];

  if (n <= 1) return 1;

  return (memo[n] =
    fibWithMemoization(n - 1, memo) + fibWithMemoization(n - 2, memo));
};


//[Done] exited with code=0 in >>>>>>>>>0.084 seconds<<<<<<<<<
// let test = fibWithMemoization(50);
// console.log(test);
