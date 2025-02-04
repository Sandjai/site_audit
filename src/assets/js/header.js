document.addEventListener('DOMContentLoaded', () => {
  // Обработка кликов на навигации
  const headerList = document.querySelector('.js-header-list');
  headerList.addEventListener('click', e => {
    const target = e.target;
    const closestItemWrapper = target.closest('.header-list__item');

    if (!closestItemWrapper || target.classList.contains('header-nav-item_active')) return;

    const currentActive = headerList.querySelector('.header-nav-item_active');
    currentActive.classList.remove('header-nav-item_active');

    closestItemWrapper.classList.add('header-nav-item_active');
  });

  // Обработка кликов на гамбургер меню
  const hamburgerBtn = document.querySelector('.js-hamburger');
  const menu = document.querySelector('.js-header-menu');

  hamburgerBtn.addEventListener('click', () => {
    toggleMenuHamburger();

    if (hamburgerBtn.classList.contains('active')) {
      menu.addEventListener('click', onClickMenu);
    } else {
      menu.removeEventListener('click', onClickMenu);
    }
  });

  function onClickMenu(e) {
    const target = e.target;

    if (target.classList.contains('js-header-menu-item')) {
      toggleMenuHamburger();
      menu.removeEventListener('click', onClickMenu);
    }
  }

  function toggleMenuHamburger() {
    hamburgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
    menu.classList.toggle('hidden-on-mobile');

    if (hamburgerBtn.classList.contains('active')) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }
});
