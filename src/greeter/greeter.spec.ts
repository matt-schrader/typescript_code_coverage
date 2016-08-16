import greeter from './greeter';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    console.log('executing a test...');

    var testGreeter = new greeter();
    expect(testGreeter.greet("World")).toBe("World");
  });
});
