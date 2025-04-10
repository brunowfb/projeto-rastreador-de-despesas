let produtoEditando = null;

function adicionar() {
    const produto = document.getElementById('iproduto').value
    const valor = document.getElementById('ivalor').value

    if (produto === '' || valor === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const lista = document.getElementById('produto-lista');
    const item = document.createElement('div');
    item.className = 'produto-item';
    item.innerHTML =
        `${produto} : R$ ${parseFloat(valor).toFixed(2)}
        <button type="button" class="btn btn-success"; onclick="editarProduto(this)">Editar</button>
        <button type="button" class="btn btn-danger"; onclick="excluirProduto(this)">Excluir</button>`;

    lista.appendChild(item);

    //limpa os campos após adicionar um produto
    document.getElementById('iproduto').value = '';
    document.getElementById('ivalor').value = '';
}

function editarProduto(button) {
    const item = button.parentElement
    const [produto, valor] = item.textContent.split(' : R$')

    document.getElementById('editar-produto').value = produto.trim()
    document.getElementById('editar-valor').value = valor.trim()

document.getElementById('modal').style.display = 'flex'

produtoEditando = item
}

function salvar() {
    const produto = document.getElementById('editar-produto').value
    const valor = document.getElementById('editar-valor').value

    if (produto === '' || valor === '') {
        alert('Por favor, preencha todos os campos.')
        return
    }

produtoEditando.innerHTML = 
    `${produto} : R$ ${parseFloat(valor).toFixed(2)}
    <button type="button" class="btn btn-success" onclick="editarProduto(this)">Editar</button>
    <button type="button" class="btn btn-danger"; onclick="excluirProduto(this)">Excluir</button>`

document.getElementById('modal').style.display = 'none'
}

document.getElementById('fechar-modal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none'
})

function excluirProduto(button) {
    const item = button.parentElement
    item.remove()
}