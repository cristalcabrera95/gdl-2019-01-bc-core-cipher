window.cipher = {
  encode:(offset, string)=> {
    let textResult = "";
   //Recorrer cada uno de los caracteres del string
    for (let i = 0; i < string.length; i++) {
      if(string[i] === " "){
				textResult += " ";
			}else{
      let result = string[i];
      let charCode = string.charCodeAt(i);
        result = String.fromCharCode((charCode - 65 + offset) % 26 + 65);
   
      textResult += result;
      }
    }
   
    return textResult;
  }, 
  
  decode:(offset, string)=> {
    let textResult = "";
   
    for (let i = 0; i < string.length; i++) {
      if(string[i] === ' '){
				textResult += ' ';
			}else{
      let result = string[i];
      let charCode = string.charCodeAt(i);
        result = String.fromCharCode((charCode + 65 - offset) % 26 + 65);
   
      textResult += result;
      }
      
    }
   
    return textResult;
  }
};
