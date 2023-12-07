// Função que verifica se existe 3 pontos de interrogação a cada par de 2 números, e se esse par de números juntos somam 10 dentro de uma string.
function QuestionsMarks(str){
    for(let i = 0; i < str.length; i++){ // Primeiro é feita uma estrutura for para verificar cada caracterer contido dentro da string.
        for(let j = i + 1; j < str.length; j++){ // logo em seguida é feita outra estrutura for para verificar o caracterer subsequente da primeira estrutura.
            if(Number(str[i]) + Number(str[j]) === 10){ // logo após a estrutura decorrer os caracteres, esses caracteres encontrados são convertido em números utilizando a função 'Number', e se esses números convertidos forem estritamente igual a 10, ele continua a decorrer pela estrutura.
                if (str.slice(i, j).split('?').length - 1 < 3){ // Depois é feita outra verificação, com a função 'slice' é selecionada as variáveis de comparação das estruturas for e com isso é feita uma verificação com a função 'split' que verifica se há um ponto de interrogação, e assim sucessivamente até que seja encontrado 3 pontos de interrogação, se não for encontrado exatamente 3 pontos de interrogação e os pares de números não somarem exatamente 10, o programa irá retorna falso
                    return false;
                } else {
                    result = true // Se caso a soma dos pares de números forem 10 e entre eles forem encontrados 3 pontos de interrogação, será armazenada a uma variável o valor booleano 'true'.
                }
            }
        }
    }
    return result; // Após toda essa estrutura ser finalizada, a função irá retornar o valor contido dentro da variável 'result'
}

console.log(QuestionsMarks('arrb6???4xxbl5???eee5')); // true
console.log(QuestionsMarks('9?aa6?9')); // false