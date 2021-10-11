$(document).ready(init);

function init() {
	$.fn.scrollPath("getPath")
		.moveTo(100, 190, {name: "start"})
		.lineTo(200, 410, {
			name: "loadingPerson",
			callback: function() {
				$("#person").show();
				return;
			}
		})
		.lineTo(230, 410, {
			name: "loadingPerson",
			callback: function() {
				$("#person").hide();
				return;
			}
		})
		.lineTo(3500, 410, {name: "trees"})
		// Arc for taking off
		.arc(3500, 10, 400, Math.PI/2, 0, true)
		.lineTo(6600, 10, {
			name: "end"
		})
	$(".wrapper").scrollPath({wrapAround: false});
}
