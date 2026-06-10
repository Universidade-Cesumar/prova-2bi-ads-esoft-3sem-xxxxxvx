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