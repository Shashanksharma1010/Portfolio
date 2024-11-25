let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('default')
}
else {
	setTheme(theme)
}

var themeDot = document.querySelectorAll('.theme-dot');

for (var i=0; themeDot.length > i; i++){
	themeDot[i].addEventListener('click', function() {
		var mode = this.dataset.mode;
		console.log('Option clicked:', mode)
		setTheme(mode);
	})
} 

function setTheme(mode) {
	document.querySelector('#theme-style').href = "static" + "/" + mode + '.css'
	localStorage.setItem('theme', mode)
}

function setMainTheme() {
	let mainTheme = document.querySelector('.mainTheme');
	let mainThemeType = mainTheme.getAttribute("data-color");
	var flag, secText;
	if (mainThemeType == '#f2f2f2') 
	{
		flag = '#121212'; secText = 'rgb(40, 40, 40)'
		mainTheme.innerHTML = `<i class="fa-solid fa-moon"></i>`;
		mainTheme.style.color = flag;
	}
	if (mainThemeType == '#121212') {
		flag = '#f2f2f2'; secText = 'rgb(200, 198, 198)'
		mainTheme.innerHTML = `<i class="fa-solid fa-sun"></i>`;
		mainTheme.style.color = flag;
	}
	let root = document.querySelector(':root');
	root.style.setProperty('--mainColor', mainThemeType);
	root.style.setProperty('--mainText', flag);
	root.style.setProperty('--secondaryText', secText);
	document.querySelector('.mainTheme').setAttribute('data-color', flag);
}

function fullSize(id) {
	document.getElementById(id).classList.add('default-picture-website');
	for (i=1; i<6; i++ ) {
		if(i!=id) {
			document.getElementById(i).classList.remove('default-picture-website');
		}
	}
}
