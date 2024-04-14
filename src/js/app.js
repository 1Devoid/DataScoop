'use strict';
import showPassword from './modules/show-password.js';
import secureNums from './modules/secure-nums.js';
import showVideoPopup from './modules/show-video-popup.js';
import showThanksPopup from './modules/show-thanks-popup.js';
import showNavbarUser from './modules/show-navbar-user.js';
import editUserPhoto from './modules/edit-user-photo.js';
import editSettings from './modules/edit-settings.js';
import rotateArrowInput from './modules/rotate-arrow-input.js';
import checkCheckbox from './modules/check-checkbox.js';
import truncateText from './modules/truncate-text.js';
import selectAllCheckbox from './modules/select-all-checkbox.js';

showPassword('#password', '#password + #show-password');
showPassword('#new-password', '#new-password + #show-password');
showPassword('#confirm-new-password', '#confirm-new-password + #show-password');
secureNums();
showVideoPopup();
showNavbarUser();
editUserPhoto();
editSettings();
showThanksPopup();
rotateArrowInput();
checkCheckbox();
truncateText();
selectAllCheckbox();

import { Collapse, initTWE } from 'tw-elements';
initTWE({ Collapse });
