function outerFunction(outerVariable) {
  // This is the outer function scope
  function innerFunction(innerVariable) {
    // This is the inner function scope
    return outerVariable + innerVariable;
  }

  return innerFunction;
}

// Create closures by invoking the outer function with different arguments
const closure1 = outerFunction(10);
const closure2 = outerFunction(20);

// Using the closures
console.log(closure1(5)); // Output: 15 (10 + 5)
console.log(closure2(5)); // Output: 25 (20 + 5)


