import './body.scss';
import './front-page.scss';
import './nav.scss';

const menuBtn: HTMLButtonElement | null = document.querySelector('.menu-btn');
const navUl: HTMLUListElement | null = document.querySelector('.nav-ul');

menuBtn?.addEventListener('click', function(): void {
  navUl?.classList.toggle('show');
  menuBtn.classList.toggle('show');
})
