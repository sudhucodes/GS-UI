const htmlEditor = document.getElementById('html-editor');
const cssEditor = document.getElementById('css-editor');
const previewFrame = document.getElementById('preview-frame');

// Load the initial HTML and CSS for the Button component
async function loadComponent() {
    // Fetching HTML code from component
    const htmlResponse = await fetch('components/Button/index.html');
    const htmlCode = await htmlResponse.text();
    htmlEditor.value = htmlCode;

    // Fetching CSS code from component
    const cssResponse = await fetch('components/Button/style.css');
    const cssCode = await cssResponse.text();
    cssEditor.value = cssCode;

    updatePreview();
}

function updatePreview() {
    const htmlCode = htmlEditor.value;
    const cssCode = `<style>${cssEditor.value}</style>`;

    const frameDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
    frameDoc.open();
    frameDoc.write(cssCode + htmlCode);
    frameDoc.close();
}

loadComponent();
htmlEditor.addEventListener('input', updatePreview);
cssEditor.addEventListener('input', updatePreview);