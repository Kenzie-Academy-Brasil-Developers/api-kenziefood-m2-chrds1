
class criarBotoes{
    static criarBotaoLogout(){
        const container02 = document.querySelector(".container02")
        const botaoSair = document.createElement("button")
        botaoSair.setAttribute("id", "logout")
        botaoSair.innerHTML="Logout"
        container02.append(botaoSair)
    }

    static criarBotaoLogin(){
        const botaoLogout = document.getElementById("logout")
        botaoLogout.style.display = "none"
        const container02 = document.querySelector(".container02")
        const botaoEntrar = document.createElement("button")
        botaoEntrar.setAttribute("id", "login")
        botaoEntrar.innerHTML="Login"
        container02.append(botaoEntrar)

    }

}

criarBotoes.criarBotaoLogout()


class logout{
    static botaoLogout = document.getElementById("logout")
    static botaoLogin = document.getElementById("login")
    static botoesFecharModal = document.querySelectorAll(".fechar-modal")
    static botaoConfirmarLogout = document.querySelector(".confirmar")
    
    static confirmarLogout(e){
        const modal = document.querySelector(".modal")
        modal.classList.add("visivel")
    }

    static fecharModal(){
        const modal = document.querySelector(".modal")
        modal.classList.remove("visivel")

    }

    static usuarioLogout(){
        localStorage.setItem("Token", "")
        const modal = document.querySelector(".modal")
        modal.classList.remove("visivel")
        criarBotoes.criarBotaoLogin()
    }

    static LogarUsuario(){
        window.location.assign('./login.html')
    }
}


logout.botaoLogout.addEventListener("click", logout.confirmarLogout)
logout.botoesFecharModal.forEach(botao => botao.addEventListener("click", logout.fecharModal))
logout.botaoConfirmarLogout.addEventListener("click", logout.usuarioLogout)
logout.botaoLogin.addEventListener("click", logout.LogarUsuario)

class ProdutosDashboard{

    static criarCard(){
        const containerProd = document.createElement("div")
        const divProduto = document.createElement("div")
        const imgProduto = document.createElement("img")
        const nomeProduto = document.createElement("p")
        const categoriaProduto = document.createElement("div")
        const descricaoProduto = document.createElement("div")
        const containerIcones = document.createElement("div")
        const divEditar = document.createElement("div")
        const btnEditar = document.createElement("i")
        const divExcluir = document.createElement("div")
        const btnExcluir = document.createElement("i")

        containerProd.classList.add("container-produto")
        divProduto.classList.add("produto-dashboard")
        imgProduto.classList.add("img-dashboard")
        nomeProduto.classList.add("nome-produto") 
        categoriaProduto.classList.add("categoria")
        descricaoProduto.classList.add("descricao")
        containerIcones.classList.add("acoes")
        divEditar.classList.add("editar")
        btnEditar.classList.add("fas fa-edit")
        divExcluir.classList.add("excluir")
        btnExcluir.classList.add("fas fa-trash")

        imgProduto.src = `${}`
        nomeProduto.innerHTML = `${}`
        categoriaProduto.innerHTML= `${}`
        descricaoProduto.innerHTML= `${}`

        divProduto.append(imgProduto, nomeProduto)
        divEditar.append(btnEditar)
        divExcluir.append(btnExcluir)
        containerIcones.append(divEditar, divExcluir)
        containerProd.append(divProduto, categoriaProduto, descricaoProduto, containerIcones)

        
    }
}
import { Produtos } from "./models/ListaProdutos.js"
import { Carrinho } from "./models/Carrinho.js"

Carrinho.criarCarrinho();
Produtos.listarProdutos(Produtos.lista);
Produtos.addHandlePesquisa();
Produtos.addHandleLogin();


