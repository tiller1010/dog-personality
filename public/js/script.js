window.onload = function(){

	var answers = document.querySelectorAll('.answer-container');
	answers.forEach(function(answer){
		answer.addEventListener('click', function(){
			this.children[0].checked = 'checked';
		});
	});

}