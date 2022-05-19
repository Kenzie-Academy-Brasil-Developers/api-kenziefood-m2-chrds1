class Formulario{
    static pedido = {}
    static criaModalFormulario(evt){

        let container = document.getElementById("containerCadastro");
        container.innerHTML = "";
        let divHeader = document.createElement("div");
        let h1 = document.createElement("h1");
        let buttonClose = document.createElement("button");

        divHeader.id = "cadastroHeader";
        h1.innerText = "Cadastro de produto";
        buttonClose.innerText = "X";
        divHeader.append(h1, buttonClose);

        /* Formulario */
        let divFormContainer = document.createElement("div");
        let form = document.createElement("form");
        let h2 = document.createElement("h2");
        let div2 = document.createElement("div");
        let button1 = document.createElement("h2");
        let button2 = document.createElement("h2");
        let button3 = document.createElement("h2");
        let label1 = document.createElement("label");
        let label2 = document.createElement("label");
        let label3 = document.createElement("label");
        let label4 = document.createElement("label");
        let inputNome = document.createElement("input");
        let inputDesc = document.createElement("input");
        let inputValor = document.createElement("input");
        let inputImagem = document.createElement("input");
        let inputSubmit = document.createElement("input");

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

        inputDesc.type = "text";
        inputDesc.placeholder = "Digitar a descrição";
        inputDesc.name = "descricao";
        
        inputValor.type = "text";
        inputValor.placeholder = "Digite o valor aqui";
        inputValor.name = "preco";
        
        inputImagem.type = "url";
        inputImagem.placeholder = "Inserir link";
        inputImagem.name = "imagem" ;
        
        inputSubmit.type = "submit";
        inputSubmit.value = "Cadastrar Produto";
        inputSubmit.id = "cadastrarProduto";
        
        h2.innerText = "Categorias";
        div2.id = "categorias";

        button1.innerText = "Panificadora";
        button2.innerText = "Frutas";
        button3.innerText = "Bebidas";

        div2.append(button1, button2, button3);
        h2.append(div2);
        form.append(label1, inputNome, label2, inputDesc,h2,label3,inputValor,label4,inputImagem, inputSubmit);
        divFormContainer.append(form);
        container.append(divHeader, divFormContainer);

        buttonClose.addEventListener('click', ()=>{
            container.removeChild(divHeader);
            container.removeChild(divFormContainer);
        });
    }
    static handlerEvent(){
        let handler = document.getElementById("editBtn");
        handler.addEventListener('click', (evt)=>{
            Formulario.criaModalFormulario();
            Formulario.criaPedido(evt);
            let div  = document.getElementById("categorias").childNodes
            div.forEach(elem=>{
                
                elem.addEventListener("click", (e)=>{
                    div.forEach((elem2)=>{
                        elem2.classList.remove("selecaoCategoria")
                    })
                    Formulario.pedido.categoria = ""
                    Formulario.pedido.categoria = elem.innerText
                    e.target.classList.add("selecaoCategoria")
                });
            });
        });
    }
    static criaPedido(e){
        let form = document.getElementById("formularioCadastro");
        form.addEventListener("submit", Formulario.criaCorpo); 
    }
    static criaCorpo(e){
        e.preventDefault()
        let form = [... e.currentTarget]
        let valor = form[2].value
        let regex = /[a-z]+/i;
        let result = valor.match(regex)
        if(result){
            return window.alert("Apenas valores sao permitidos");
        }else{
            form.forEach(dadosInput=>{
                if(dadosInput.value != "" && dadosInput.name != ""){
                    Formulario.pedido[dadosInput.name] = dadosInput.value
                }else{
                    //throw window.alert("preencha todos valores");
                }
            });
        }
        console.log(Formulario.pedido);
        
    }
}

Formulario.handlerEvent()
