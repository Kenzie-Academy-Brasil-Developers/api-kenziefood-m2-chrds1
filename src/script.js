
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