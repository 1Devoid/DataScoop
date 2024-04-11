// Initialization for ES Users
import { Dropdown, initTWE } from 'tw-elements';

initTWE({ Dropdown });

function showNavbarUser() {
  let dropdownMenu = document.querySelector('#user-dropdown-wrap');

  if (dropdownMenu) {
    dropdownMenu.addEventListener('click', () => {
      dropdownMenu.classList.toggle('rounded-2xl');
      dropdownMenu.classList.toggle('rounded-t-2xl');
    });
  }
}

export default showNavbarUser;
