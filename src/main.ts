import './body.scss';
import './front-page.scss';
import './nav.scss';

const menuBtnDesktop: HTMLButtonElement | null = document.querySelector('.menu-btn-desktop');
const menuBtnMobile: HTMLButtonElement | null = document.querySelector('.menu-btn-mobile');
const navUlDesktop: HTMLUListElement | null = document.querySelector('.nav-ul');
const navUlMobile: HTMLUListElement | null = document.querySelector('.nav-ul-mobile');

menuBtnDesktop?.addEventListener('click', function(): void {
  navUlDesktop?.classList.toggle('show');
  menuBtnDesktop.classList.toggle('show');
})

menuBtnMobile?.addEventListener('click', function(): void {
  navUlMobile?.classList.toggle('show');
  menuBtnMobile.classList.toggle('show');
  console.log('hello')
})
