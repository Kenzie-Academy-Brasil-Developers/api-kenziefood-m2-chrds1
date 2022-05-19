import { Produtos } from "./models/ListaProdutos.js"
import { Carrinho } from "./models/Carrinho.js"

Carrinho.criarCarrinho();
Produtos.listarProdutos(Produtos.lista);
Produtos.addHandlePesquisa();
Produtos.addHandleLogin();

setInterval(() => {
    let x = window.screen.width;
    if(x < 765){
        carrinho.style.width = "60%"
    }else if(x >= 765 && carrinho.style.width == "60%"){
        carrinho.style.width = "21%"
    }else if(carrinho.style.display === "none" && carrinho.style.width === "21%"){
        containerCarrinho.style.display = 'flex';
        carrinho.style.display = "flex";
    }
}, 1000);