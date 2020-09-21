alert('test');


function menu-width() {	
	if (document.documentElement.clientWidth < 1200) {
		alert('Ширина экрана меньше 1200px')
	} else {
		alert('Ширина экрана больше 1200px')
	};
}

menu-width();