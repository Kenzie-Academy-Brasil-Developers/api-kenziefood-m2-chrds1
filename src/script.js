
import { Produtos } from "./models/ListaProdutos.js"
import { Carrinho } from "./models/Carrinho.js"
import { Menu } from "./models/Menu.js"

Menu.menuUsuario();
Carrinho.criarCarrinho();
Produtos.listarProdutos(Produtos.lista);
Produtos.addHandlePesquisa();
Produtos.addHandleLogin();


