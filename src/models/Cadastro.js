import Api from "../controllers/Api"

const formularioCadastro = document.getElementById("fomr-cadastro")

formularioCadastro.addEventListener("submit", cadastro.cadastrarUsuario)

class cadastro{

    static cadastrarUsuario(event){
        event.preventDefault()
        
        const dadosUsuario = this.capiturarDadosFormularios(event)
        console.log(dadosUsuario)
       Api.criarUsuario(dadosUsuario)

    }

    static capiturarDadosFormularios(event){
        event.preventDefault()
        const dadosForm = [... event.currentTarget];
        const dadosUsuario = {};
    
        dadosForm.forEach((dado)=>{
            if(dado.name != "" && dado.name != "cidade"){
                dadosUsuario[dado.name] = dado.value
            }
        })
    
        return dadosUsuario
    }
}