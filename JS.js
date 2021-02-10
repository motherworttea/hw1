window.addEventListener('load', function(){
	let newPage = document.getElementById("newPage");
	let pageChange = document.getElementById("pageChange");
	newPage.addEventListener('click', function(){
		window.location.href = "http://mgke.minsk.edu.by";
	});
	pageChange.addEventListener('click', function(){
		document.body.style.background = "linear-gradient(to bottom, #4a56ff, #a44aff)";
	});
});