//Generamos un template de HTML
const template = document.createElement("div");
template.innerHTML = `
    <style>
        p {
            color: blue;
        }
    </style>
    <p>Hello World</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, unde!</p>
`;
//Extendemos de HTMLElement que nos va a permitir crear nuestro elemento
class myElement extends HTMLElement {
  //Este es nuestro primer ciclo de vida de nuestro Costum Element
  constructor() {
    super();
    this.p = document.createElement("h1");
  }
  connectedCallback() {
    this.p.textContent = "Hello World from JS";
    //Agregamos nuestro nodo p que creamos 
    this.appendChild(this.p);
    //Agregamos nuestro template
    this.appendChild(template);
  }
}
//Creamos nuestro elemento de JS utilizando la siguiente función
//El primer valor que ingresamos es en nombre de nuestra etiqueta
//Es segundo valor sera el tipo, en este caso myElement
customElements.define("my-element", myElement);