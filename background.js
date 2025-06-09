// background.js
chrome.runtime.onConnect.addListener((port) => {
  if (port.name === "popup-connection") {
    console.log("Popup connected!");

    port.onMessage.addListener((msg) => {
      console.log("Received from popup:", msg);

      // Respond back to popup
      port.postMessage({ response: "Background received your message!" });
    });
  }
});
