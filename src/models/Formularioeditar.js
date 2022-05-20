import Api from "../controllers/Api.js";

class FormularioEditar{
    static pedido = {}
    static criaModalFormulario(evt, objetoProduto) {
        /* Valor a ser mudado container a baixo espera um container na plataforma mudar */
        let container = document.getElementById("containerCadastro");
        container.innerHTML = "";
        let divHeader = document.createElement("div");
        let h1 = document.createElement("h1");
        let buttonClose = document.createElement("button");

        divHeader.id = "cadastroHeader";
        h1.innerText = "Editar produto";
        buttonClose.innerText = "X";
        divHeader.append(h1, buttonClose);

        /* Formulario */
        const divFormContainer = document.createElement("div");
        const form = document.createElement("form");
        const h2 = document.createElement("h2");
        const div2 = document.createElement("div");
        const button1 = document.createElement("h2");
        const button2 = document.createElement("h2");
        const button3 = document.createElement("h2");
        const label1 = document.createElement("label");
        const label2 = document.createElement("label");
        const label3 = document.createElement("label");
        const label4 = document.createElement("label");
        const inputNome = document.createElement("input");
        const inputDesc = document.createElement("input");
        const inputValor = document.createElement("input");
        const inputImagem = document.createElement("input");
        const inputSubmit = document.createElement("button");
        const buttonCancelar = document.createElement("button");

        form.classList.add("formulario-adicionar");
        form.id = "formularioCadastro";

        
        label1.setAttribute("for", "nome");
        label2.setAttribute("for", "descricao");
        label3.setAttribute("for", "valor");
        label4.setAttribute("for", "imagem");
        
        label1.innerText = "Nome do Produto";
        label2.innerText = "Descrição";
        label3.innerText = "Valor do produto";
        label4.innerText = "Link da imagem";
        
        inputNome.type = "text";
        inputNome.placeholder = "Digitar o nome";
        inputNome.name = "nome";
        inputNome.value = objetoProduto.nome;

        inputDesc.type = "text";
        inputDesc.placeholder = "Digitar a descrição";
        inputDesc.name = "descricao";
        inputDesc.value = objetoProduto.descricao;
        
        inputValor.type = "text";
        inputValor.placeholder = "Digite o valor aqui";
        inputValor.name = "preco";
        inputValor.value = objetoProduto.preco;

        inputImagem.type = "url";
        inputImagem.placeholder = "Inserir link";
        inputImagem.name = "imagem" ;
        inputImagem.value = objetoProduto.imagem;
        
        inputSubmit.type = "submit";
        inputSubmit.innerText = "Salvar alteraçoes";
        inputSubmit.id = "cadastrarProduto";
        
        h2.innerText = "Categorias";
        div2.id = "categorias";

        button1.innerText = "Panificadora";
        button2.innerText = "Frutas";
        button3.innerText = "Bebidas";

        buttonCancelar.innerText = "Excluir alterações"
        buttonCancelar.classList.add("cancelarEdit")
        buttonCancelar.addEventListener('click', ()=>{
            container.removeChild(divHeader);
            container.removeChild(divFormContainer);
        });

        div2.append(button1, button2, button3);
        h2.append(div2);
        form.append(label1, inputNome, label2, inputDesc,h2,label3,inputValor,label4,inputImagem, inputSubmit, buttonCancelar);
        divFormContainer.append(form);
        container.append(divHeader, divFormContainer);

        //this.enviarDadosEditados(objetoProduto);

        buttonClose.addEventListener('click', ()=>{
            const divEditar = document.getElementById('containerCadastro');
            divEditar.style.display = 'none';
        });
    }

    static enviarDadosEditados(objetoProduto) {
        const botao = document.getElementById('cadastrarProduto');
        botao.addEventListener('click', (e) => {
            const produtoEditado = FormularioEditar.criaPedido(objetoProduto.id);
            console.log()
        })
    }

    static criaPedido(id){
        let form = document.getElementById("formularioCadastro");
        form.addEventListener("submit", (e) => {
            FormularioEditar.criaCorpo(e, id)
        }); 
    }
    static async criaCorpo(e, id){
        e.preventDefault();
        let form = [... e.currentTarget]
        let valor = form[2].value
        let regex = /[a-z]+/i;
        let result = valor.match(regex)
        if(result){
            return window.alert("Apenas valores sao permitidos");
        }else{
            form.forEach(dadosInput=>{
                if(dadosInput.value != "" && dadosInput.name != ""){
                    FormularioEditar.pedido[dadosInput.name] = dadosInput.value
                }else{
                    //throw window.alert("preencha todos valores");
                }
            });
        }

        FormularioEditar.pedido.preco = Number(FormularioEditar.pedido.preco);

        await Api.editarProduto(id, FormularioEditar.pedido);
        location.reload();
        return FormularioEditar.pedido;
    }
}

export default FormularioEditar;