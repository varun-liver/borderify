browser.runtime.onMessage.addListener((message) => {
  if (!message.allowedDomains) return;

  const allowedDomains = message.allowedDomains;
  const currentDomain = window.location.hostname;

  const matched = allowedDomains.some(domain =>
    currentDomain === domain || currentDomain.endsWith("." + domain)
  );

  if (matched) {
    document.body.style.border = "5px solid red";
    console.log("✅ Matched:", currentDomain);
  } else {
    console.log("⛔ Not matched:", currentDomain);
  }
});
