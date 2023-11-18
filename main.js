// Método simples para adicionar um livro ao site
document.getElementById('titulo').innerText = 'Meu Site Incrível';

// Método complexo para adicionar um livro à venda
var produtoDiv = document.getElementById('produto');

// Cria os elementos para o produto
var nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Produto Legal';

var descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Esta é uma descrição incrível do produto.';

var precoProduto = document.createElement('p');
precoProduto.innerText = 'Preço: R$ 129,99';

// Cria um elemento de imagem
var imagemProduto = document.createElement('img');
imagemProduto.src = './img/javascript_book.jpg';
imagemProduto.alt = 'Imagem do livro de Javascript';

// Adiciona os elementos criados à div do produto
produtoDiv.appendChild(nomeProduto);
produtoDiv.appendChild(descricaoProduto);
produtoDiv.appendChild(precoProduto);
produtoDiv.appendChild(imagemProduto);