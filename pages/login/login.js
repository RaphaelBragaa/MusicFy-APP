
function Login() {
  console.log('Login');
  const email = document.getElementById('email').value;
  const password = document.getElementById('senha').value;

  const body = {
    email,
    password,
  };

  const promise = axios.post(
    `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`,
    body
  );

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
      console.error(err);
      alert("Error: " + err.message);
      if (err.response && err.response.status === 401) {
        alert("E-mail ou senha inválidos. Por favor, tente novamente.");
      } else {
        alert("Ocorreu um erro durante o login. Por favor, tente novamente mais tarde.");
      }
    });
}
