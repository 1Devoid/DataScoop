function updateBtnText(reportTypeInputsSelector, btnReportTypeSelector) {
  const reportTypeInputs = document.querySelectorAll(reportTypeInputsSelector);
  const btnReportType = document.getElementById(btnReportTypeSelector);
  if (btnReportType) {
    reportTypeInputs.forEach(function (input) {
      input.addEventListener('click', function () {
        const label = this.nextElementSibling;
        if (label.tagName.toLowerCase() === 'label') {
          btnReportType.innerText = label.textContent;
          btnReportType.insertAdjacentHTML(
            'beforeend',
            `
            <svg class="rotate-180" width="20" height="20" viewBox="0 0 20 20" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd"
                       d="M4.41083 6.91058C4.73626 6.58514 5.2639 6.58514 5.58934 6.91058L10.0001 11.3213L14.4108 6.91058C14.7363 6.58514 15.2639 6.58514 15.5893 6.91058C15.9148 7.23602 15.9148 7.76366 15.5893 8.08909L10.5893 13.0891C10.2639 13.4145 9.73626 13.4145 9.41083 13.0891L4.41083 8.08909C4.08539 7.76366 4.08539 7.23602 4.41083 6.91058Z"
                       fill="#828385" />
          `
          );
        }
      });
    });
  }
}

export default updateBtnText;
