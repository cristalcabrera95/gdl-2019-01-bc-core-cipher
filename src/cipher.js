window.cipher = {
  encode: (string, offset) =>{
    let textResult = '';
   //Recorrer cada uno de los caracteres del string
    for (let i = 0; i < string.length; i++) {
      let result = string[i];
      let charCode = string.charCodeAt(i);
        result = String.fromCharCode((charCode - 65 + offset) % 26 + 65);
   
      textResult += result;
      console.log(textResult);
    }
   
    return textResult;
  }, 
  
  decode:(string, offset) =>{
    let textResult = '';
   
    for (let i = 0; i < string.length; i++) {
      let result = string[i];
      let charCode = string.charCodeAt(i);
        result = String.fromCharCode((charCode + 65 - offset) % 26 + 65);
   
      textResult += result;
      console.log(textResult);
    }
   
    return textResult;
  }
  
  
  // ... 
};
