class MenuDashboard {
    static menuUsuario() {
        this.listenerBotaoLogin();
        const opcoes = document.getElementById('opcoesUsuario');
        opcoes.style.display = 'none';

        const avatar = document.getElementById('imgMenuUsuario');
        const lista  = document.getElementById('infoUsuario');

        avatar.src = '../img/user-logged-in-icon.png';
        const time = document.createElement('li')
        const dashboard = document.createElement('li');
        const produtos = document.createElement('li');
        const logout = document.createElement('li');

        dashboard.id = 'botao-dashboard';
        produtos.id = 'botao-produtos-dashboard';
        logout.id = 'botao-logout-usuario';

        time.innerText = 'Time 6';
        dashboard.innerText = 'Dashboard';
        produtos.innerText = 'Produtos';
        logout.innerText = 'Logout';

        lista.append(time, dashboard, produtos, logout);
        this.listenerMenuLogado();

    }

    static listenerMenuLogado() {
        const dashboard = document.getElementById('botao-dashboard');
        dashboard.addEventListener('click', (e) => {
            window.location.assign('./dashboard.html');
        });

        const logout = document.getElementById('botao-logout-usuario');
        logout.addEventListener('click', (e) => {
            localStorage.clear();
            window.location.assign('../../index.html');
        });

        const produtos = document.getElementById('botao-produtos-dashboard');
        produtos.addEventListener('click', (e) => {
            window.location.assign('../../index.html');
        });
    }

    static listenerBotaoLogin(){
        const buttonLogin = document.querySelector(".container-login");

        buttonLogin.addEventListener('click', (e)=>{
            e.preventDefault()
            const opcoes = document.getElementById('opcoesUsuario');
            console.log("click")
            if(opcoes.style.display === 'none') {
                opcoes.style.display = 'block';
            }
            else {
                opcoes.style.display = 'none';
            }
        });
    }
}

MenuDashboard.menuUsuario();