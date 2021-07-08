function receivesAFunction(callback) {
  callback(); 
}

function returnsANamedFunction() {
  return function test() {
    console.log(5);
  }
}

function returnsAnAnonymousFunction() {
  return () => {
    console.log(7);
  }
}