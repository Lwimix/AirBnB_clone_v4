import $ from jquery
$(document).ready(function () {
	$('input[type=checkbox]').change(
		function(){
			if (this.checked) {
				alert('checked');
			}
			else if (!this.checked) {
				alert('unchecked');
			}
		});
});
