
// ПЕРЕКЛЮЧЕНИЕ ТЕМЫ САЙТА
const mainVector = document.querySelector('.promo__img');
const mainVectorMob = document.querySelector('.promo__img_mob');
const logotip = document.querySelector('.header__logo-img');
const body = document.querySelector('body');

const themeBtn = [...document.querySelectorAll('.header__setting-theme')].forEach(themeBtn => {
	themeBtn.addEventListener('click', () => {
		themeBtn.classList.toggle('header__setting-theme_darck');
		body.classList.toggle('darck');

		// ЗАМЕНА КОНТЕНТА ГЛАВНОЙ SVG НА САЙТЕ
		let dataStatus = mainVector.getAttribute('data'); //создаем переменную для хранения статуса data 

		if (dataStatus === "img/bg/vectorSite.svg") {        			//если вектор для светлой темы
			mainVector.setAttribute('data', 'img/bg/vectorSiteDarck.svg')//меняем на вектор тнмной темы
		} else {  //если если вектор темной темы
			mainVector.setAttribute('data', 'img/bg/vectorSite.svg') //меняем меняем на светлый вектор 
		}
		// ЗАМЕНА КОНТЕНТА ГЛАВНОЙ мобильной SVG НА САЙТЕ

		let dataStatusMob = mainVectorMob.getAttribute('data'); //создаем переменную для хранения статуса data 

		if (dataStatusMob === "img/bg/vectorSiteMob.svg") {        			//если вектор для светлой темы
			mainVectorMob.setAttribute('data', 'img/bg/vectorSiteMobDark.svg')//меняем на вектор тнмной темы
		} else {  //если если вектор темной темы
			mainVectorMob.setAttribute('data', 'img/bg/vectorSiteMob.svg') //меняем меняем на светлый вектор 
		}

		//ЗАМЕНА ЛОГОТИПА ПРИ ТЕМНОЙ ТЕМЕ
		let logoSrc = logotip.getAttribute('src'); //создаем переменную для хранения статуса src

		if (logoSrc === "img/logo/main-logo.png") {        			//если логотип светлой темы
			logotip.setAttribute('src', 'img/logo/logo-darck.png')//меняем на логотип темной темы
		} else {  //если он темной темы
			logotip.setAttribute('src', 'img/logo/main-logo.png') //меняем на светлую
		}

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
const menuList = document.querySelector('.menu__list');

if (iconMenu) {
	// ОТКРЫТИЕ МЕНЮ-БУРГЕРА И АНИМАЦИЯ ЕГО ИКОНКИ
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		menuBody.classList.toggle('_active');
		iconMenu.classList.toggle('_active');

	});
	// ЗАКТРЫТИЕ МЕНЮ ПРИ КЛИКЕ НА ЕГО ПОКРОВ ИЛИ ССЫЛКУ
	menuList.addEventListener('click', function (e) {
		if (iconMenu.classList.contains('_active')) {
			menuBody.classList.remove('_active');
			iconMenu.classList.remove('_active');
		}
	})

}



