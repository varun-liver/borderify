// popup.js
document.getElementById("resetButton").addEventListener("click", () => {
  // 1. Connect to the background
  const port = chrome.runtime.connect({ name: "popup-connection" });

  // 2. Send a message to background (if needed)
  port.postMessage({ greeting: "hello from popup" });

  // 3. Listen for a reply
  port.onMessage.addListener((msg) => {
    console.log("Got message from background:", msg);
  });

  // 4. Reload the current active tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]?.id) {
      chrome.tabs.reload(tabs[0].id);
    }
  });
});
