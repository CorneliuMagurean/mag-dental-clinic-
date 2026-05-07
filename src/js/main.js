// Nav scroll style
const nav = document.getElementById('nav')
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 24)
}
window.addEventListener('scroll', onScroll, { passive: true })
onScroll()

// Reveal on scroll
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in')
        revealObserver.unobserve(e.target)
      }
    })
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
)
document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => revealObserver.observe(el))

// Animated counters
const ease = (t) => 1 - Math.pow(1 - t, 3)

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return
      const el = e.target
      const target = parseInt(el.dataset.target, 10)
      const duration = 1800
      const start = performance.now()

      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration)
        el.textContent = Math.round(target * ease(t)).toLocaleString('ro-RO')
        if (t < 1) requestAnimationFrame(tick)
      }

      requestAnimationFrame(tick)
      counterObserver.unobserve(el)
    })
  },
  { threshold: 0.5 }
)
document.querySelectorAll('.counter').forEach((c) => counterObserver.observe(c))

// Mobile nav toggle
document.getElementById('navToggle')?.addEventListener('click', () => {
  document.getElementById('servicii').scrollIntoView({ behavior: 'smooth', block: 'start' })
})
