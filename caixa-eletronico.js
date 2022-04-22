/* 
autor = Fabiula Pellicciotti
*/

/*a função simula um saque de caixa eletronico, apenas calculando quantas notas
o usuario recebera de cada valor, de acordo com o valor digitado 
 */

function caixaEletronico(){
    var verifica = isNum(document.getElementById('valor').value)
    
    if(verifica == true){ //valida se digitou um numero inteiro
     alert("Valor digitado não é inteiro !");
    }else if (saque > 10000) { //valida se não digitou valor acima do permitido para saque diario
     alert("Valor maior que o permitido para saque diario.");
    } else if (valorSaque < 1) {
	 alert("Valor menor que 2, não é permitido!");
	} else{
       //recebe o valor 
       var saque = document.getElementById('valor').value
       // array de tipos de notas
       let notas = [100,50,20,10,5,2]
       //imprime a frase inicial da quantidade de notas
       var result = "<br>Quantidade de notas" + "<br>";
       //variavel de controle
       var stop = false;
     
       for (i = 0; i < notas.length; i++) {
            if (saque <= 10000 && (saque % 100) == 0 ) { //Calcula a quantidade de notas de 100 e o resto da divisão
               if (saque >=notas[i]) {
                   result = result  + parseInt (saque/notas[i])+" Nota(s) de R$ "+notas[i] + "<br>";
                   stop = true;
                   saque = saque % notas[i];
               }
           }else if (saque <= 10000 && (saque % 50) == 0 ) { //Calcula a quantidade de notas de 50 e o resto da divisão
               if (saque >=notas[i]) {
                   result = result  + parseInt (saque/notas[i])+" Nota(s) de R$ "+notas[i] + "<br>";
                   stop = true;
                   saque = saque % notas[i];
               }    
           } else if (saque <= 10000 && (saque % 20) == 0 ) { //Calcula a quantidade de notas de 20 e o resto da divisão
               if (saque >=notas[i]) {
                   result = result  + parseInt (saque/notas[i])+" Nota(s) de R$ "+notas[i] + "<br>";
                   stop = true;
                   saque = saque % notas[i];
               }    
           } else  if (saque <= 10000 && (saque % 10) == 0 ) { //Calcula a quantidade de notas de 10 e o resto da divisão
               if (saque >=notas[i]) {
                   result = result  + parseInt (saque/notas[i])+" Nota(s) de R$ "+notas[i] + "<br>";
                   stop = true;
                   saque = saque % notas[i];
               }    
           } else  if (saque <= 10000 && (saque % 5) == 0 ) { //Calcula a quantidade de notas de 5 e o resto da divisão
               if (saque >=notas[i]) {
                   result = result  + parseInt (saque/notas[i])+" Nota(s) de R$ "+notas[i] + "<br>";
                   stop = true;
                   saque = saque % notas[i];
               }    
           } else  if (saque <= 10000 && (saque % 2) == 0 ) { //Calcula a quantidade de notas de 2 e o resto da divisão
               if (saque >=notas[i]) {
                   result = result  + parseInt (saque/notas[i])+" Nota(s) de R$ "+notas[i] + "<br>";
                   stop = true;
                   saque = saque % notas[i];
               } 
           } else {
               stop = false;
               break;
           }                     
       }         
    }
        
    //faz impressão da contagem das notas
    if (stop == true) {
    document.getElementById("resultCalc").innerHTML = `<p>${result}</p>` + "<br>";
    }
    
	
}

//função que verifica se eh um numero inteiro
function isNum(val){
    return !isNaN(val)
}
