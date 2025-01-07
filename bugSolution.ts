function add(a: number, b: number): number {
  return a + b;
}

function isNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b; 
  } else {
    return 0; // Handle the case where inputs are not numbers.  Could throw an error instead.
  }
}

const result1 = addSafe(10, 20); // Correct usage
const result2 = addSafe("hello", "world"); // Safe usage with non-numbers
const result3 = addSafe(10, "world"); // Safe usage with mixed types