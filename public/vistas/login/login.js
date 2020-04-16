$(document).ready(function () {

	$('.registro').click(function (e) { 
		e.preventDefault();
		console.log('gfaasd');
		$('.container').load('public/vistas/login/registrar.html');
	});
});