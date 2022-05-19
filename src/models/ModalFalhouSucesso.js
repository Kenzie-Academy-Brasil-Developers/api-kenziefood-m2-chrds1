class Modals {
    static criaModalFalhou(){
        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        let div3 = document.createElement("div")
        let p = document.createElement("p")
        let btn = document.createElement("button")
        let h1 = document.createElement("h1")
        div1.id = "modal-Falhou"
    
        h1.innerText = "Status"
        btn.innerText = "X"
    
        p.innerText = "Ocorreu algum erro, o produto não foi adicionado"
    
        div3.classList = "falhou"
    
        div2.append(h1, btn)
        div1.append(div2,p,div3)
        document.body.append(div1)
        btn.addEventListener("click", ()=>{
            document.body.removeChild(div1)
        })
    }
    static criaModalSucesso(){
        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        let div3 = document.createElement("div")
        let p = document.createElement("p")
        let btn = document.createElement("button")
        let h1 = document.createElement("h1")
        div1.id = "modal-Sucesso"
    
        h1.innerText = "Status"
        btn.innerText = "X"
    
        p.innerText = "Produto adicionado com sucesso"
    
        div3.classList = "sucesso"
    
        div2.append(h1, btn)
        div1.append(div2,p,div3)
        document.body.append(div1)
        btn.addEventListener("click", ()=>{
            document.body.removeChild(div1)
        })
    }
}
export {Modals}