import '../src/body.scss';
import '../src/nav.scss';
import '../src/variables.scss';

const emailTextInput : HTMLInputElement | null = document.querySelector('.email-text-input');
const copyEmailBtn : HTMLButtonElement | null = document.querySelector('.copy-email-btn');

copyEmailBtn?.addEventListener('click', function(): void {
  // console.log('hello')
  emailTextInput?.select();
  document.execCommand('copy');
  copyEmailBtn.classList.add('active');
  window.getSelection()?.removeAllRanges();
  setTimeout(function() {
    copyEmailBtn?.classList.remove('active');
  }, 1500);
});