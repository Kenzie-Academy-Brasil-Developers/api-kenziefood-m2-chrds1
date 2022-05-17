//import Modal from "../models/Modal.js";

class Api {
    static async criarUsuario(dadosDeUsuario) {
        const response = await fetch('https://api-kenzie-food.herokuapp.com/auth/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosDeUsuario)
        })
        .then((res) => res.json())
        .then((res) => {
            if(res.status === 'error') {
                //Modal.modalDeErro(res);
            }
            else {
                window.location.assign('./login.html');
            }
        })
        .catch((error) => error);

        return response;
    }

    static async login(dadosDeLogin) {
        const response = await fetch('https://api-kenzie-food.herokuapp.com/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosDeLogin)
        })
        .then((res) => res.json())
        .then((res) => {
            if(res.status === 'error') {
                //Modal.modalDeErro(res);
            }
            else {
                localStorage.setItem('Token', res.token)
            }
        })
        .catch((error) => error);

        return response;
    }

    static async produtosPublicos() {
        const response = await fetch('https://api-kenzie-food.herokuapp.com/products', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => error);

        return response;
    }
}

export default Api