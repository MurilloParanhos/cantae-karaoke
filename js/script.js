const waToggle = document.getElementById('wa-toggle');
  const waMenu = document.getElementById('wa-menu');

  function closeMenu(){
    waMenu.classList.remove('open');
    waToggle.setAttribute('aria-expanded', 'false');
  }

  waToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = waMenu.classList.toggle('open');
    waToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  document.addEventListener('click', (e) => {
    if (!waMenu.contains(e.target) && e.target !== waToggle){
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Floating WhatsApp button menu
  const fabToggle = document.getElementById('fab-toggle');
  const fabMenu = document.getElementById('fab-menu');

  function closeFab(){
    fabMenu.classList.remove('open');
    fabToggle.setAttribute('aria-expanded', 'false');
  }

  fabToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = fabMenu.classList.toggle('open');
    fabToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  document.addEventListener('click', (e) => {
    if (!fabMenu.contains(e.target) && e.target !== fabToggle){
      closeFab();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeFab();
  });

  // Navbar shows after scrolling past the hero
  const navbar = document.getElementById('navbar');
  const hero = document.querySelector('.hero');
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      navbar.classList.toggle('visible', !entry.isIntersecting);
    });
  }, { threshold: 0.1 });
  navObserver.observe(hero);

  // Reveal sections on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => revealObserver.observe(el));
