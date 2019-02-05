const abc = () =>{
    //obtiene el numero de posiciones
    const offset = parseInt(document.getElementById("numero").value);
    //obtiene el texto ingresado
    const string = document.getElementById("text").value;
    //retornar el rresultado del texto codificado
   window.cipher.encode(string, offset);
     document.getElementById("textResult").value= window.cipher.encode(offset, string);
};
const textEncode= document.getElementById("encodeButton");
textEncode.addEventListener("click", abc);

const dfg = () =>{
    //obtiene el numero de posiciones
    const offset = parseInt(document.getElementById("numero").value);
    //obtiene el texto ingresado
    const string = document.getElementById("text").value;
    //retornar el resultado del texto decodificado
    let mensajeFinal= window.cipher.decode(offset, string);
     document.getElementById("textResult").value= mensajeFinal;
};
const textDecode= document.getElementById("decodeButton");
textDecode.addEventListener("click", dfg);
    




 




