class TimeFormatted extends HTMLElement {
	constructor() {
		super();
		// element created
	}

	render() {
		// browser calls this method when the element is added to the document
		// (can be called many times if an element is repeatedly added/removed)

		let date = new Date(this.getAttribute("datetime") || Date.now());

		this.innerHTML = new Intl.DateTimeFormat("default", {
			year: this.getAttribute("year") || undefined,
			month: this.getAttribute("month") || undefined,
			day: this.getAttribute("day") || undefined,
			hour: this.getAttribute("hour") || undefined,
			minute: this.getAttribute("minute") || undefined,
			second: this.getAttribute("second") || undefined,
			timeZoneName: this.getAttribute("time-zone-name") || undefined,
		}).format(date);
	}

	connectedCallback() {
		if (!this.rendered) {
			this.render();
			this.rendered = true;
		}
	}

	disconnectedCallback() {
		// browser calls this method when the element is removed from the document
		// (can be called many times if an element is repeatedly added/removed)
	}

	static get observedAttributes() {
		return [
			/* array of attribute names to monitor for changes */
			"datetime",
			"year",
			"month",
			"day",
			"hour",
			"minute",
			"second",
			"time-zone-name",
		];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		// called when one of attributes listed above is modified
		this.render();
	}

	adoptedCallback() {
		// called when the element is moved to a new document
		// (happens in document.adoptNode, very rarely used)
	}

	// there can be other element methods and properties
}

// let the browser know that <my-element> is served by our new class
customElements.define("time-formatted", TimeFormatted);
