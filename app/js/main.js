const themeBtn = document.querySelector('.header__setting-theme');
const body = document.querySelector('body');
const darckNone = document.querySelectorAll('.darck-none');

themeBtn.addEventListener('click', function (e) {
	themeBtn.classList.toggle('header__setting-theme_darck')
	body.classList.toggle('darck')
	darckNone.classList.toggle("none")
})
