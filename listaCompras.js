//variables
var nomeProduto = document.getElementById(nomeProdutoForm);
var precoProduto = document.getElementById(precoProdutoForm);
//    precoProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
var fragil = Boolean('');
var categoria = String('');
var mercado = String('');
var qtdeProduto = Number('');

//

var result = (nomeProduto+precoProduto);
document.write(result);
