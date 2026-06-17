'use strict';

const URL_MATERIAIS = 'https://6a29e850f59cb8f65f1dc0f8.mockapi.io/materiais';

const dataAtual = () => {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const ano = hoje.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

const limparFormulario = () => {
    document.getElementById('input-nome').value = '';
    document.getElementById('input-quantidade').value = '';
    document.getElementById('input-unidade').value = '';
    document.getElementById('input-observacoes').value = '';
}

const validarRetirada = (estoqueAtual, quantidadeRetirada) => {
    if (quantidadeRetirada <= 0) return false;
    if (quantidadeRetirada > estoqueAtual) return false;
    return true;
}

const configurarBotoes = () => {
    document.querySelectorAll('.btn-excluir').forEach((botao) => {
        botao.addEventListener('click', async (evento) => {
            const id = evento.target.dataset.id;

            if (!confirm('Tem certeza que deseja excluir este material?')) return;

            try {
                await fetch(`${URL_MATERIAIS}/${id}`, {
                    method: 'DELETE'
                });

                listarMateriais();

            } catch (erro) {
                console.error('Erro ao excluir material:', erro);
                alert('Não foi possível excluir o material.');
            }
        });
    });
}

const listarMateriais = async () => {
    try {
        const resposta = await fetch(URL_MATERIAIS);
        const materiais = await resposta.json();

        const tabela = document.getElementById('lista-materiais');
        tabela.innerHTML = '';

        materiais.forEach((material) => {
            const linha = document.createElement('tr');

            linha.innerHTML = `
                <td>${material.nome}</td>
                <td>${material.quantidade}</td>
                <td>${material.unidade ?? '-'}</td>
                <td>${material.dataCadastro ?? '-'}</td>
                <td>${material.observacoes ?? '-'}</td>
                <td>
                <input type="number" id="input-retirada" class="form-control input-retirada" placeholder="Qtd" min="1" max="${material.quantidade}">
                </td>
                <td>
                <button class="btn-baixar btn-warning" data-id="${material.id}" data-estoque="${material.quantidade}">Baixar</button>
                <button class="btn-excluir btn-danger" data-id="${material.id}">Excluir</button>
                </td>
            `;

            tabela.appendChild(linha);
        });

        configurarBotoes();

    } catch (erro) {
        console.error('Erro ao carregar materiais:', erro);
        alert('Não foi possível carregar a lista de materiais.');
    }
}

document.addEventListener('DOMContentLoaded', listarMateriais);

const cadastrarMaterial = async () => {
    const nome = document.getElementById('input-nome').value.trim();
    const quantidade = document.getElementById('input-quantidade').value.trim();
    const unidade = document.getElementById('input-unidade').value.trim();
    const observacoes = document.getElementById('input-observacoes').value.trim();

    if (nome === '' || quantidade === '') {
        alert('Preencha o nome e a quantidade do material!');
        return;
    }

    const novoMaterial = {
        nome: nome,
        quantidade: Number(quantidade),
        unidade: unidade,
        observacoes: observacoes,
        dataCadastro: dataAtual()
    };

    try {
        await fetch(URL_MATERIAIS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoMaterial)
        });

        limparFormulario();
        listarMateriais();

    } catch (erro) {
        console.error('Erro ao cadastrar material:', erro);
        alert('Não foi possível cadastrar o material.');
    }
}

document.getElementById('btn-cadastrar').addEventListener('click', cadastrarMaterial);