// Web komponenta pro nadpis
class Heading extends HTMLElement {
	connectedCallback() {
		// HTML obsah komponenty
		this.innerHTML = `
		<div class="d-flex justify-content-center"><h1 class="py-3"><strong>OK1KMR</strong></h1></div>
	`;
	}
}

// Registrace komponenty
customElements.define('app-heading', Heading);