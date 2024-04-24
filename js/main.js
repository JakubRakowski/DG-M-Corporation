const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const allNavItem = document.querySelectorAll('.nav__link')
const footerYear = document.querySelector('.footer__year')
const allSections = document.querySelectorAll('.section')
const nav = document.querySelector('.nav-desktop')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
	allNavItem.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active')
			navBtn.classList.remove('is-active')
		})
	})
}
const handleTwoObserver = () => {
	const currentSection = window.scrollY

	allSections.forEach(section => {
		if (section.classList.contains('darker-section') && section.offsetTop <= currentSection + 60) {
			nav.classList.add('nav-darker-bg')
		} else if (!section.classList.contains('darker-section') && section.offsetTop <= currentSection + 60) {
			nav.classList.remove('nav-darker-bg')
		}
	})
}
const handleThreeObserver = () => {
	const currentSection = window.scrollY

	allSections.forEach(section => {
		if (section.classList.contains('red-section') && section.offsetTop <= currentSection + 60) {
			nav.classList.add('nav-red-bg')
		} else if (!section.classList.contains('red-section') && section.offsetTop <= currentSection + 60) {
			nav.classList.remove('nav-red-bg')
		}
	})
}

navBtn.addEventListener('click', handleNav)

const handleObserver = () => {
	const currentSection = window.scrollY

	allSections.forEach(section => {
		if (navBtn.classList.contains('is-active') && section.offsetTop <= 60) {
			navMobile.classList.remove('nav-mobile--active')
			navBtn.classList.remove('is-active')
		}
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
window.addEventListener('scroll', handleObserver)
window.addEventListener('scroll', handleTwoObserver)
window.addEventListener('scroll', handleThreeObserver)
