//************************************************** */
//**********************JQUERY******************** */
//************************************************** */

//selecting

let $titles = $("h1");
$titles.get(); // returns an array of the DOM elements

/************************************************** */
//*****jQuery Text, HTML, Attributes, and Values**** */
//************************************************** */

//.text()
//Get the combined text contents of each element in the set of matched elements, including their descendants,
//or set the text contents of the matched elements.

let $titleText = $titles.text(); //"THE TITLE"
$("h1").text("A NEW TITLE"); // changes the title however the titles variable remains the same
$("li").text("CHANGING THE LI");

//.html()
// Get the HTML contents of the first element in the set of matched
//  elements or set the HTML contents of every matched element.

$("li").html("<b>CHANGING TO BOLD</b>");

// .attr()

// Get the value of an attribute for the first element in the set of matched
// elements or set one or more attributes for every matched element
// changing all image sources
$("img").attr(
  "src",
  "https://images.unsplash.com/photo-1589127939765-27aef18610f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=922&q=80"
);

//you can also pass the attr method an object to update multiple attributes
// at once. There is no way to bulk set attributes in vanilla js

const newAttrs = {
  src:
    "https://images.unsplash.com/photo-1589190086117-65899ee559c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
  alt: "BREAKFAST IS SERVED NIGGA",
};

$("img").attr(newAttrs);

// .val()

// Get the current value of the first element in the set of matched elements or set the value of every matched element.
// Contents:

$("input").val(); // will give you the first value that is inside of first input elemetn
$("input").eq(1).val(); // will give you the value inside the second input element

//************************************************** */
//**********************JQUERY& CSS CLASSES********* */
//************************************************** */

$("h1").css("color"); //"rgb(0, 0, 0)" this is the computed color or default color
$("h1").css("color", "red");

//we can set multiple properties at once using an object

const bigTealStyles = {
  color: "teal",
  fontSize: "40px",
};

$("h2").css(bigTealStyles);

//toggling classes;
let btn = document.querySelector(".button2");
btn.addEventListener("click", function () {
  $("h3").toggleClass("highlight");
  $("li").toggleClass("highlight");
});

//************************************************** */
//***************JQUERY METHOD CHAINING******** */
//************************************************** */

const $h4 = $("h4");

$h4
  .addClass("highlight")
  .css("background-color", "purple")
  .text("WE ARE CHAINING ALL DAY");

//************************************************** */
//***************jQuery Traversal ******************* */
//************************************************** */
const $secondP = $("p").eq("1");

$secondP.next(); // h3, next sibiling
$secondP.prev(); // H2, prev sibiling
$("li").prepend("<span>THIS IS A SPAN | </span>");
const $pan = $("ul").find("span"); // will look through the decendents to try and find the requested element

//************************************************** */
//*******jQuery Creating, Appending, Removing******* */
//************************************************** */
$secondP.before("<h2 class = 'highlight'>Added title before with jquery</h2>");

//************************************************** */
//*******************jQuery Events****************** */
//************************************************** */

// on works the same as click just more robust
$("img").on("mouseleave", function () {
  //   this.css("border", "6px solid red"); this wont work 'this' is returning a javascript object, we need to use jQuery
  $(this).css("border", "6px solid red");
});

//************************************************** */
//*****************jQuery Event Delegation*********** */
//************************************************** */

$("#add-input").on("click", function () {
  $("form").append('<input type="text"></input');
});

// $("input").on("focus", function () {
//   $(this).val("TRICKED YA BITCH");
// }); // wont work on new inputs added to the DOM

//we need to have event delgation on the parent element that is listneing
// on a desginated selector(input) for focus on any input element
$("form").on("focus", "input", function () {
  $(this).val("TRICKED YA BITCH"); // the value of this is set to the selector
});

//vanilla JS way
document.querySelector("form").addEventListener("click", function (e) {
  let target = e.target;
  if (target) {
    target.value = "HELLO";
  } else {
  }
});

//************************************************** */
//*****************jQuery animation*********** */
//************************************************** */
$("img").on("click", function () {
  $(this).fadeOut(function () {
    $(this).remove();
  });
});
