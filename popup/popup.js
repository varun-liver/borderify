document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("clickMe").addEventListener("click", () => {
    const text = "intialize";
    const filename = "example.txt";

    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.style.display = "none"; // Hide it from view
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  });
});
