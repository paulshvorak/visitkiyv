;(function () {

	var header = document.querySelector('.js-header');
	var menuBtn = document.querySelector('.js-menu');
	var sidebar = document.querySelector('.js-sidebar');
	var closeSidebar = document.querySelector('.js-sidebar-menu__close');
	var page = document.querySelector('.js-page');

	function showSidebar() {
		header.classList.add('open');
	}

	function hideSidebar() {
		header.classList.remove('open');
	}

	function toggleScroll() {
		page.classList.toggle('menu-open');
	}

	menuBtn.onclick = function () {
		showSidebar();
		toggleScroll();
	}

	closeSidebar.onclick = function () {
		hideSidebar();
		toggleScroll();
	}


})();