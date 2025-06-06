const urls = ["google.com", "example.com"];
const hostname = window.location.hostname;

if (urls.includes(addwww(hostname)) || urls.includes(hostname)) {
  document.body.style.border = "5px solid red";
  console.log("✅ Matched:", hostname);
}

function addwww(str) {
  return "www." + str;
}
