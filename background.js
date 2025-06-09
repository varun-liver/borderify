chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed!");
});
function downloadTextFile(content, filename) {
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Example usage:
const text = "This is the content of the text file.";
const filename = "urls.txt";
downloadTextFile(text, filename);