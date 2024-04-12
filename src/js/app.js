'use strict';
import showPassword from './modules/show-password.js';
import secureNums from './modules/secure-nums.js';
import showVideoPopup from './modules/show-video-popup.js';
import showNavbarUser from './modules/show-navbar-user.js';
import editUserPhoto from './modules/edit-user-photo.js';
import editSettings from './modules/edit-settings.js';

showPassword('#password', '#password + #show-password');
showPassword('#new-password', '#new-password + #show-password');
showPassword('#confirm-new-password', '#confirm-new-password + #show-password');
secureNums();
showVideoPopup();
showNavbarUser();
editUserPhoto();
editSettings();
