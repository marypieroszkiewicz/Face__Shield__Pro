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

})