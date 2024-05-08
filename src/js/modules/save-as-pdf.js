function saveAsPdf() {
  const saveBtn = document.querySelector('#save-btn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const element = document.body;
      html2pdf().from(element).save();
    });
  }
}

export default saveAsPdf;
