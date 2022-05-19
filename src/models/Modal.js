class Modal {
    static criarModal(erro) {
        const body =  document.querySelector('body');
        const modal = document.createElement('section');
        const conteudoModal = document.createElement('div');
        const modalHeader = document.createElement('div');
        const tituloModal = document.createElement('h3');
        const fecharModal = document.createElement('i');
        const modalBody = document.createElement('div');

        modal.classList.add('modal');
        modal.setAttribute('id', 'janela-modal');
        conteudoModal.classList.add('conteudo-modal');
        modalHeader.classList.add('header-modal');
        fecharModal.classList.add('fa-solid', 'fa-xmark');
        fecharModal.setAttribute('id', 'fechar-modal');
        modalBody.classList.add('body-modal');

        modal.style.display = 'block';
        tituloModal.innerText = 'Erro!';
        modalBody.innerText = erro;

        modalHeader.append(tituloModal, fecharModal);
        conteudoModal.append(modalHeader, modalBody);
        modal.append(conteudoModal);
        body.append(modal);

        window.onclick = function(event) {
            if(event.target == modal) {
                modal.style.display = 'none';
            }
        }

        this.botaoFecharModal();
    }

    static botaoFecharModal() {
        const botaoFechar = document.getElementById('fechar-modal');
        const modal = document.getElementById('janela-modal');

        botaoFechar.addEventListener('click', () => {
            modal.style.display = 'none';
        })
    }

    static modalDeErro(erro) {
        let mensagemDeErro = erro.message;

        if(mensagemDeErro === 'Validation error: Deve ser um email valido' || mensagemDeErro === 'Validation error: Campo email não pode ser vazio,\nValidation error: Deve ser um email valido') {
            mensagemDeErro = 'Digite um e-mail válido!';
        }
        else if(mensagemDeErro === 'password invalid') {
            mensagemDeErro = 'Senha inválida!';
        }
        else {
            mensagemDeErro = 'Verifique se os dados digitados estão corretos.';
        }

        
        this.criarModal(mensagemDeErro);
    }
}

export default Modal