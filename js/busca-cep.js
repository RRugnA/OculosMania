var botaoCep = document.querySelector("#botao-cep");

botaoCep.addEventListener("click", function(event){
    event.preventDefault();
    var valorCep = document.querySelector(".busca-cep").value;
    console.log(valorCep);

    if(valorCep.length > 0){

        var validaCep = /^[0-9]{8}$/;        

        if(validaCep.test(valorCep)){
            var xhr = new XMLHttpRequest();

            xhr.open("GET", "https://viacep.com.br/ws/08715360/json");

            xhr.addEventListener("load", function(){

                var resposta = xhr.responseText;
                var enderecos = JSON.parse(resposta);

                var endereco = obterDados(enderecos);
                console.log(endereco);
            });
                        
            xhr.send();
        }else {
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

