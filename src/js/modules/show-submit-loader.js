function showSubmitLoader() {
  let submitLoaderBtn = document.getElementById('submit-loader-btn');

  if (submitLoaderBtn) {
    let submitLoader = document.getElementById('submit-loader');
    submitLoaderBtn.addEventListener('click', () => {
      submitLoader.classList.toggle('hidden');
      setTimeout(function () {
        submitLoader.classList.toggle('hidden');
      }, 2000);
    });
  }
}

export default showSubmitLoader;
