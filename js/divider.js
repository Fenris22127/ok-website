/**
 * This class creates a custom HTML element that displays three dots as a divider.
 * 
 * @file divider.js
 * @author Elisa Johanna Woelk
 * @version 1.1
 * @date 2025-04-8
 * @since 1.0
 */
class Dots extends HTMLParagraphElement {
    constructor() {
        super();

        // Clear any existing content
        this.textContent = '';

        // Create and append three dots as circle shapes
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('span');
            dot.style.display = 'inline-block';
            dot.style.width = '0.3rem';
            dot.style.height = '0.3rem';
            dot.style.margin = '0 0.4rem';
            dot.style.backgroundColor = 'var(--text)';
            dot.style.borderRadius = '50%';
            this.appendChild(dot);
        }

        // Center the dots
        this.style.textAlign = 'center';
        this.style.display = 'block';
    }
}

// Define the custom element with the name 'dots-divider' and associate it with the Dots class
// The 'extends' option allows it to be used as a <p> element
customElements.define('dots-divider', Dots, { extends: 'p' });
  