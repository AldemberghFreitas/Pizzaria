


// Exibe os dados do localStorage
document.getElementById('saborPizza1').innerText = localStorage.getItem('sabor1') || 'Não selecionado';
document.getElementById('saborPizza2').innerText = localStorage.getItem('sabor2') || 'Não selecionado';
document.getElementById('saborBordaCarrinho').innerText = localStorage.getItem('borda') || 'Sem borda';
document.getElementById('saborRefriCarrinho').innerText = localStorage.getItem('bebida') || 'Nenhuma';

function voltar() {
    window.location.href = "/pasta_cardapio/pagina_cardapio.html";
}