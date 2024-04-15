function showSettings(params) {
  let settingsBtn = document.getElementById('settings-btn');

  if (settingsBtn) {
    settingsBtn.addEventListener('click', function () {
      document.getElementById('settings-panel').classList.toggle('hidden');
      document.getElementById('settings-btn-icon').classList.toggle('hidden');
      document.getElementById('settings-btn-close').classList.toggle('hidden');
    });
  }
}

export default showSettings;
