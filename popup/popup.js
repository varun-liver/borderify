document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("fileInput");
  const status = document.getElementById("status");

  fileInput.addEventListener("change", event => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const domains = reader.result
        .split("\n")
        .map(line => line.trim())
        .filter(Boolean); // Remove empty lines

      // Send domains to content.js
      browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
        browser.tabs.sendMessage(tabs[0].id, { allowedDomains: domains });
        status.textContent = "✅ Domains sent to content script.";
      });
    };
    reader.readAsText(file);
  });
});
