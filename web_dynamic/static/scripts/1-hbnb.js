import $ from jquery
$(document).ready(function () {
	$('input[type=checkbox]').change(
		function(){
			if (this.checked) {
				var amenId = $(this).data('id');
			}
			else {
				alert('unchecked');
			}
		});
});
