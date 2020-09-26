class HelloButton extends HTMLButtonElement {
	constructor() {
		super();
		this.addEventListener("click", () => console.log("button clicked!"));
	}
}

customElements.define("hello-button", HelloButton, { extends: "button" });
