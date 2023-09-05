class Contador {

  obtenerTexto(texto){
    return texto;
  }

  obtenerListaPalabras(texto){
    return texto.split(" ");
  }

  obtenerListaPalabrasSinSimbolos(texto){
    const lista = this.obtenerListaPalabras(texto);
    for (let i=0; i<lista.length; i++){
      if (lista[i][lista[i].length -1 ] == "." || lista[i][lista[i].length -1 ] == "," || lista[i][lista[i].length -1 ] == ";" || lista[i][lista[i].length -1 ] == "-"){
        lista[i] = lista[i].slice(0,lista[i].length -1);
      }
    }
    return lista;
  }

  obtenerListaPalabrasLimpia(texto){
    const lista = this.obtenerListaPalabrasSinSimbolos(texto);
    for (let i=0; i<lista.length; i++){
      
      lista[i] = lista[i].toUpperCase();
  
    }
    return lista;
  }
}

export default Contador;
