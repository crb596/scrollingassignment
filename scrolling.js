$(document).ready(init);

function init() {
	/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */

	$.fn.scrollPath("getPath")
		// Move to 'start' element
		.moveTo(100, 190, {name: "start"})
		// Line to 'description' element
		.lineTo(200, 410, {
			name: "loadingPerson",
			callback: function() {
				$("#person").show();
				return;
			}
		})
		// Line to 'description' element
		.lineTo(230, 410, {
			name: "loadingPerson",
			callback: function() {
				$("#person").hide();
				return;
			}
		})
		// Line to 'description' element
		.lineTo(3500, 410, {name: "trees"})
		// Arc down and line to 'syntax'
		.arc(3500, 10, 400, Math.PI/2, 0, true)
		// Rotate in place
		// .rotate(3*Math.PI/2, {
		// 	name: "rotations-rotated"
		// })
		// // Continue upwards to 'source'
		.lineTo(5000, 10, {
			name: "end"
		})
		// // Small arc downwards
		// .arc(2250, -700, 150, 0, -Math.PI/2, true)

		// //Line to 'follow'
		// .lineTo(1350, -850, {
		// 	name: "follow"
		// })
		// // Arc and rotate back to the beginning.
		// .arc(1300, 50, 900, -Math.PI/2, -Math.PI, true, {rotate: Math.PI*2, name: "end"});

	// We're done with the path, let's initate the plugin on our wrapper element
	$(".wrapper").scrollPath({drawPath: true, wrapAround: false});
}
