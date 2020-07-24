
function primo(numero){


    if (numero === 1){
      return false;
    }
    if( numero === 2 || numero === 3 || numero === 5 || numero === 7) { // verifica de o parametro é igual a 1, 2, 3, 5 ou 7
      return true; // é primo
    }else if(numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0){ // verifica se o paramentro é divisível pelos mesmos números acima
      return false; // n é primo 
    }
  return true // a função retorna verdadeiro se nenhuma das opções acima for retornada, ou seja, se for um número primo
}

for( x = 1; x <= 100; x++ ){ // laço 'for' de 1 à 100

  if( primo(x) ){ // a função 'primo(x)' retorna verdadeiro(true) se o numero for primo. "if( true ){ ... }"
    console.log("O número " + x + " É primo"); // 'console.log' imprime na tela a mensagem "o número [x] é primo"
  }else{ // se a função primo retornar 'false', ou seja, o número não for primo
    console.log("O número " + x + " NÃO É primo");
  }

}
 