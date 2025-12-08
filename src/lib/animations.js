import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Shared ScrollTrigger config
const SCROLL_CONFIG = {
  start: 'top 85%',
  toggleActions: 'play none none none',
};

// Shared animation easing
const EASE = 'power3.out';


// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', initAnimations);

function initAnimations() {
  initFadeUpAnimations();
  initMobileMenuAnimation();

  // Handle hash navigation after animations have likely caused layout shifts
  if (window.location.hash) {
    setTimeout(() => {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200); // Small delay to allow layout to settle
  }
}

// Fade-up animation for elements
function initFadeUpAnimations() {
  const elements = document.querySelectorAll("[data-animate='fade-up']");
  if (!elements.length) return;

  const isSmallDevice = window.innerWidth < 768;

  if (isSmallDevice) {
    // On small devices, animate each element independently
    elements.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: EASE,
        scrollTrigger: { ...SCROLL_CONFIG, trigger: el },
      });
    });
  } else {
    // On larger devices, group by parent and use stagger
    const grouped = new Map();
    elements.forEach((el) => {
      const parent = el.parentElement;
      if (!grouped.has(parent)) {
        grouped.set(parent, []);
      }
      grouped.get(parent).push(el);
    });

    // Animate each group with stagger
    grouped.forEach((group, parent) => {
      if (group.length > 1) {
        // Multiple elements in same container - use stagger
        gsap.from(group, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: EASE,
          stagger: 0.15,
          scrollTrigger: { ...SCROLL_CONFIG, trigger: parent },
        });
      } else {
        // Single element - animate independently
        gsap.from(group[0], {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: EASE,
          scrollTrigger: { ...SCROLL_CONFIG, trigger: group[0] },
        });
      }
    });
  }
}

// Mobile menu animation
function initMobileMenuAnimation() {
  const mobileMenu = document.getElementById("mobile-menu");
  const menuItems = document.querySelectorAll(".menu-animate-item");

  if (!mobileMenu || !menuItems.length) return;

  // Initial set
  gsap.set(menuItems, {
    y: 20,
    opacity: 0,
  });

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "data-open"
      ) {
        const isOpen = mobileMenu.dataset.open === "true";

        if (isOpen) {
          gsap.to(menuItems, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.out",
            delay: 0.1,
          });
        } else {
          // Reset instantly when closing
          gsap.set(menuItems, {
            y: 20,
            opacity: 0,
          });
        }
      }
    });
  });

  observer.observe(mobileMenu, {
    attributes: true,
    attributeFilter: ["data-open"],
  });
}