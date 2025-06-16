$(document).ready(function () {
	$(function () {
		$('input[name="daterange"]').daterangepicker({
			autoApply: true,
			locale: {
				// format: "MMMM D, YYYY",
				format: "MMM D, YYYY",
			},
		});
	});
});
