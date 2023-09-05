import Contador from "./contador.js";

const contador = new Contador();

describe("Contador de palabras", () => {
  it("Deberia mostrar el texto ingresado por el usuario", () => {
    const textoEsperado = "El password de mi cuenta es PASSWORD. Es un password de poco cuidado.";
    const textoObtenido = contador.obtenerTexto(textoEsperado);
    expect(textoObtenido).toEqual(textoEsperado);
  });


});
