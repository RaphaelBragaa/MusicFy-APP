function Cadastro(event) {
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;
    const name = document.getElementById('nome').value;
    const image = document.getElementById('foto').value;
    const body = {
        nomeUsuario: name,
        emailUsuario: email,
        senhaUsuario: password,
    };
  
    const promise = axios.post(
      `http://localhost:3000/usuarios/cadastrar`,
      body
    );
  
    console.log(promise);
  
    promise
      .then(res => {
        console.log(res);
        window.location.href = "../login/login.html";
      })
      .catch(err => {
        console.log(err);
        alert("Dados Incorretos")
        if (err.response && err.response.status === 401) {
          alert("E-mail ou senha inválidos. Por favor, tente novamente.");
        } else {
          alert("Ocorreu um erro durante o cadastro. Por favor, tente novamente mais tarde.");
        }
      });
  }
