// Exibe os dados do localStorage 
const sabor1 = localStorage.getItem('sabor1') || 'Não selecionado';
const sabor2 = localStorage.getItem('sabor2') || 'Não selecionado';
const borda = localStorage.getItem('borda') || 'Sem borda';
const bebida = localStorage.getItem('bebida') || 'Nenhuma';

// Atualiza visualmente
document.getElementById('saborPizza1').innerText = sabor1;
document.getElementById('saborPizza2').innerText = sabor2;
document.getElementById('saborBordaCarrinho').innerText = borda;
document.getElementById('saborRefriCarrinho').innerText = bebida;

// Preços normalizados
const precos = {
    'mista': 29.00,
    'calabresa': 29.00,
    'frango': 29.00,
    'marguerita': 32.99,
    'cala bacon': 32.99,
    'frango catupiry': 32.99,

    'coca cola 1l': 8.00,
    'coca cola zero 1l': 8.00,
    'guarana 1L': 7.00,
    'pepsi 1L': 7.00,
    'coca cola 350ml': 5.00,
    'coca cola zero 350ml': 5.00,
    'guarana 350ml': 4.00,
    'pepsi 350ml': 4.00,
    'sukita 350ml': 4.00
};

// Função para normalizar texto
function normalizar(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/-/g, ' ')
        .trim();
}

let total = 0;

// Normaliza e calcula
const sabor1Key = normalizar(sabor1);
const sabor2Key = normalizar(sabor2);
const bebidaKey = normalizar(bebida);
const bordaKey = normalizar(borda);

// Meia pizza de cada sabor
if (precos[sabor1Key]) total += precos[sabor1Key] / 2;
if (precos[sabor2Key]) total += precos[sabor2Key] / 2;

// Borda
if (bordaKey !== 'sem borda') total += 5.00;

// Bebida
if (precos[bebidaKey]) total += precos[bebidaKey];

// Exibe total corretamente
document.getElementById('valorTotal').innerText = `Total: R$ ${total.toFixed(2)}`;

// Botão de voltar
function voltar() {
    window.location.href = "/pasta_cardapio/pagina_cardapio.html";
}
