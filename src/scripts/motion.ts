import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.05,
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.72,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 84%',
      },
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-portfolio-grid]').forEach((grid) => {
    const cards = grid.querySelectorAll('[data-portfolio-card]');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 34, rotateX: 8 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.82,
        ease: 'power3.out',
        stagger: 0.13,
        scrollTrigger: {
          trigger: grid,
          start: 'top 78%',
        },
      },
    );
  });

  document.querySelectorAll<HTMLElement>('[data-portfolio-card], .magnetic-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      gsap.to(card, {
        rotateY: x * 5,
        rotateX: y * -5,
        transformPerspective: 900,
        duration: 0.28,
        ease: 'power2.out',
      });
    });

    card.addEventListener('pointerleave', () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.45,
        ease: 'power3.out',
      });
    });
  });

} else {
  document.querySelectorAll('.reveal').forEach((element) => {
    element.classList.remove('reveal');
  });
}
