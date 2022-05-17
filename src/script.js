function criarCarrinho(){
    let container           = document.getElementById("containerCarrinho")
    const div               = document.createElement("div")
    const divHeader         = document.createElement("div")
    const ul                = document.createElement("ul")
    const divFooter         = document.createElement("div")
    /* Header carrinho */
    const h1                = document.createElement("h1")
    const botaoHeader       = document.createElement("button")
    /* Footer carrinho */
    const qntdItem          = document.createElement("h2")
    const valorItem         = document.createElement("h2")
    const qntdItens         = document.createElement("p")
    const valorItens        = document.createElement("p")

    div.id                  = "carrinho"
    divHeader.id            = "carrinhoHeader"
    ul.id                   = "containerItens"
    divFooter.id            = "preco"
    botaoHeader.id          = "fecharCarrinho"
    qntdItens.id            = "quantidadeItens"
    valorItens.id           = "valor"

    h1.innerHTML            = `<i class="fa-solid fa-cart-arrow-down"></i>Carrinho`
    botaoHeader.innerText   = "X"
    qntdItem.innerText      = "Quantidade"
    valorItem.innerText     = "Total"

    qntdItem.classList.add("flex")
    valorItem.classList.add("flex")

    qntdItem.append(qntdItens)
    valorItem.append(valorItens)
    divFooter.append(qntdItem, valorItem)
    
    divHeader.append(h1, botaoHeader)
    div.append(divHeader, ul, divFooter)
    container.append(div)
}
criarCarrinho()
