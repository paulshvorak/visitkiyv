;(function () {

	var header = document.querySelector('.js-header');
	var menuBtn = document.querySelector('.js-menu');
	var sidebar = document.querySelector('.js-sidebar');
	var closeSidebar = document.querySelector('.js-sidebar-menu__close');
	var page = document.querySelector('.js-page');

	function showSidebar() {
		sidebar.classList.add('sidebar-menu--active');
	}

	function hideSidebar() {
		sidebar.classList.remove('sidebar-menu--active');
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

	window.onscroll = function() {
		setHeaderFixed();
	};

	function setHeaderFixed() {
		if (window.scrollY > 0) {
			header.classList.add('header--active');
		} else {
			header.classList.remove('header--active');
		}
	}

})();