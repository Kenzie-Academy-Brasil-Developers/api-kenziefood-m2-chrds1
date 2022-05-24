import Modal from "../models/Modal.js";

class Api {
  static async criarUsuario(dadosDeUsuario) {
    const response = await fetch(
      "https://api-kenzie-food.herokuapp.com/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosDeUsuario),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "Error") {
          Modal.modalDeErro(res);
        } else {
          window.location.assign("./login.html");
        }
        return res;
      })
      .catch((error) => error);

    return response;
  }

  static async login(dadosDeLogin) {
    const response = await fetch(
      "https://api-kenzie-food.herokuapp.com/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosDeLogin),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "error" || res.error) {
          Modal.modalDeErro(res);
        } else {
          localStorage.setItem("Token", res);
          window.location.assign("../../index.html");
        }
        return res;
      })
      .catch((error) => error);

    return response;
  }

  static async produtosPublicos() {
    const response = await fetch(
      "https://api-kenzie-food.herokuapp.com/products",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => error);

    return response;
  }

  static async produtosPrivados() {
    const response = await fetch(
      "https://api-kenzie-food.herokuapp.com/my/products",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => error);

    return response;
  }

  static async criarProduto(produto) {
    const response = await fetch(
      "https://api-kenzie-food.herokuapp.com/my/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
        body: JSON.stringify(produto),
      }
    )
      .then((res) => JSON.stringify(produto))
      .then((res) => res)
      .catch((error) => error);

    return response;
  }

  static async editarProduto(id, produto) {
    const response = await fetch(
      "https://api-kenzie-food.herokuapp.com/my/products/" + id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
        body: JSON.stringify(produto),
      }
    )
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => error);

    return response;
  }

  static async deletarProduto(id) {
    const response = await fetch(
      "https://api-kenzie-food.herokuapp.com/my/products/" + id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    )
      .then((res) => res)
      .catch((error) => error);

    return response;
  }
}

export default Api;
