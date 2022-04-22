/* 
author Fabiula Pellicciotti
*/

/*
Função que simula o saque de um valor inteiro em um caixa eletronico
*/

function saque(){

	// variavel que recebe o valor digitado no imput da pagina 
	let dinheiro = document.getElementById('valor').value
	// array de notas para verificação no forum
    let notas = [100,50,20,10,5,2]
	// variavel que seta o cabeçario da ação
	var result = "Serão disponibilizadas notas de: <p>";
	// variavel de controle do for
    var check = false;
  
	// loop que verifica o valor a quantidade de notas que devem ser comutadas
	for (i = 0; i < notas.length; i++) {
		if (dinheiro <= 1000 && dinheiro >= 100 || (dinheiro % 100) == 0) { //Calcula a quantidade de notas de 100 e o resto da divisão
			if (dinheiro >= notas[i]) {
				result = result  + parseInt (dinheiro/notas[i]) + " - Nota(s) de R$ " + notas[i] + "<p>";
				check = true;
				dinheiro = dinheiro % notas[i];
      		}
		} else if (dinheiro <= 1000 && (dinheiro % 50) == 0 ) { //Calcula a quantidade de notas de 50 e o resto da divisão
			if (dinheiro >= notas[i]) {
				result = result  + parseInt (dinheiro/notas[i]) + " - Nota(s) de R$ " + notas[i] + "<p>";
				check = true;
				dinheiro = dinheiro % notas[i];
      		}
		} else if (dinheiro <= 1000 && (dinheiro % 20) == 0 ) { //Calcula a quantidade de notas de 20 e o resto da divisão
			if (dinheiro >=notas[i]) {
				result = result  + parseInt (dinheiro/notas[i]) + " - Nota(s) de R$ " + notas[i] + "<p>";
				check = true;
				dinheiro = dinheiro % notas[i];
      		}
		} else if (dinheiro <= 1000 && (dinheiro % 10) == 0 ) { //Calcula a quantidade de notas de 10 e o resto da divisão 
			if (dinheiro >=notas[i]) {
				result = result  + parseInt (dinheiro/notas[i]) + " - Nota(s) de R$ " + notas[i] + "<p>";
				check = true;
				dinheiro = dinheiro % notas[i];
      		}
		} else if (dinheiro <= 1000 && (dinheiro % 5) == 0 ) { //Calcula a quantidade de notas de 5 e o resto da divisão
			if (dinheiro >=notas[i]) {
				result = result  + parseInt (dinheiro/notas[i]) + " - Nota(s) de R$ " + notas[i] + "<p>";
				check = true;
				dinheiro = dinheiro % notas[i];
      		}
		}else if (dinheiro <= 1000 && (dinheiro % 2) == 0 ) { //Calcula a quantidade de notas de 2 e o resto da divisão
			if (dinheiro >=notas[i]) {
				result = result  + parseInt (dinheiro/notas[i]) + " - Nota(s) de R$ " + notas[i] + "<p>";
				check = true;
				dinheiro = dinheiro % notas[i];
      		}
		}else {
			check = false;
			break;
		}
	}
	
     
	if (check == true) { // imprime o resultado na pagina 
		document.getElementById("resultado").innerHTML = `<p>${result}</p>` + "<br>";
	}else if (dinheiro > 1000) { // imprime uma mensagem de erro na pagina se o valor digitado for maior q o limite
		document.getElementById("resultado").innerHTML = "<p>Valor máximo para saque é R$ 1000</p>"
	} else if (dinheiro < 2) { // imprime uma mensagem de erro na pagina se o valor for menor do q o limite das notas
		document.getElementById("resultado").innerHTML = "<p>Valor mínimo para saque é R$ 2</p>"
	}else if ((dinheiro % 2) != 0  && (dinheiro % 5) != 0 )  { // imprime uma mensagem de erro na pagina caso os valores digitados estejam fora do padrao 
		document.getElementById("resultado").innerHTML = "<p> Valores Invalidos </p>"
	}
}

