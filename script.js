
document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const translateBtn = document.getElementById('translate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const shareBtn = document.getElementById('share-btn');

    translateBtn.addEventListener('click', () => {
        // Simulating translation (replace with actual translation logic)
        if (inputText.value.trim()) {
            outputText.value = 'Translation will appear here... (Simulated)';
        } else {
            alert('Please enter some text to translate');
        }
    });

    copyBtn.addEventListener('click', () => {
        if (outputText.value) {
            navigator.clipboard.writeText(outputText.value)
                .then(() => alert('Copied to clipboard!'))
                .catch(err => console.error('Copy failed', err));
        } else {
            alert('Nothing to copy');
        }
    });

    shareBtn.addEventListener('click', () => {
        if (outputText.value) {
            if (navigator.share) {
                navigator.share({
                    title: 'Sanskrit Translation',
                    text: outputText.value
                }).catch(console.error);
            } else {
                alert('Web Share API not supported in this browser');
            }
        } else {
            alert('No translation to share');
        }
    });
});
