function CodelandUsernameValidation(str) { 
    if (str.length <= 4 || str.length >= 25) return false; // verifica se a string é menor ou igual a 4 caracteres e se ela é maior ou igual a 25 caracteres.
        if (str.charAt(str.length - 1) === '_') {
            return false // verifica se o ultimo caracterer é um sublinhado.
        }
    
        const RegeX = /^[A-Za-z]\w+[A-Za-z0-9]$/; // váriavel com o valor de uma expressão regular.
    
        return str.match(RegeX) ? true : false // retorna true se a string conter qualquer caractere dentro da expressão regular, se não conter, ele retorna falso
      
    }
       
  
    console.log(CodelandUsernameValidation('Rafael'));