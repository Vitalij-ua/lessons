// document.addEventListener("click", function (e) {
// 	const targetElement = e.target;

// 	if (targetElement.closest('.icon-menu')) {
// 		document.documentElement.classList.toggle('menu-open');
// 		e.preventDefault();
// 	}
// });



// let documentActions = (e) => {
// 	const targetElement = e.target

// 	if (targetElement.closest('.icon-menu')) {
// 		document.documentElement.classList.toggle('open-menu')
// 	}
// }

// document.addEventListener('click', documentActions)



function menuInit() {
	if (document.querySelector(".icon-menu")) {
		document.addEventListener("click", function (e) {
			if (e.target.closest('.icon-menu')) {
				document.documentElement.classList.toggle("menu-open");
			}
			if (e.target.closest('.menu') && document.documentElement.classList.contains("menu-open")) {
				document.documentElement.classList.remove("menu-open");
			}
		});
	}
}
menuInit();

