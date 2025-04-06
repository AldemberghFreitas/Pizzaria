// Ativa e desativa o select da borda
document.getElementById('bordaCheckbox').addEventListener('change', function () {
    document.getElementById('bordaSelect').disabled = !this.checked;
});

function finalizarPedido(event) {
    event.preventDefault(); // Evita o envio tradicional do formulário

    const sabor1 = document.getElementById('sabor1').value;
    const sabor2 = document.getElementById('sabor2').value;
    const bebida = document.getElementById('bebida').value;
    const bordaSelecionada = document.getElementById('bordaCheckbox').checked
        ? document.getElementById('bordaSelect').value
        : "Sem borda";

    // Salva no localStorage
    localStorage.setItem('sabor1', sabor1);
    localStorage.setItem('sabor2', sabor2);
    localStorage.setItem('bebida', bebida);
    localStorage.setItem('borda', bordaSelecionada);

    // Redireciona para o carrinho
    window.location.href = "/pasta_carrinho/carrinho.html";
}
