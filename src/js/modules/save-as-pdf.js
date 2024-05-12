function saveAsPdf() {
  const saveBtn = document.querySelector('#download-btn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const element = document.body;
      html2pdf().from(element).save();
    });
  }
}

export default saveAsPdf;
