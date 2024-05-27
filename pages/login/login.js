let email;
let password;


function Login (){
    email = document.getElementById('email').value;
    password = document.getElementById('senha').value;
    const body = {
        email,
        password,
    }

    const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login/auth/login`,body);

    promise
        .then(res => {
            console.log(res)
            localStorage.setItem(
                "trackit",
                JSON.stringify({ token: res.data.token, userImage: res.data.image })
            );
            
            window.location.href = "../principal/principal.html"
    })
        .catch(err => {
            console.log(err)
            alert("Dados Incorretos")
        })
}
