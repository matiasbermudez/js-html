const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {

  const lista = document.querySelector('.lista')
  console.log(lista.firstChild)
  while (lista.firstChild) {
    lista.firstChild.remove()
  }
  cosasQueAprendimos.forEach(element => {
    console.log(element.tema)
    const nuevoEl = document.createElement('li')
    nuevoEl.textContent = element.tema
    if(element.class != ""){
      console.log(element)
      nuevoEl.classList.add(element.class)
    }
    lista.appendChild(nuevoEl)
  });

}

main();
