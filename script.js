
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const plano = urlParams.get('plano');
    const preco = urlParams.get('preco');

    
    if (plano && preco) {
        document.getElementById('plano').value = plano;
        document.getElementById('preco').value = `R$ ${preco}/mês`;
    }
}
