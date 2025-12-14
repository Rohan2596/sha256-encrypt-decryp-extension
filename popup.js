const plainText = document.getElementById('plainText');
const hashText = document.getElementById('hashText');
const outputText = document.getElementById('outputText');

const encryptBtn = document.getElementById('encryptBtn');
const compareBtn = document.getElementById('compareBtn');
const copyBtn = document.getElementById('copyBtn');

encryptBtn.addEventListener('click', async () => {
  const text = plainText.value.trim();
  if (!text) {
    outputText.value = "❗ Please enter plain text";
    return;
  }

  outputText.value = "Generating SHA-256...";
  outputText.value = await sha256(text);
});

compareBtn.addEventListener('click', async () => {
  const text = plainText.value.trim();
  const hash = hashText.value.trim().toLowerCase();

  if (!text || !hash) {
    outputText.value = "❗ Enter both text and hash";
    return;
  }

  outputText.value = "Comparing...";
  const generatedHash = await sha256(text);

  if (generatedHash === hash) {
    outputText.value = "✅ Hash matches!";
  } else {
    outputText.value =
      "❌ Hash does not match\n\nGenerated:\n" + generatedHash;
  }
});

copyBtn.addEventListener('click', () => {
  outputText.select();
  document.execCommand('copy');
});
