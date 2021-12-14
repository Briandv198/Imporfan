class myButton extends HTMLElement {
  constructor() {
    super();
  }
  //Este es nuestro observador
  static get observedAttributes() {
    return ["value", "type", "button", "typebutton", "href"];
  }
  //Agregamos los valores de nuestros atributos
  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal !== newVal) {
      this[attr] = newVal;
    }
  }
  //Creamos el template de nuestro componente
  getTemplate() {
    const template = document.createElement("div");

    if (this.typebutton == "input") {
      template.innerHTML = `
                    <div class=${this.button}>
                      <input type=${this.type} value=${this.value} />
                    </div>
              ${this.getStyles()}
          `;
    } else {
      template.innerHTML = `
                    <div class=${this.button}>
                      <a href=${this.href} >${this.value}</>
                    </div>
              ${this.getStyles()}
          `;
    }

    return template;
  }
  getStyles() {
    return `
            <style  >
                .${this.button} {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100px;
                    height: 40px;
                    margin: 0 auto;
                    margin-top: 15px;
                    text-align: center;
                    border-radius: 50px;
                }
                .${this.button} input {
                    width: 100%;
                    height: 100%;
                    font-size: 1.8rem;
                    font-family: 'Roboto Condensed', sans-serif;
                    font-weight: normal;
                    text-align: center;
                    background-color: rgba(22, 20, 12, 0);
                    border: 0;
                    border-radius: 50px;
                }
                .${this.button} input:hover {
                    cursor: pointer;
                }
                .${this.button} input:focus-visible {
                  outline: -webkit-focus-ring-color auto 1px;
                  outline-color: -webkit-focus-ring-color;
                  outline-style: none;
                  outline-width: 0px;
                }
                .${this.button} a {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 100%;
                  height: 100%;
                  font-size: 1.8rem;
                  font-family: 'Roboto Condensed', sans-serif;
                  font-weight: normal;
                  text-decoration: none;
                  background-color: rgba(22, 20, 12, 0);
                  border: 0;
                  border-radius: 50px;
              }
              .${this.button} a:hover {
                  cursor: pointer;
              }
                ${this.getButton()}
            </style>
        `;
  }
  getButton() {
    if (this.button === "primary-button") {
      return `
        .${this.button} {
          background-color: var(--flame);
        }
        .${this.button} input {
          border: 0;
          color: var(--white);  
          background-color: rgba(22, 20, 12, 0);
      }
      .${this.button} a {
        border: 0;
        color: var(--white);  
        background-color: rgba(22, 20, 12, 0);
    }
      `;
    } else {
      return `
        .${this.button} {
          border: 3px solid;
          border-color: var(--flame);
        }
        .${this.button} input {
          border: 0;
          color: var(--flame);  
          background-color: rgba(22, 20, 12, 0);
      }
      .${this.button} a {
        border: 0;
        color: var(--flame);  
        background-color: rgba(22, 20, 12, 0);
    }
      `;
    }
  }
  connectedCallback() {
    console.log(this.class);
    this.appendChild(this.getTemplate());
  }
}
customElements.define("my-button", myButton);
