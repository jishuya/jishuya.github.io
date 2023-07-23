'use strict';

// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
// const headerHeight = header.getBoundingClientRect().height;
const headerHeight = header.offsetHeight;

document.addEventListener('scroll', ()=>{
    if(window.scrollY > headerHeight){
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark')
    }
})

// Home 섹션을 아래로 스크롤시 글자 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', ()=>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
})


// Arrow up버튼을 아래로 스크롤시 투명하게 처리함
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});


// Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  // toggle은 기존에 없으면 추가하고 있으면 제거
  navbarMenu.classList.toggle('open');
});

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});


// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');

categories.addEventListener('click', (event)=>{
    const filter = event.target.dataset.category;
 
    if(filter === null){
        return;
    }
    projects.forEach((project) => {
      if (filter === 'all' || filter === project.dataset.type) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });

})
