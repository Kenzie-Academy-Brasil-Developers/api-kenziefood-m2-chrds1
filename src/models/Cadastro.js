import Api from "../controllers/Api.js"

class Cadastro{
    static cadastrarUsuario(event){
        event.preventDefault();
        
        const dadosUsuario = Cadastro.capturarDadosFormularios(event);
        console.log(dadosUsuario)
        Api.criarUsuario(dadosUsuario);
    }
    
    static capturarDadosFormularios(event) {
        event.preventDefault();
        const dadosForm = [... event.currentTarget];
        const dadosUsuario = {};
    
        dadosForm.forEach((dado)=>{
            if(dado.name != "" && dado.name != "cidade"){
                dadosUsuario[dado.name] = dado.value;
            }
        })
        
        return dadosUsuario;
    }
}

const formularioCadastro = document.getElementById("form-cadastro");

formularioCadastro.addEventListener("submit", Cadastro.cadastrarUsuario);