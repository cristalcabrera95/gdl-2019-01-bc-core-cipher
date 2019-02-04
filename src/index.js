const encodeButton = () =>{
    //obtiene el numero de posiciones
    const offset = parseInt(document.getElementById('numero').value);
    //obtiene el texto ingresado
    const string = document.getElementById('text').value;
    //retornar el rresultado del texto codificado
    let mensajeFinal= window.cipher.encode(string, offset);
     document.getElementById("textResult").value= mensajeFinal;
}

const decodeButton = () =>{
    //obtiene el numero de posiciones
    const offset = parseInt(document.getElementById('numero').value);
    //obtiene el texto ingresado
    const string = document.getElementById('text').value;
    //retornar el resultado del texto decodificado
    let mensajeFinal= window.cipher.decode(string, offset);
     document.getElementById("textResult").value= mensajeFinal;
}

    




 




