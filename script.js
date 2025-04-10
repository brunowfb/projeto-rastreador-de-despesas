let produtoEditando = null;

function adicionar() {
    const produto = document.getElementById('iproduto').value;
    const valor = parseFloat(document.getElementById('ivalor').value);

    if (produto === '' || isNaN(valor)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const lista = document.getElementById('produto-lista');
    const item = document.createElement('div');
    item.className = 'produto-item';
    item.innerHTML =
        `${produto} : R$ ${valor.toFixed(2)}
        <div class="botoes-container">
            <button type="button" class="btn btn-success" onclick="editarProduto(this)">Editar</button>
            <button type="button" class="btn btn-danger" onclick="excluirProduto(this)">Excluir</button>
        </div>`;

    lista.appendChild(item);

    // Limpa os campos após adicionar um produto
    document.getElementById('iproduto').value = '';
    document.getElementById('ivalor').value = '';

    somar();
}
function editarProduto(button) {
    const item = button.parentElement.parentElement; // Corrigido para pegar o item correto
    const [produto, valor] = item.textContent.split(' : R$');

    document.getElementById('editar-produto').value = produto.trim();
    document.getElementById('editar-valor').value = valor.trim();

    document.getElementById('modal').style.display = 'flex';

    produtoEditando = item;
}

function salvar() {
    const produto = document.getElementById('editar-produto').value;
    const valor = parseFloat(document.getElementById('editar-valor').value);

    if (produto === '' || isNaN(valor)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    produtoEditando.innerHTML =
        `${produto} : R$ ${valor.toFixed(2)}
        <div class="botoes-container">
            <button type="button" class="btn btn-success" onclick="editarProduto(this)">Editar</button>
            <button type="button" class="btn btn-danger" onclick="excluirProduto(this)">Excluir</button>
        </div>`;

    document.getElementById('modal').style.display = 'none';

    somar();
}
document.getElementById('fechar-modal').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
});

function excluirProduto(button) {
    const item = button.parentElement.parentElement; // Corrigido para pegar o item correto
    item.remove();
    somar();
}

function somar() {
    const lista = document.getElementById('produto-lista');
    const items = lista.getElementsByClassName('produto-item');
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        const valorTexto = items[i].textContent.split(' : R$')[1];
        const valor = parseFloat(valorTexto);
        if (!isNaN(valor)) {
            total += valor;
        }
    }
    document.getElementById('total').innerText = total.toFixed(2);
}

