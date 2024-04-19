function showSubmitLoader() {
  let submitLoaderBtn = document.getElementById('submit-loader-btn');

  if (submitLoaderBtn) {
    let submitLoader = document.getElementById('submit-loader');
    submitLoaderBtn.addEventListener('click', () => {
      submitLoader.classList.toggle('hidden');
      setTimeout(function () {
        submitLoader.classList.toggle('hidden');

        // Redirect logic for demonstration flow
        // window.location.href = 'http://localhost:3000/tabs-overview.html';
        ('https://1devoid.github.io/DataScoop/tabs-overview.html');
      }, 2000);
    });
  }
}

export default showSubmitLoader;
