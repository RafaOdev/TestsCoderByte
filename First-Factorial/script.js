function FirstFactorial(num){
    let numFac = 1; // Váriavel que começará com valor de 1, e que a cada verificação e multiplicação com o valor do parâmetro num, terá o seu valor alterado para o resultado da multiplicação do seu valor anterior com o valor do parâmetro num

    for(let i = 1; i <= num; i++){
        numFac = numFac * i; // Essa estrutura de repetição for irá multiplicar o valor presente na variável i com o valor presente na váriavel numFac  até que o valor da variável i seja o mesmo que o valor da variável num do parâmetro da função. Após cada multiplicação o resultado será armazenado dentro da própria variável numFac;
    }

    return numFac; // retornará o valor final da variável numFac;
}