import './style.css'

const menuButton = document.querySelector('.menu-toggle')
const navigation = document.querySelector('#site-nav')
const mobile = window.matchMedia('(max-width: 52rem)')

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false')
}

menuButton.hidden = false

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true'
  menuButton.setAttribute('aria-expanded', String(!open))
})

navigation.addEventListener('click', (event) => {
  if (mobile.matches && event.target.closest('a')) {
    menuButton.focus()
    closeMenu()
  }
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobile.matches && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu()
    menuButton.focus()
  }
})

mobile.addEventListener('change', closeMenu)

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    }
  })

  for (const section of document.querySelectorAll('[data-reveal]')) {
    observer.observe(section)
  }
}
