// popup.js
document.getElementById("resetButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const fileInput = document.getElementById('fileInput');

    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const fileContent = event.target.result;
        console.log(fileContent);
      };

      reader.readAsText(file);
    });
  });
});
