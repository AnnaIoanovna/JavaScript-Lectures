console.log($("h1").data("title"));
$("h1").data("title","test title");
$("h1").data("title", {
	"my":"sample",
	"object": ""
});
console.log($("h1").data("title"));
$("h1").data("myAttr", true);
console.log($("h1").data("myAttr"));
$("h1").attr("data-title", "new text");

$(":text").on("keyup", function(){
	$("h1").attr("data-title", this.value);
})

$("h1").removeData("myAttr");
console.log($("h1").data("myAttr"));