const db = require('db');


function zerarValor(){
    document.getElementById('pedido').value=''; 
    document.getElementById('endereço').value=''; 
    document.getElementById('numero').value=''; 
    document.getElementById('complemento').value=''; 
    document.getElementById('bairro').value=''; 

}

function redirecionar(opcao){
    console.log("esta eh a opcao");
    console.log(opcao);
    if( opcao == "rotas" ){
        window.location.href = "rotas.html"
    }
    if( opcao == "pedidos" ){
        window.location.href = "pedidos.html"
    }
    if( opcao == "menu" ){
        window.location.href = "index.html"
    }
}

function ExibirRotas(){
    
}

function inserirListaPedidos(pedido){

}

function inserirEmRotas(pedido){

}
function addPedido(){
    var pedido = document.getElementById("pedido").value;
    var numero = document.getElementById("numero").value;
    var enderenço = document.getElementById("endereço").value;
    var bairro = document.getElementById("bairro").value;
    var complemento = document.getElementById("complemento").value;

    let PEDIDO = [pedido,enderenço,numero,bairro,complemento];
    console.log(PEDIDO);
    inserirListaPedidos(PEDIDO);
    inserirEmRotas(PEDIDO)

}