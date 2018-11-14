/* Resize Window */
window.resizeTo(
	600 + (window.outerWidth - window.innerWidth),
	350 + (window.outerHeight - window.innerHeight)
);
window.focus();

var debug = false; // Enable with double-escape
var shiftKey = false; // 16
var ctrlKey = false; // 17
var altKey = false; // 18
var last_key = 0;

function save() {
	console.log("Saving");
}

function handleKey(e) {
	// Intercept Ctrl + S
	if (e.keyCode == 83 && ctrlKey) e.preventDefault();
	
	if (last_key == 27 && e.keyCode == 27) {
		console.log("Debug mode enabled");
		debug = true;
	}
}

function changeCharacter(num) {
	$("#overlay").css("display", "block");
	$("#overlay .overlay-header").css("background-color", "var(--p" + num + ")");
	$("#overlay .overlay-header .overlay-title").html("Change Player " + num + "'s Character");
	$.getJSON("/panel/web/character_images.php", function(data) {
		$("#overlay .image-folders").html("");
		console.log(Object.keys(data));
		/* $.each(Object.keys(data), function(index,folder) {
			console.log(folder);
			$("#overlay .image-folders").append("<div>" + folder + "</div>");
		}); */
	});
}
changeCharacter(1);

// Toggle sections
$(".ui-header").click(function() {
	if ($(this).closest(".ui-section").find(".ui-content").css("display") == "none") {
		$(this).closest(".ui-section").find(".ui-content").css("display", "block");
		$(this).find(".fas").removeClass("fa-plus-square").addClass("fa-minus-square");
	} else {
		$(this).closest(".ui-section").find(".ui-content").css("display", "none");
		$(this).find(".fas").addClass("fa-plus-square").removeClass("fa-minus-square");
	}
});

// Change character
$(".char-select .option.change").mouseover(function(e) {
	$("#tooltip").html("<img src=\"" + $(this).find("input").val() + "\">");
	$("#tooltip").css("display", "block");
});
$(".char-select .option.change").on("mouseover mousemove", function(e) {
	$("#tooltip").css({
		"left": e.clientX + 3 + $("#tooltip").width() > $(window).innerWidth() - 5 ? e.clientX - 3 - $("#tooltip").width() : e.clientX + 3,
		"top": e.clientY - 3 - $("#tooltip").height() > 0 ? e.clientY - 3 - $("#tooltip").height() : e.clientY + 3
	});
});
$(".char-select .option.change").mouseout(function(e) {
	$("#tooltip").css("display", "none");
});

$(".char-select .option.change").click(function() {
	changeCharacter($(this).closest(".pb").attr("player"));
});
$(".overlay-close").click(function() {
	$("#overlay").css("display", "none");
});

$(window).keydown(function(e) {
	if (debug) console.log("Down: " + e.keyCode);
	if (e.keyCode == 16) shiftKey = true;
	if (e.keyCode == 17) ctrlKey = true;
	if (e.keyCode == 18) altKey = true;
	handleKey(e);
	last_key = e.keyCode;
});
$(window).keyup(function(e) {
	if (debug) console.log("Up: " + e.keyCode);
	if (e.keyCode == 16) shiftKey = false;
	if (e.keyCode == 17) ctrlKey = false;
	if (e.keyCode == 18) altKey = false;
});

new SimpleBar($("#panel")[0]);