const allowedDomains = ["google.com", "example.com"];
const currentDomain = window.location.hostname;

// Check for exact domain or subdomain match (like www.example.com)
if (allowedDomains.some(domain =>
  currentDomain === domain || currentDomain.endsWith("." + domain)
)) {
  document.body.style.border = "5px solid red";
  console.log("✅ Matched:", currentDomain);
} else {
  console.log("⛔ Not matched:", currentDomain);
}
chrome.runtime.onConnect.addListener((port) => {
  console.log("Connected:", port.name);

  port.onMessage.addListener((msg) => {
    console.log("Got from popup:", msg.greeting);

    // Send something back
    port.postMessage({ reply: "hello from background" });
  });
});
