var botaoCep = document.querySelector("#botao-cep");

botaoCep.addEventListener("click", function(event){
    event.preventDefault();
    var valorCep = document.querySelector(".busca-cep").value;
    console.log(valorCep);

    if(valorCep.length > 0){

        var validaCep = /^[0-9]{8}$/;        

        if(validaCep.test(valorCep)){
            var xhr = new XMLHttpRequest();

            xhr.open("GET", "https://viacep.com.br/ws/"+valorCep+"/json");

            xhr.addEventListener("load", function(){

                var resposta = xhr.responseText;
                var enderecos = JSON.parse(resposta);

                var endereco = obterDados(enderecos);
                console.log(endereco);

                informarEndereco(endereco);
            });                        
            xhr.send();
        }else{
            //cep é inválido.
            alert("Formato de CEP inválido.");
        }
    }
    
});

function obterDados(enderecos){
    var endereco = {
        logradouro: enderecos.logradouro,
        bairro: enderecos.bairro,
        cidade: enderecos.localidade,
        uf: enderecos.uf
    }
    return endereco;
}

function montarLi(dado, classe){
    var li = document.createElement("li");
    li.textContent = dado;
    li.classList.add(classe);

    return li;
}

function informarEndereco(endereco){
    var dadosUl = document.querySelector("#resultado-cep");
    dadosUl.classList.add("resultado-cep");
    
    dadosUl.appendChild(montarLi(endereco.logradouro, "dados-cep"));
    dadosUl.appendChild(montarLi(endereco.bairro, "dados-cep"));
    dadosUl.appendChild(montarLi(endereco.cidade, "dados-cep"));
    dadosUl.appendChild(montarLi(endereco.uf, "dados-cep"));

    return dadosUl;
}

