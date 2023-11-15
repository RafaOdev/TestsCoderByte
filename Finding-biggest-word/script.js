function longestWords(sen){ // Função com parâmetro sen que receberá o valor de uma string.
    sen = sen.replace(/[^\w\s]g/, '');// essa instrução ira subistituir um caractere pelo que está dentro da atibuição de parâmetro. Ou seja, irá subistituir pontuações por espaços em branco.  
    let words = sen.split(' '); // irá dividir a string em uma substring para cada caracterer da string, assim checando cada letra de cada frase da string.
    let longest = ''; // uma variável com uma string vazia que armazenará a maior palavra após cada checagem.

    for(let i in words){ // estrutura for para checar cada palavra da string.
        if(words[i].length > longest.length){ // verifica se a palavra que foi checada é maior que a anterior.
            longest = words[i]; // se a palavra checada for maior que a anterior, ela irá ser amarzenada na variável longest.
        }
    }

    return longest; // retornará a maior palavra encontrada na string.
}

/* 
    ERROS QUE COMETI NO ÍNICIO DA MONTAGEM DO ALGORITMO:

    1 - Montagem inicial do código incorreta, montei com uma sequência lógica incorreta, Sendo ela:
     function longestWords(sen){
        let words = sen.split('');
        sen = sen.replace(/[A-Za-zO-9]g/);
    }.

    A correta forma de montar o ínicio do algoritmo seria:
    function LongestWord(sen) {
        sen = sen.replace(/[^\w\s]/g, '');
        let words = sen.split(' ');
    }.

    A solução correta seria primeiro verificar os caracteres e se for encontrada pontuações, substitui-lás e depois as dividir. 

    2 - expressão regular incorreta, não estava ignorando corretamente as pontuações e estava ignorando número. Ao inicio do algoritmo, declarei a expressão regular da seguinte maneira: /[a-zA-Z-0-9]g/

    Essa expresão regular está incorreta, pois não declara que as pontuações devem ser ignoradas.

    A expressão correta seria: /[^\w\s]g/;
*/

/* 
    ACERTOS:

    1 - No final do código utilizei a estrutura e lógica correta para fazer a verificação de cada palavra da string;
    2 - declarei de forma corretas qual seria os valores que cada variável iria receber.
*/
