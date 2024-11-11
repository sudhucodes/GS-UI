// Function to load HTML and CSS into iframes on the main page
async function loadComponentPreview() {
    const iframes = document.querySelectorAll('iframe');

    iframes.forEach(async (iframe) => {
        const componentName = iframe.dataset.component;
        const htmlResponse = await fetch(`components/${componentName}/index.html`);
        const htmlCode = await htmlResponse.text();

        const cssResponse = await fetch(`components/${componentName}/style.css`);
        const cssCode = await cssResponse.text();

        const fullContent = `<style>${cssCode}</style>${htmlCode}`;

        // Write the combined HTML and CSS into the iframe's document
        const frameDoc = iframe.contentDocument || iframe.contentWindow.document;
        frameDoc.open();
        frameDoc.write(fullContent);
        frameDoc.close();
    });
}

// Function to navigate to the editor page with the selected component
function openComponent(componentName) {
    window.location.href = `editor.html?component=${componentName}`;
}

// Load previews when the page is ready
document.addEventListener('DOMContentLoaded', loadComponentPreview);
