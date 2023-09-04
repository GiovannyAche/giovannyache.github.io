document.body.addEventListener("pointermove", (e) => {
  const { currentTarget: el, clientX: x, clientY: y } = e;
  const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
  el.style.setProperty('--posX', x - l - w / 2);
  el.style.setProperty('--posY', y - t - h / 2);
});

let cerrar = document.querySelectorAll('.close')[0];
let abrir0 = document.querySelectorAll('.mas')[0];
let abrir1 = document.querySelectorAll('.mas')[1];
let abrir2 = document.querySelectorAll('.mas')[2];
let abrir3 = document.querySelectorAll('.mas')[3];
let modal = document.querySelectorAll('.modal')[0];
let modalC = document.querySelectorAll('.modal-container')[0];

abrir0.addEventListener("click", function(a){
  a.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.toggle("modal-close")
  document.getElementById('title-modal').innerHTML = "trayectoria en java";
  document.getElementById('texto-modal').innerHTML = "A través de mi trabajo, he aprendido a utilizar frameworks y tecnologías populares en el ecosistema Java, como Spring, para desarrollar aplicaciones web. Además, he adquirido habilidades en el manejo de bases de datos relacionales y en la integración de sistemas.";
});

abrir1.addEventListener("click", function(a){
  a.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.toggle("modal-close")
  document.getElementById('title-modal').innerHTML = "trayectoria en javaScript";
  document.getElementById('texto-modal').innerHTML = "He trabajado en el desarrollo frontend con JavaScript, utilizando Angular, Vue y Node. Con Angular, he creado aplicaciones web escalables y robustas. Con Vue, he creado componentes reutilizables y utilizado su sistema de enlace de datos. También he utilizado Node.js para desarrollar aplicaciones del lado del servidor. Estoy emocionado por seguir aprendiendo y creciendo en JavaScript.";
});

abrir2.addEventListener("click", function(a){
  a.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.toggle("modal-close");
  document.getElementById('title-modal').innerHTML = "trayectoria en C#";
  document.getElementById('texto-modal').innerHTML = "Durante mi experiencia con el lenguaje C#, he tenido la oportunidad de crear diversas aplicaciones de escritorio con una interfaz gráfica atractiva y funcional, gracias a mi formación universitaria. He adquirido habilidades para establecer una comunicación eficiente y segura con sistemas de gestión de bases de datos como SQL Server y MySQL. Además, he desarrollado interfaces gráficas atractivas y fáciles de usar utilizando herramientas como Windows Forms. Estoy emocionado por seguir ampliando mis conocimientos y explorar nuevas posibilidades en el desarrollo de aplicaciones con C#.";
});

abrir3.addEventListener("click", function(a){
  a.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.toggle("modal-close");
  document.getElementById('title-modal').innerHTML = "trayectoria en C#";
  document.getElementById('texto-modal').innerHTML = "En Python, he trabajado con los frameworks Flask y Django para crear APIs y desarrollar el backend. Con Flask, he construido APIs rápidas y flexibles, mientras que con Django he desarrollado aplicaciones backend robustas y escalables. He utilizado bases de datos como MySQL y PostgreSQL y aplicado buenas prácticas de desarrollo. Estoy emocionado por seguir creciendo en el desarrollo backend con Python y sus frameworks.";
});

cerrar.addEventListener("click", function(){
  modalC.style.opacity = "0";
  modalC.style.visibility = "hidden";
  modal.classList.toggle("modal-close");
});

window.addEventListener("click", function(e){
  if(e.target == modalC){
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
    modal.classList.toggle("modal-close");
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  document.querySelector('.prev').addEventListener('click', prevSlide);
  document.querySelector('.next').addEventListener('click', nextSlide);

  showSlide(currentSlide);
});

document.addEventListener('DOMContentLoaded', function() {

  const swictherTheme = document.querySelector('.mySwitch');
  const root = document.documentElement;

  if(root.getAttribute('data-theme') === 'dark'){
    swictherTheme.checked = true;      
  } 

  function toggleTheme(){
      
      const setTheme = this.checked ? 'dark' : 'light';
      root.setAttribute('data-theme', setTheme);
  
      
  }
  

  swictherTheme.addEventListener('click', toggleTheme);

});
