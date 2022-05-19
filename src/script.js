import { Produtos } from "./models/ListaProdutos.js"
import { Carrinho } from "./models/Carrinho.js"

Carrinho.criarCarrinho();
Produtos.listarProdutos(Produtos.lista);
Produtos.addHandlePesquisa();
Produtos.addHandleLogin();


