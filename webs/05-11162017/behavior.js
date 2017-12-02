const hiddenClass = "hidden";

function toggleForm(button){
	if (!isSelected(button)){
		$("#login").toggleClass(hiddenClass);
		$("#signup").toggleClass(hiddenClass);
	}
}

function isSelected(button){
	const selectedButtonClass = "selected-button";
	return button.hasClass(selectedButtonClass);
}

$(document).ready(function() {
	$(".top-button").click(function() {
		let currentButton = $(this);
		toggleForm(currentButton);
	});
	$(".forgot-password").click(function (){
		$("form").addClass(hiddenClass);
		$("#psw-reset").removeClass(hiddenClass);	
	});

	$(".cancel-revocery").click(function (){
		$("form").addClass(hiddenClass);
		$("#login").removeClass(hiddenClass);
	});
});