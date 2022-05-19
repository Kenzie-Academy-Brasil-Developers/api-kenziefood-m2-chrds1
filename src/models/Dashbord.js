import Api from "../controllers/Api.js";

class ProdutosDashboard{

    static containerProdutos = document.querySelector('.container-produtos-dashboard')

    static async criarCard(Array){
        ProdutosDashboard.containerProdutos.innerHTML=""
        let lista = []

        if(localStorage.length > 0) {
            Array === undefined? lista = await Api.produtosPrivados(): lista = Array;
        } 
        else{ProdutosDashboard.containerProdutos.innerHTML = `<h1>Usuário não está logado</h1>`}
        
        if(lista.length>0) {
            lista.forEach((produto)=>{
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
                divExcluir.classList.add("excluir")

                btnEditar.innerHTML = `<i id="${produto.id}"class="fas fa-edit"></i>`
                btnExcluir.innerHTML = `<i id="${produto.id}" class="fas fa-trash"></i>`

                imgProduto.src = produto.imagem
                nomeProduto.innerText = produto.nome
                categoriaProduto.innerText= produto.categoria
                descricaoProduto.innerText= produto.descricao

                divProduto.append(imgProduto, nomeProduto)
                divEditar.append(btnEditar)
                divExcluir.append(btnExcluir)
                containerIcones.append(divEditar, divExcluir)
                containerProd.append(divProduto, categoriaProduto, descricaoProduto, containerIcones)

                ProdutosDashboard.containerProdutos.append(containerProd)
            })
        }
        ProdutosDashboard.addHandleFiltroCategoria();
        ProdutosDashboard.addHandleExcluir();
    }
    static async filtroProdutos(event) {
        event.preventDefault();

        let lista = await Api.produtosPrivados()

        
        if(event.target.id === "Todos"){
            ProdutosDashboard.containerProdutos.innerHTML = ""
            ProdutosDashboard.criarCard();
        }else if(lista.length > 0){
            const filtroCategoria = lista.filter((el)=>{
                return (el.categoria == event.target.innerText)
            });

            ProdutosDashboard.containerProdutos.innerHTML = ""
            ProdutosDashboard.criarCard(filtroCategoria)
        } else{
            ProdutosDashboard.containerProdutos.innerHTML = ""
            const mensagem = document.createElement('smal')
            mensagem.innerText= "Sem produtos da categoria escolhida"
            ProdutosDashboard.containerProdutos.append(mensagem)
        }
        
    }
    static async pesquisarNome(event){
        event.preventDefault();

        let lista = []

        lista = await Api.produtosPrivados()

        const valorFiltrado = lista.filter((produto) => {
            if((produto.nome).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '') == (event.target.value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '')){
                return produto.nome
            } else if((produto.categoria).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '') == (event.target.value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '')){
                return produto.categoria
            }
        })

        ProdutosDashboard.containerProdutos.innerHTML = ""
        ProdutosDashboard.criarCard(valorFiltrado)
    }
    static addHandlePesquisa(){

        const buttonBusca = document.querySelector('.fa-magnifying-glass');
        const inputBusca = document.querySelector('.inputPesquisa');

        inputBusca.addEventListener('keyup', ProdutosDashboard.pesquisarNome);
    }
    static addHandleFiltroCategoria(){
        const categoriaProduto = document.querySelectorAll('.btn-categoria')

        categoriaProduto.forEach(el => el.addEventListener('click', ProdutosDashboard.filtroProdutos));
    }
    static addHandleExcluir(){
        const excluir = document.querySelectorAll('.fa-trash')
        console.log(excluir)
        excluir.forEach((el)=> el.addEventListener('click', ProdutosDashboard.excluirItem))
    }
    static async excluirItem(event){
        const id = event.target.id;
        const deletar = await Api.deletarProduto(id);

        ProdutosDashboard.criarCard();
        return deletar
    }
}
ProdutosDashboard.criarCard();
ProdutosDashboard.addHandlePesquisa();
ProdutosDashboard.addHandleFiltroCategoria();