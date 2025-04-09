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
            dot.style.backgroundColor = '#000';
            dot.style.borderRadius = '50%'
            this.appendChild(dot);
        }

        // Center the dots
        this.style.textAlign = 'center';
        this.style.display = 'block';
    }
}

customElements.define('dots-divider', Dots, { extends: 'p' });
  