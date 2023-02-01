import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Triangle from './js/triangle.js';
import Rectangle from './js/rectangle.js';

function handleTriangleForm() {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
  const length1 = parseInt(document.querySelector('#length1').value);
  const length2 = parseInt(document.querySelector('#length2').value);
  const length3 = parseInt(document.querySelector('#length3').value);
  const triangle = new Triangle(length1, length2, length3);
  const response = triangle.checkType();
  const pTag = document.createElement("p");
  pTag.append(`Your result is: ${response}.`);
  document.querySelector('#response').append(pTag);
}

function handleRectangleForm() {
  event.preventDefault();
  document.querySelector('#response2').innerText = null;
  const length1 = parseInt(document.querySelector('#rect-length1').value);
  const length2 = parseInt(document.querySelector('#rect-length2').value);
  const rectangle = new Rectangle(length1, length2);
  const response = rectangle.getArea();
  const pTag = document.createElement("p");
  pTag.append(`The area of the rectangle is ${response}.`);
  document.querySelector('#response2').append(pTag);
}

window.addEventListener("load", function() {
  document.querySelector("#triangle-checker-form").addEventListener("submit", handleTriangleForm);
  document.querySelector("#rectangle-area-form").addEventListener("submit", handleRectangleForm);
});

// FROM LESSON 39: There are a few key things to note:

// We import both Triangle and Rectangle at the top of the file. As our projects grow in size and our UI needs access to more business logic files, we'd add more import statements there.
// When we append the result to our P tags, we use template literals to include a message.