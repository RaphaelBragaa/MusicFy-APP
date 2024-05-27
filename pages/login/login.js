
function Login(event) {
  event.preventDefault()
  console.log('Login');
  const email = document.getElementById('email').value;
  const password = document.getElementById('senha').value;

 const body = {
     emailUsuario: email,
     senhaUsuario: password
  };

  const promise = axios.post(
    `http://localhost:3000/usuarios/login`,
    body
  );

  console.log(promise);

  promise
    .then(res => {
      console.log(res);
      localStorage.setItem(
        "musicfy",
        JSON.stringify({ token: res.data.token, userImage: res.data.image })
      );
      window.location.href = "../principal/principal.html";
    })
    .catch(err => {
      console.log(err);
      alert("Error: " + err.message);
      if (err.response && err.response.status === 401) {
        alert("E-mail ou senha inválidos. Por favor, tente novamente.");
      } else {
        alert("Ocorreu um erro durante o login. Por favor, tente novamente mais tarde.");
      }
    });
}
