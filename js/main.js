const searchIcon = document.querySelector('#searchIcon');
const searchInput = document.querySelector('#searchArea');
const closeSearch = document.querySelector('#closeSearch');

searchIcon.onclick = function () {
  searchInput.classList.add('search-input--open'); 
  console.log('all');
}

closeSearch.onclick = function () {
  searchInput.classList.remove('search-input--open');
  console.log('click');
};

// mobile search
const searchIconMob = document.querySelector('#searchIcon-mobile');
const searchInputMob = document.querySelector('#searchArea-mobile');
const closeSearchMob = document.querySelector('#closeSearch-mobile');

  searchIconMob.onclick = function () {
    searchInputMob.classList.add('search-input--open');
    searchInputMob.focus();  
};

  closeSearchMob.onclick = function () {
  searchInputMob.classList.toggle('search-input--open');
};

//mobile menu
const menuOpenBtn = document.querySelector('#mobileMenu');
const mobilMenu = document.querySelector('#mobileMenuWindow');
const menuCloseBtn = document.querySelector('#closeMenu');

menuOpenBtn.onclick = function () {
  mobilMenu.classList.add('mobile-menu--open');
};

menuCloseBtn.onclick = function () {
  mobilMenu.classList.remove('mobile-menu--open');
}