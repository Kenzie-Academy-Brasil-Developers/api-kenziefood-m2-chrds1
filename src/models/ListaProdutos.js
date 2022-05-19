import Api from "../controllers/Api.js";
import {Carrinho} from "../models/Carrinho.js";
    


class Produtos{
    static sectionProdutos = document.getElementById('container-produtos')
    static btnFrutas = document.getElementById('Frutas')
    static btnBebidas = document.getElementById('Bebidas')
    static btnPanificadora = document.getElementById('Panificadora')

    static async filtroProdutos(event) {
        event.preventDefault();

        const lista = await Api.produtosPublicos();
        if(event.target.id === "Todos"){
            Produtos.sectionProdutos.innerHTML = ""
            Produtos.listarProdutos();
        }else{
            const filtroCategoria = lista.filter((el)=>{
                return (el.categoria == event.target.innerText)
            });

            Produtos.sectionProdutos.innerHTML = ""
            Produtos.listarProdutos(filtroCategoria)
        }
        
    }

    static async listarProdutos(Array){
        let lista = []

        if(localStorage.length == 0) {
            Array === undefined? lista = await Api.produtosPublicos(): lista = Array;
        }

        else {
            Array === undefined? lista = await Api.produtosPrivados(): lista = Array;
        }

        lista.forEach(el => {
            const divProduto =       document.createElement('div');
            const imagemProduto =    document.createElement('img');
            const infoProduto      = document.createElement('div');
            const nomeProduto =      document.createElement('p');
            const descricaoProduto = document.createElement('p');
            const precoEBotao      = document.createElement('div');
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

            iconeCarrinho.id = el.id;
            divProduto.classList.add('card-produto');
            imagemProduto.classList.add('img-produto');
            infoProduto.classList.add('info-produto');
            nomeProduto.classList.add('texto-nome');
            categoriaProduto.classList.add('btn-categoria');
            descricaoProduto.classList.add('texto-descricao');
            precoEBotao.classList.add('preco-e-botao-carrinho');
            preco.classList.add('texto-preco');
            iconeCarrinho.classList.add('btn-carrinho');

            precoEBotao.append(preco,iconeCarrinho);
            infoProduto.append(nomeProduto, descricaoProduto, categoriaProduto, precoEBotao);
            divProduto.append(imagemProduto, infoProduto);
            Produtos.sectionProdutos.append(divProduto);

        });
         Produtos.addHandleFiltroCategoria();
         Produtos.addHandleCarrinho();
         Carrinho.addHandlerCarrinhoFlut();
         
    }
    static categoria(el){
        if(el == "Frutas" || el == "frutas"){
            return `<i class="fa-solid fa-lemon"></i>`
        } else if(el == "Panificadora"|| el == "panificadora"){
            return `<i class="fa-solid fa-bread-slice"></i>`
        } else if(el == "Bebidas" || el == "bebidas"){
            return `<i class="fa-solid fa-wine-glass"></i>`
        } else{return ""} 
    }

    static addHandleFiltroCategoria(){
        const categoriaProduto = document.querySelectorAll('.btn-categoria')

        categoriaProduto.forEach(el => el.addEventListener('click', Produtos.filtroProdutos));
    }

    static addHandleCarrinho(){
        const addCarrinho = document.querySelectorAll('.btn-carrinho');
        
        addCarrinho.forEach(el => el.addEventListener('click', Produtos.receberDados));
    }

    static async receberDados(event){
        event.preventDefault();
        const id = event.currentTarget.id
        let lista;
        if(localStorage.length == 0) {
            lista = await Api.produtosPublicos();
        }
        else {
            lista = await Api.produtosPrivados();
        }

        const filtro = await lista.filter(el => el.id === id)
        
        filtro.forEach((el)=>{
            Carrinho.criaItemCarrinho(el.imagem, el.nome, el.categoria, el.preco)
        })  
    }
    static async addHandlePesquisa(){
        const lista = await Api.produtosPublicos();
        const buttonBusca = document.querySelector('.fa-magnifying-glass');

        buttonBusca.addEventListener('click', function(e){
            e.preventDefault();
            let inputBusca = document.querySelector('.inputPesquisa');
            
            const valorFiltrado = lista.filter((produto) => {
                if((produto.nome).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '') == (inputBusca.value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '')){
                    return produto.nome
                } else if((produto.categoria).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '') == (inputBusca.value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '')){
                    return produto.categoria
                }
            })

            Produtos.sectionProdutos.innerHTML = ""
            Produtos.listarProdutos(valorFiltrado)
        })
    }

    static addHandleLogin(){
        const buttonLogin = document.querySelector(".container-login");

        buttonLogin.addEventListener('click', (e)=>{
            e.preventDefault()
            const opcoes = document.getElementById('opcoesUsuario');
            console.log("click")
            if(opcoes.style.display === 'none') {
                opcoes.style.display = 'block';
            }
            else {
                opcoes.style.display = 'none';
            }
            //window.location = "../src/Pages/login.html"
        });
    }
}


export{Produtos}
