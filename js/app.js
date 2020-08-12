document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------- */
  /* ----- TOGGLE HEADER MENU ----- */
  /* ---------------------------------------------------- */

  const btn = document.querySelector('#btnToggle');
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.toggle('menu--show');
    this.classList.toggle('btn-toggle--toggled');
  });


  /* ---------------------------------------------------- */
  /* ----- HIGHLIGHT CURRENT PAGE ACTIVE MENU ITEM ----- */
  /* ---------------------------------------------------- */

  const items = document.querySelectorAll('.menu__link');

  function makeActive() {

    items.forEach(elem => elem.classList.remove('active'));
    this.classList.add('active');

  }

  items.forEach(elem => {
    elem.addEventListener('click', makeActive);
  });

  /* ---------------------------------------------------- */
  /* ----- PARALLAX ----- */
  /* ---------------------------------------------------- */

  const parallaxTitle = document.querySelector('.parallax__title');
  const parallaxBg = document.querySelector('.parallax__bg');

  window.addEventListener('scroll', function() {
    let scrolled = window.pageYOffset;
    parallaxTitle.style.transform = 'translateY(' + (scrolled * 0.08) + 'px)';
    parallaxBg.style.transform = 'translateY(' + (scrolled * 0.3 * -1) + 'px)';
  });

})