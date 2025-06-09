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
