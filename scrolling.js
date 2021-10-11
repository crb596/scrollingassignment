$(document).ready(init);

function init() {
	/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */

	$.fn.scrollPath("getPath")
		// Move to 'start' element
		.moveTo(100, 190, {name: "start"})
		// Line to 'description' element
		.lineTo(300, 650, {name: "loadingPerson"})
		// Arc down and line to 'syntax'
		.arc(200, 1200, 400, -Math.PI/2, Math.PI/2, true)
		// Arc up while rotating
		.arc(1800, 1000, 600, Math.PI/2, 0, true, {rotate: Math.PI/2 })
		// Line to 'rotations'
		.lineTo(2400, 750, {
			name: "tree2"
		})
		// Rotate in place
		// .rotate(3*Math.PI/2, {
		// 	name: "rotations-rotated"
		// })
		// // Continue upwards to 'source'
		// .lineTo(2400, -700, {
		// 	name: "source"
		// })
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
