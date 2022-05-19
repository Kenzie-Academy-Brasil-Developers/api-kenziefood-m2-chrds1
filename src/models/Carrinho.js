class Carrinho{
    static criarCarrinho(){
        let container           = document.getElementById("containerCarrinho");
        const div               = document.createElement("div");
        const divHeader         = document.createElement("div");
        const ul                = document.createElement("ul");
        const divFooter         = document.createElement("div");
        /* Header carrinho */
        const h1                = document.createElement("h1");
        const botaoHeader       = document.createElement("button");
        /* Footer carrinho */
        const qntdItem          = document.createElement("h2");
        const valorItem         = document.createElement("h2");
        const qntdItens         = document.createElement("p");
        const valorItens        = document.createElement("p");
    
        div.id                  = "carrinho";
        divHeader.id            = "carrinhoHeader";
        ul.id                   = "containerItens";
        divFooter.id            = "preco";
        botaoHeader.id          = "fecharCarrinho";
        qntdItens.id            = "quantidadeItens";
        valorItens.id           = "valor";
    
        h1.innerHTML            = `<i class="fa-solid fa-cart-arrow-down"></i>Carrinho`;
        botaoHeader.innerText   = "X";
        qntdItem.innerText      = "Quantidade";
        valorItem.innerText     = "Total";
    
        qntdItem.classList.add("flex");
        valorItem.classList.add("flex");
        
        qntdItem.append(qntdItens);
        valorItem.append(valorItens);
        divFooter.append(qntdItem, valorItem);
        
        divHeader.append(h1, botaoHeader);
        div.append(divHeader, ul, divFooter);
        container.append(div);
        
        botaoHeader.addEventListener("click", function(){
            container.removeChild(div)
        })
    }

    static criaItemCarrinho(imgScr, nomeProduto, categoriaProduto, valor){
        const lista     = document.getElementById("containerItens");
        const li        = document.createElement("li");
        const img       = document.createElement("img");
        const desc      = document.createElement("div");
        const nomeProd  = document.createElement("h2");
        const categoria = document.createElement("h3");
        const valorProd = document.createElement("p");
        const button    = document.createElement("button");
        const icon      = document.createElement("i");
    
        let formatador = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
        })
    
        icon.classList.add("fa-solid","fa-trash");
        valorProd.classList.add("valorProduto");
        
        img.src             = imgScr;
        nomeProd.innerText  = nomeProduto;
        categoria.innerText = categoriaProduto;
        valorProd.innerText = formatador.format(valor)
    
        button.append(icon);
    
        desc.append(nomeProd, categoria, valorProd);
        li.append(img, desc, button);
        lista.append(li);
        
        Carrinho.calcularPreço()
        button.addEventListener("click", function(){
            lista.removeChild(li)
            Carrinho.calcularPreço()
        })
        return li
    }
    static calcularPreço(){
        const lista     = document.getElementById("containerItens");
        const preco     = document.getElementById("valor")
        const qntdItens = document.getElementById("quantidadeItens")
    
        let valorTotal  = 0
    
        let arrNode = lista.childNodes
    
        for(let i = 0; i < arrNode.length; i++){
            let length    = arrNode[i].childNodes[1].childNodes[2].innerText.length
            let valorItem = arrNode[i].childNodes[1].childNodes[2].innerText.slice(3, length).replace(",", ".")
    
            if(length >= 9){
                let valorItem = arrNode[i].childNodes[1].childNodes[2].innerText.slice(3, length)
                let stringValorItem = ""
    
                for(let i = 0; i < valorItem.length; i++){
                    if(valorItem[i] != "."){
                        stringValorItem+=valorItem[i]
                    }
                }
                
                let res = stringValorItem.replace(",", ".");
                valorTotal+= Number(res)
            }else{
                valorTotal += Number(valorItem)
            }
        }
    
        let formatador = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL",
            currencyDisplay: "symbol"
        })
    
        qntdItens.innerText  = arrNode.length
        preco.innerText = formatador.format(valorTotal)
    }
    
}
Carrinho.criarCarrinho()
let btn = document.getElementById("chamarCarrinho").addEventListener('click',
Carrinho.criarCarrinho)
let addCarrinho = document.getElementById("addCarrinho").addEventListener('click', ()=>{
    Carrinho.criaItemCarrinho("https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/mousse.png", "Mousse de morango com a fruta", "Frutas", 27.5)
})

Carrinho.criaItemCarrinho("https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/mousse.png", "Mousse de morango com a fruta", "Frutas", 12337.5)
