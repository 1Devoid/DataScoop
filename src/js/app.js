'use strict';

import { Collapse, Tab, initTWE } from 'tw-elements';
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
import showSubmitLoader from './modules/show-submit-loader.js';
import showSettings from './modules/show-settings.js';
import showSharePopup from './modules/show-share-popup.js';
import showContextPopups from './modules/show-context-popup.js';
import showCustomizePopup from './modules/show-customize-popup.js';
import {
  chartValueInit,
  chartValueDifference,
  waterfallChart,
} from './modules/chart-init.js';

initTWE({ Collapse, Tab });
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
showSubmitLoader();
showSettings();
showSharePopup();
showContextPopups();
showCustomizePopup();
chartValueInit();
chartValueDifference();
waterfallChart();
