function FindIntersection(strArr) { 
    // As duas próximas variáveis irão receber os valores de um array, e dentro desse array irá conter dois conjuntos de números em strings que será separado por uma vírgula.
    let a1 = strArr[0].split(', '); // recebe o primeiro conjunto antes da vírgula.
    let a2 = strArr[1].split(', '); // recebe o segundo conjunto após a vírgula.
  
    const intersection = a1.filter(i => a2.includes(i)); // essa instrução irá filtrar os caracteres contidos dentro de cada conjunto, e irá mostrar os números que combinam entre os dois conjuntos. Exemplo: ['0,1,2,4,6,8', '0,1,4,7,8,10'] = o resultado será: [0,1,4,8] que são os números exatos que contém nos dois conjuntos.
  
    if(intersection.length === 0 && intersection.length !== ', ')return false; // irá verificar se o array contém uma interseção que é a vírgula (,). se o array não contiver a vírgula, a saída será false. 
  
     return intersection;
  }
  console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));