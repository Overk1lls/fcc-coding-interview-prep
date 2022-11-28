export function zero(fn) {
  return fn ? fn(0) : 0;
}

export function one(fn) {
  return fn ? fn(1) : 1;
}

export function two(fn) {
  return fn ? fn(2) : 2;
}

export function three(fn) {
  return fn ? fn(3) : 3;
}

export function four(fn) {
  return fn ? fn(4) : 4;
}

export function five(fn) {
  return fn ? fn(5) : 5;
}

export function six(fn) {
  return fn ? fn(6) : 6;
}

export function seven(fn) {
  return fn ? fn(7) : 7;
}

export function eight(fn) {
  return fn ? fn(8) : 8;
}

export function nine(fn) {
  return fn ? fn(9) : 9;
}

export function plus(num) {
  return (value) => value + num;
}

export function minus(num) {
  return (value) => value - num;
}

export function times(num) {
  return (value) => value * num;
}

export function dividedBy(num) {
  return (value) => value / num;
}
