function runCode() {
    const editorContent = document.getElementById('editor').value;
    const outputDiv = document.getElementById('output');

    try {
      // Create an iframe to run the code in a separate environment
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Write the code into the iframe
      iframe.contentDocument.write(editorContent);
      iframe.contentDocument.close();

      // Display the output in the output div
      outputDiv.innerHTML = iframe.contentDocument.body.innerHTML;
    } catch (error) {
      outputDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
  }