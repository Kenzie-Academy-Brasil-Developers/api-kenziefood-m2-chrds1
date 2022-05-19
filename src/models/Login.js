import Api from "../controllers/Api.js";

class login{
    static async logarUsuario(event){
        
        event.preventDefault()

        const dadosLogin = login.capturarDadosFormularios(event)
        Api.login(dadosLogin)
    }

    static capturarDadosFormularios(event){
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

const formularioLogin = document.getElementById("form-login");
formularioLogin.addEventListener("submit", login.logarUsuario);
