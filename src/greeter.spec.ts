import greeter = require ('./greeter');

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    console.log('executing a test...');
    expect(greeter.greet("World")).toBe("World");
  });
});
