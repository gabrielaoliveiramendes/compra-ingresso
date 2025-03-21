function comprar() {
    let tipo = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);

// Verificar se a quantidade é um número positivo
     if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }
    
    if (tipo == "pista") {
        comprarPista(quantidade, tipo);
    } else if (tipo == "superior") {
        comprarSuperior(quantidade, tipo);
    } else {
        comprarInferior(quantidade, tipo);
    }
}

function comprarPista(quantidade, tipo){
    let estoquePista = parseInt(document.getElementById("qtd-pista").textContent);
    
    if(quantidade > estoquePista){
        alert("Quantidade indisponível para tipo " + tipo);
    } else {
        estoquePista = estoquePista - quantidade;
        document.getElementById("qtd-pista").textContent = estoquePista;
    }
}

function comprarSuperior(quantidade, tipo){
    let estoqueSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    
    if(quantidade > estoqueSuperior){
        alert("Quantidade indisponível para tipo " + tipo);
    } else {
        estoqueSuperior = estoqueSuperior - quantidade;
        document.getElementById("qtd-superior").textContent = estoqueSuperior;
    }
}

function comprarInferior(quantidade, tipo){
    let estoqueInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    
    if(quantidade > estoqueInferior){
        alert("Quantidade indisponível para tipo " + tipo);
    } else {
        estoqueInferior = estoqueInferior - quantidade;
        document.getElementById("qtd-inferior").textContent = estoqueInferior;
    }
}