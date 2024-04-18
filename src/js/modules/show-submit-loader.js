function showSubmitLoader() {
  let submitLoaderBtn = document.getElementById('submit-loader-btn');

  if (submitLoaderBtn) {
    let submitLoader = document.getElementById('submit-loader');
    submitLoaderBtn.addEventListener('click', () => {
      submitLoader.classList.toggle('hidden');
      setTimeout(function () {
        submitLoader.classList.toggle('hidden');

        // Redirect logic for demonstration flow
        window.location.href = 'http://datascoop.io/tabs-overview.html';
      }, 2000);
    });
  }
}

export default showSubmitLoader;
