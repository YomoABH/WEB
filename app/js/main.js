
// ПЕРЕКЛЮЧЕНИЕ ТЕМЫ САЙТА
const body = document.querySelector('body');
const themeBtn = [...document.querySelectorAll('.header__setting-theme')].forEach(themeBtn => {
	themeBtn.addEventListener('click', () => {
		themeBtn.classList.toggle('header__setting-theme_darck')
		body.classList.toggle('darck')
	});
});

// КНОПКА ВЫБОРА  ЯЗЫКА
const langBtn = document.querySelector('.header__setting-lang');
const langList = document.querySelector('.header__setting-lang-list');

langBtn.addEventListener('click', function (e) {
	langList.classList.toggle('header__setting-lang-list_active')
})

const langEl = [...document.querySelectorAll('.header__setting-lang-el')].forEach(langEl => {
	langEl.addEventListener('click', () => {
		langBtn.textContent = langEl.textContent
		langList.classList.remove('header__setting-lang-list_active')
	});
});
// вторая кнопка в бургер меню
const langBtn2 = document.querySelector('.header__setting-lang_2');
const langList2 = document.querySelector('.header__setting-lang-list_2');

langBtn2.addEventListener('click', function (e) {
	langList2.classList.toggle('header__setting-lang-list_active')
})

const langEl2 = [...document.querySelectorAll('.header__setting-lang-el_2')].forEach(langEl2 => {
	langEl2.addEventListener('click', () => {
		langBtn2.textContent = langEl2.textContent
		langList2.classList.remove('header__setting-lang-list_active')
	});
});


// КНОПКА МЕНЮ БУРГЕРА
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		menuBody.classList.toggle('_active');
		iconMenu.classList.toggle('_active');
	});
}
