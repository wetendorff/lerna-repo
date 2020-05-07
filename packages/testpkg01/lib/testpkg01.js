"use strict";

module.exports = testpkg01;

function sum(a, b) {
  return a + b;
}

// Added comment
function testpkg01(param, param2, param3) {
  console.log("Hello from test package 1: " + param); // Added more comments
}
