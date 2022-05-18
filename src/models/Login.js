import Api from "../controllers/Api";

const formularioLogin = document.getElementById("form-login");
formularioLogin.addEventListener("submit", login.logarUsuario);

class login{
    static async logarUsuario(event){
        
        event.preventDefault()

        const dadosLogin = capiturarDadosFormularios(event)
        Api.login(dadosLogin)
    }

    capiturarDadosFormularios(event){
        const dadosForm = [... event.currentTarget];
        const dadosUsuario = {};

        dadosForm.forEach((dado)=>{
            if(dado.name != "" || dado.name != "cidade"){
                dadosUsuario[dado.name] = dado.value
            }
        })

        return dadosUsuario
    }
}
