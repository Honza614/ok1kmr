class ContentSection extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<div class="row py-1 bg-body-tertiary rounded-bottom-3">
				${this.innerHTML}
			</div>
		`;
	}
}

customElements.define('app-content', ContentSection);