describe("Allison's Inn Inventory System", function() {

  // example test:

  it("quality should degrade by 1 for regular items", function() {
    var items = [];
    items.push(new Item('Regular Item', 2, 10));
    update_quality(items);
    expect(items[0].quality).toBe(9);
  });

  // write more tests below to reach close to 100% code coverage before 
  // refactoring and adding new code to quality.js

  

});
