// Ativa e desativa o select da borda
document.getElementById('bordaCheckbox').addEventListener('change', function () {
    document.getElementById('bordaSelect').disabled = !this.checked;
});

function finalizarPedido(event) {
    event.preventDefault();

    const sabor1Select = document.getElementById('sabor1');
    const sabor2Select = document.getElementById('sabor2');
    const bebidaSelect = document.getElementById('bebida');
    const bordaCheckbox = document.getElementById('bordaCheckbox');
    const bordaSelect = document.getElementById('bordaSelect');

    const sabor1 = sabor1Select.value;
    const sabor2 = sabor2Select.value;
    const bebida = bebidaSelect.value;
    const bordaSelecionada = bordaCheckbox.checked ? bordaSelect.value : "Sem borda";

    // Pegando os preços dos data-preco
    const precoSabor1 = parseFloat(sabor1Select.selectedOptions[0].dataset.preco);
    const precoSabor2 = parseFloat(sabor2Select.selectedOptions[0].dataset.preco);
    const precoBebida = bebidaSelect.value !== "nenhuma" ? parseFloat(bebidaSelect.selectedOptions[0].dataset.preco) : 0;
    const precoBorda = bordaCheckbox.checked ? 5.00 : 0;

    const precoTotal = precoSabor1 + precoSabor2 + precoBebida + precoBorda;

    // Salvando tudo no localStorage
    localStorage.setItem('sabor1', sabor1);
    localStorage.setItem('sabor2', sabor2);
    localStorage.setItem('bebida', bebida);
    localStorage.setItem('borda', bordaSelecionada);
    localStorage.setItem('precoTotal', precoTotal.toFixed(2));

    // Redireciona para o carrinho
    window.location.href = "/pasta_carrinho/carrinho.html";
}
