class myInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  //Este es nuestro observador
  static get observedAttributes() {
    return ["value", "type", 'for', 'id'];
  }
  //Agregamos los valores de nuestros atributos
  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal !== newVal) {
      this[attr] = newVal;
    }
  }
  getTemplate() {
    const template = document.createElement("template");

    template.innerHTML = `
                <label for=${this.for}>
                    <p>
                        <slot></slot>
                    </p>
                    <input type=${this.type} id=${this.id} ${this.value ? `value=${this.value}` : '' } placeholder="Escribe aqui..." />
                </label>
              ${this.getStyles()}
          `;
    return template;
  }
  getStyles() {
    return `
              <style  >
                label {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-conten: center;
                    align-items: center;
                }
                p {
                    margin-block-start: 20px;
                    margin-block-end: 10px;
                    font-size: 2.2rem;
                    font-weight: normal;
                    text-align: center;
                }
                input {
                    padding: 0 5px;
                    width: 90%;
                    max-width: 400px;
                    height: 28px;
                    font-family: "Roboto Condensed", sans-serif;
                    border-radius: 3px;
                    border: 0;
                    box-shadow: 0px 0px 5px rgba(22, 20, 12, 0.25);
                }
                input:hover {
                    border: 0;
                }
                :host([little-font]) label p {
                  font-size: 1.8rem;
                }
              </style>
          `;
  }
  toRender() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.toRender();
  }
}
customElements.define("my-input", myInput);
