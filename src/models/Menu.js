class Menu {
    static menuUsuario() {
        const opcoes = document.getElementById('opcoesUsuario');
        opcoes.style.display = 'none';

        const avatar = document.getElementById('imgMenuUsuario');
        const lista  = document.getElementById('infoUsuario');

        if(localStorage.length == 0) {
            avatar.src = './src/img/user-logged-out-icon.png';
            const tituloLista = document.createElement('li')
            const login = document.createElement('li');
            const cadastro = document.createElement('li');

            login.id = 'fazer-login';
            cadastro.id = 'cadastrar-usuario';

            tituloLista.innerText = 'Não logado';
            login.innerText = 'Login';
            cadastro.innerText = 'Cadastrar';

            lista.append(tituloLista, login, cadastro);
            this.listenerMenu();
        }

        else {
            avatar.src = './src/img/user-logged-in-icon.png';
            const time = document.createElement('li')
            const dashboard = document.createElement('li');
            const logout = document.createElement('li');

            dashboard.id = 'botao-dashboard';
            logout.id = 'botao-logout-usuario';

            time.innerText = 'Time 6';
            dashboard.innerText = 'Dashboard';
            logout.innerText = 'Logout';

            lista.append(time, dashboard, logout);
            this.listenerMenuLogado();
        }
    }

    static listenerMenu() {
        const login = document.getElementById('fazer-login');
        login.addEventListener('click', (e) => {
            window.location.assign('../src/Pages/login.html');
        });

        const cadastro = document.getElementById('cadastrar-usuario');
        cadastro.addEventListener('click', (e) => {
            window.location.assign('../src/Pages/cadastro.html');
        });
    }

    static listenerMenuLogado() {
        const dashboard = document.getElementById('botao-dashboard');
        dashboard.addEventListener('click', (e) => {
            window.location.assign('../src/Pages/dashboard.html');
        });
        const logout = document.getElementById('botao-logout-usuario');
        logout.addEventListener('click', (e) => {
            localStorage.clear();
            location.reload();
        });
    }
}

export {Menu};