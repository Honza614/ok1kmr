// Web komponenta pro zápatí
class Footer extends HTMLElement {
	connectedCallback() {
		// HTML obsah komponenty
		this.innerHTML = `
		<div class="d-flex justify-content-center py-3">&copy; 2026 OK1KMR</div>
	`;
	}
}

// Registrace komponenty
customElements.define('app-footer', Footer);