var formAb = document.querySelector(".form-absensi");
var footerD = document.querySelector('.footerD');

// if(localStorage.getItem('theme') == 'tDark')
// 	darkmode(true)

function darkmode(isDark) {
	if (isDark) {
		document.body.setAttribute('id','dark');
		formAb.classList.remove("shadow-lg");
		formAb.setAttribute('id', 'bshadow');
		footerD.classList.toggle('d-none');
		// localStorage.setItem('theme', 'tDark');
	}else {
		document.body.setAttribute('id', '');
		formAb.classList.add("shadow-lg");
		formAb.setAttribute('id', '');
		footerD.classList.toggle('d-none');
		// localStorage.setItem('theme', '');
	}
}