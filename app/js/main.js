
// ПЕРЕКЛЮЧЕНИЕ ТЕМЫ САЙТА
const themeBtn = document.querySelector('.header__setting-theme');
const body = document.querySelector('body');
const darckNone = document.querySelectorAll('.darck-none');

themeBtn.addEventListener('click', function (e) {
	themeBtn.classList.toggle('header__setting-theme_darck')
	body.classList.toggle('darck')
	darckNone.classList.toggle("none")
})

// КНОПКА ВЫБОРА  ЯЗЫКА
const langBtn = document.querySelector('.header__setting-lang');
const langList = document.querySelector('.header__setting-lang-list');
// const langEl = document.querySelectorAll('.header__setting-lang-el');

langBtn.addEventListener('click', function (e) {
	langList.classList.toggle('header__setting-lang-list_active')

})

let langEl = [...document.querySelectorAll('.header__setting-lang-el')].forEach(langEl => {
	langEl.addEventListener('click', () => {
		langBtn.textContent = langEl.textContent
		langList.classList.remove('header__setting-lang-list_active')
	});
});