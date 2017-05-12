$(window).on("resize", function () {
 console.log(window.innerWidth);
})

$(document).on("scroll", function () {
 console.log(window.scrollY);
})

$(document).ready(function () {
 console.log("document loaded");
})

$(function() {
 console.log("document loaded");
})

$("input").on("keydown", function() {
 console.log("keydown");
}).on("keypress", function() {
 console.log("keypress");
}).on("keyup", function(e) {
 console.log("keyup");
 console.log(e.keyCode);
 console.log(e.charCode)
})

$("h1").on("click", function () {
 console.log("click");
})

// $(document).on("contextmenu", false);
// $(document).on("contextmenu", "div", function(e) {
//  e.preventDefault();
//  $(e.target).stop().hide(300, function() {
//   $(":text").val($(":text").val() - 1);
//   if (!+$(":text").val()) {
//    alert("Victory!!!!");
//   }
//  });
// })

// for (var i = 0; i < 50; i++) {
//  var div = $("<div />");
//  div.css({
//   "position": "absolute",
//   "left": Math.random() * 1000 + "px",
//   "top": Math.random() * 400 + "px",
//   "width": "50px",
//   "height": "50px",
//   "background": "#fa0000"
//  });
//  $("body").append(div);
// }
// $("h1").on("dblclick", function(){
//   console.log("dblclick");
// })
// $("h1").on("mousedown", function(){
//   console.log("mousedown");
// })
// $("h1").on("mousemove", function(){
//   console.log("mousemove");
// })
// $("h1").on("mouseup", function(){
//   console.log("mouseup");
// })
$(":text").on("focus", function(){
  console.log("focus");
})
$(":text").on("focusin", function(){
  console.log("focusin");
})

$(":text").on("blur", function(){
  console.log("blur");
})
$(":text").on("focusout", function(){
  console.log("focusout");
}).on("change", function(){
  console.log($(this).val());
}).on("select", function(){
  console.log("select");
})

$(document).on("submit", function(e){
  e.preventDefault();
  console.log(e);
  console.log(this);
  console.log(e.target);
  console.log(e.type)
})

// $("h1").on("mousemove", function(e){
//    console.log("pageX", e.pageX);
//    console.log("offsetX", e.offsetX);
//    console.log("clientX", e.clientX);
//    console.log("screenX", e.screenX)
//  })

$("form").on("submit", function(e){
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  console.log(e.isDefaultPrevented());
  console.log(e.isPropagationStopped());
  console.log(e.isImmediatePropagationStopped());
  console.log("form submit")
}).on("submit", function(e){
  e.preventDefault();
  e.stopPropagation();
})

//console.log(location.href = "http://google.com");
// $("h1").on("click", function() {
//   window.open("http://google.com", "_self")
// })
$(".inner").wrap("<div class='new'/>");
$(".inner").wrapAll("<div class='new1'/>");
$(".new").wrapInner("<div class='newInner'/>");

$(".inner").unwrap();
$(".newInner").unwrap(".new1");
$(".inner:eq(0)").append(["<div class='test1'/>", "<div class='test2'/>", "<div class='test2'/>"]);
$(".inner:eq(1)").append($(".test1"));
$(".inner:eq(1)").prepend($(".test2"));
$(".test1").appendTo(".inner:eq(0)");
$(".test2").prependTo(".inner:eq(0)");

$(".test1").after("<div class='test3'/>");
$(".test2").before($(".test3"));

$(".test1").insertAfter($(".test3"));
$(".test1").insertBefore($(".test3"));

$(".inner:eq(0)").html('<div class="someDiv"></div>');
$(".inner:eq(1)").text('<div class="someDiv"></div>');
$(".inner:eq(1)").append('<div>Div with text</div>');
console.log($(".inner:eq(1)").text());

$(".inner:eq(0)").remove();
var tempInner = $(".inner:eq(0)").detach();
$(".newInner:eq(1)").append(tempInner);

$(".new:eq(0)").empty();

$(".new:eq(0)").replaceWith(["<div>1</div>", "<div>2</div>"]);
$("<div>1</div>").replaceAll('div:eq(0)');