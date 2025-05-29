class Animator {
  constructor() {
    this.items = [];
    this.observer = null;
    this.init();
  }

  init() {
    this.items = [...document.querySelectorAll('[data-animate]')];
    
    if(this.items.length === 0) return;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('animated');
          this.observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    this.items.forEach(item => {
      if(item) this.observer.observe(item);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => new Animator());