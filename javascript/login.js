// Função para validar o formulário de login
function validateForm() {
    // Obter os valores dos campos de usuário e senha
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Condição de validação de usuário e senha
    if (username === "etb.dw1" && password === "1234") {
        // Login bem-sucedido, exibir mensagem de sucesso
        document.getElementById("message").innerHTML = "Login realizado com sucesso!";
        // Redirecionar para pedidos.html após 2 segundos (2000 milissegundos)
        setTimeout(function() {
            window.location.href = "pedidos.html";
        }, 2000); // Redireciona após 2 segundos (2000 milissegundos)
        
        // Impedir o envio do formulário (neste caso, o redirecionamento faz o trabalho)
        return false;
    } else {
        // Login inválido, exibir mensagem de erro
        document.getElementById("message").innerHTML = "Usuário ou senha inválidos.";
        return false; // Impedir o envio do formulário
    }
}
