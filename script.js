const toggle = document.getElementById('navtoggle');
  const links = document.getElementById('navlinks');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));