// popup.js
document.getElementById("resetButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const port = chrome.runtime.connect({ name: "popup-connection" });

port.postMessage({ greeting: "hello from popup" });

port.onMessage.addListener((msg) => {
  console.log("Got message from background:", msg);
});

    chrome.tabs.reload(tabs[0].id);
  });
});
