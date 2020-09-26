setInterval(() => time.setAttribute("datetime", new Date()), 1000);

customElements.define(
	"show-hello",
	class extends HTMLElement {
		connectedCallback() {
			const shadow = this.attachShadow({ mode: "open" });

			shadow.innerHTML = `
      <style>p { font-weight: bold; }</style>
      <p>Hello, ${this.getAttribute("name")}</p>
      `;
		}
	}
);
