function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert(`${text} copied to clipboard!`);
    }).catch(() => {
      alert("Failed to copy. Please try again.");
    });
  }
  