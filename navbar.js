// Web komponenta pro navigační lištu
class NavBar extends HTMLElement {  
	connectedCallback() {
		this.innerHTML = `
		<div class="row bg-primary-subtle rounded-top-3">
			<nav class="navbar justify-content-center">
				<ul class="nav nav-tabs" id="myTab" role="tablist">
					<li class="nav-item" role="presentation">
						<button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Domů</button>
					</li>
					<li class="nav-item dropdown" role="presentation">
						<button class="nav-link dropdown-toggle" id="test-tab" type="button" data-bs-toggle="dropdown" aria-expanded="false">Test</button>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#test1-tab-pane" data-bs-toggle="tab" data-bs-target="#test1-tab-pane">Test 1</a></li>
							<li><a class="dropdown-item" href="#test2-tab-pane" data-bs-toggle="tab" data-bs-target="#test2-tab-pane">Test 2</a></li>
							<li><hr class="dropdown-divider"></li>
							<li><a class="dropdown-item" href="#test3-tab-pane" data-bs-toggle="tab" data-bs-target="#test3-tab-pane">Test 3</a></li>
						</ul>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="info-tab" data-bs-toggle="tab" data-bs-target="#info-tab-pane" type="button" role="tab" aria-controls="info-tab-pane" aria-selected="false">Info</button>
					</li>
				</ul>
			</nav>
		</div>
		<div class="tab-content" id="myTabContent">
			<div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
				<app-content><h2>Domů</h2><p>Obsah domovské stránky.</p></app-content>
			</div>
			<div class="tab-pane fade" id="test1-tab-pane" role="tabpanel" aria-labelledby="test-tab" tabindex="0">
				<app-content><h2>Test 1</h2><p>Obsah testovací stránky 1.</p></app-content>
			</div>
			<div class="tab-pane fade" id="test2-tab-pane" role="tabpanel" aria-labelledby="test-tab" tabindex="0">
				<app-content><h2>Test 2</h2><p>Obsah testovací stránky 2.</p></app-content>
			</div>
			<div class="tab-pane fade" id="test3-tab-pane" role="tabpanel" aria-labelledby="test-tab" tabindex="0">
				<app-content><h2>Test 3</h2><p>Obsah testovací stránky 3.</p></app-content>
			</div>
			<div class="tab-pane fade" id="info-tab-pane" role="tabpanel" aria-labelledby="info-tab" tabindex="0">
				<app-content><h2>Informace</h2><p>Toto jsou stránky pro radioamatérský klub OK1KMR.</p></app-content>
			</div>
		</div>
	`;
	}
}

customElements.define('app-navbar', NavBar);