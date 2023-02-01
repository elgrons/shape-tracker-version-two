import Rectangle from '../src/js/rectangle.js';

describe('Rectangle', () => {

  test('should correctly create a rectangle object using two sides', () => {
    const rectangle = new Rectangle(3,5);
    expect(rectangle.side1).toEqual(3);
    expect(rectangle.side2).toEqual(5);
  });

  test('should correctly get the area of a rectangle object', () => {
    const rectangle = new Rectangle(3,5);
    expect(rectangle.getArea()).toEqual(15);
  });
});

// Here's the updated tests refactored to use beforeEach():

// __tests__/rectangle.test.js
// import Rectangle from '../src/js/rectangle.js';

// describe('Rectangle', () => {
//   let rectangle;

//   beforeEach(() => {
//     rectangle = new Rectangle(3,5);
//   });

//   test('should correctly create a rectangle object using two sides', () => {
//     expect(rectangle.side1).toEqual(3);
//     expect(rectangle.side2).toEqual(5);
//   });

//   test('should correctly get the area of a rectangle object', () => {
//     expect(rectangle.getArea()).toEqual(15);
//   });
// });