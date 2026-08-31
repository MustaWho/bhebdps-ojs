let links = Array.from(document.querySelectorAll('.menu__link'));

links.forEach(function(link) {
  link.onclick = function() {
    let menuItem = link.closest('.menu__item');
    let subMenu = menuItem.querySelector('.menu_sub');

    if (!subMenu) {
      return true;
    }

    let activeMenus = menuItem
      .closest('.menu')
      .querySelectorAll('.menu_sub.menu_active');

    activeMenus.forEach(function(activeMenu) {
      if (activeMenu !== subMenu) {
        activeMenu.classList.remove('menu_active');
      }
    });

    subMenu.classList.toggle('menu_active');

    return false;
  };
});
