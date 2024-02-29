const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const entrar = document.querySelector('#btnform');
const loading = document.querySelector('#loading');
const form = document.querySelector('#form');

entrar.addEventListener('click', (event)=> {
  event.preventDefault();
  if(!email.value){
    return alert("Por favor digite seu e-mail!");
  }

  if(!senha.value){
    return alert("Por favor digite sua senha!");
  }

  try {
    teste = async ()=> {
      loading.style.display = 'block';
      email.style.display = "none";
      senha.style.display = "none";
      entrar.style.display = "none";
      form.style.display = "none";


      const raw = {
        email: email.value,
        senha: senha.value
      }

      const requestOptions = {
        method: "POST",
        body: JSON.stringify(raw),
        headers: {
          "Content-Type": "application/json"
        }    
      }

  const resposta = await fetch(`https://piunivesp.cyclic.app/login`, requestOptions);
  const conteudo = await resposta.json();

  if(conteudo.msg == "Autenticado") {
    window.location.href="./sobre.html"
    let token = localStorage.setItem('token', JSON.stringify(conteudo.token));
    console.log(conteudo.token);
    loading.style.display = 'none';
    return;
  }

  if(conteudo == "Senha inválida!" || conteudo == "Usuário não cadastrado!") {
    alert(conteudo)
    window.location.reload();
    return;
  }

  console.log(conteudo)

    }
  } catch (error) {
    return console.log(error);
  }
  teste();
});