function validarCadastro() {
    // Pegando valores dos campos
    var numeroMesa = document.getElementById('numeroMesa').value;
    var valorTotal = document.getElementById('valorTotal').value;

    // Verificando se algum checkbox do cardápio está marcado
    var checkboxes = document.querySelectorAll('input[name="cardapio"]:checked');
    if (checkboxes.length === 0) {
        alert('Selecione pelo menos uma opção do cardápio.');
        return false;
    }

    // Verificando se o número da mesa está entre 1 e 20
    if (numeroMesa < 1 || numeroMesa > 20) {
        alert('Número da mesa deve estar entre 1 e 20.');
        return false;
    }

    // Verificando se o valor total não está vazio ou zero
    if (valorTotal === '' || parseFloat(valorTotal) <= 0) {
        alert('Valor total deve ser maior que zero.');
        return false;
    }

    // Caso passe pelas validações, exibe mensagem de sucesso
    alert('Pedido cadastrado com sucesso!');
    return true;
}
