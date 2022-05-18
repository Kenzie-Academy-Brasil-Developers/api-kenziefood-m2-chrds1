import Api from "../controllers/Api.js";

class Produtos{
    static sectionProdutos = document.getElementById('container-produtos')

    static async listarProdutos(){

        const listaProdutos = await Api.produtosPublicos();

        listaProdutos.forEach(el => {
            const divProduto =       document.createElement('div');
            const imagemProduto =    document.createElement('img');
            const nomeProduto =      document.createElement('p');
            const descricaoProduto = document.createElement('p');
            const preco =            document.createElement('p');
            const iconeCarrinho =    document.createElement('button')
            const categoriaProduto = document.createElement('span')

            nomeProduto.innerText = el.nome;
            imagemProduto.src = el.imagem;
            imagemProduto.alt = 'Imagem produto';
            categoriaProduto.innerHTML = `${Produtos.categoria(el.categoria)}  ${el.categoria}`;
            descricaoProduto.innerText = el.descricao;
            preco.innerText = el.preco.toLocaleString('pt-BR',{style:'currency', currency:'BRL'} );
            iconeCarrinho.innerHTML = `<i class="fa-solid fa-cart-plus"></i>`

            divProduto.id = el.id;
            divProduto.classList.add('card-produto');
            imagemProduto.classList.add('img-produto');
            nomeProduto.classList.add('texto-nome');
            categoriaProduto.classList.add('btn-categoria', `${el.categoria}`);
            descricaoProduto.classList.add('texto-descricao');
            preco.classList.add('texto-preco');
            iconeCarrinho.classList.add('btn-carrinho');

            divProduto.append(imagemProduto, nomeProduto, descricaoProduto, categoriaProduto, preco, iconeCarrinho);
            Produtos.sectionProdutos.append(divProduto);

            //categoriaProduto.addEventListener('click', filtroProduto());
        });
        
    }
    static categoria(el){
        if(el == "Frutas" || el == "frutas"){
            return `<i class="fa-solid fa-strawberry"></i>`
        } else if(el == "Panificadora"|| el == "panificadora"){
            return `<i class="fa-solid fa-baguette"></i>`
        } else if(el == "Bebidas" || el == "bebidas"){
            return `<i class="fa-solid fa-wine-glass"></i>`
        } else{return ""} 
    }
}
Produtos.listarProdutos()