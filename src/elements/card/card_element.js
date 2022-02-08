customElements.define('neuron-card', 
class extends HTMLElement {
    constructor() {
        super();

        let template = document.getElementById('neuron-card-template');
        let templateContent = template.content;

        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
        shadowRoot.appendChild(templateContent.cloneNode(true));
    }
});