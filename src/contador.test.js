import Contador from "./contador.js";

const contador = new Contador();

describe("Contador de palabras", () => {
  it("Deberia mostrar el texto ingresado por el usuario", () => {
    const textoEsperado = "El password de mi cuenta es PASSWORD. Es un password de poco cuidado.";
    const textoObtenido = contador.obtenerTexto(textoEsperado);
    expect(textoObtenido).toEqual(textoEsperado);
  });


  it("Deberia mostrar una lista de las palabras que hay en el texto", () => {
    const texto = "El password de mi cuenta es PASSWORD. Es un password de poco cuidado.";
    const ListaEsperada = ["El", "password", "de", "mi", "cuenta", "es", "PASSWORD.", "Es", "un", "password", "de", "poco", "cuidado."];
    const ListaObtenida = contador.obtenerListaPalabras(texto);
    expect(ListaObtenida).toEqual(ListaEsperada);
  });

  it("Deberia mostrar una lista de las palabras sin simbolos que hay en el texto", () => {
    const texto = "El password de mi cuenta es PASSWORD. Es un password de poco cuidado.";
    const ListaEsperada = ["El", "password", "de", "mi", "cuenta", "es", "PASSWORD", "Es", "un", "password", "de", "poco", "cuidado"];
    const ListaObtenida = contador.obtenerListaPalabrasSinSimbolos(texto);
    expect(ListaObtenida).toEqual(ListaEsperada);
  });

  it("Deberia mostrar una lista de las palabras sin simbolos que hay en el texto", () => {
    const texto = "El password de mi cuenta es PASSWORD. Es un password de poco cuidado.";
    const ListaEsperada = ["El", "password", "de", "mi", "cuenta", "es", "PASSWORD", "Es", "un", "password", "de", "poco", "cuidado"];
    const ListaObtenida = contador.obtenerListaPalabrasSinSimbolos(texto);
    expect(ListaObtenida).toEqual(ListaEsperada);
  });

});
