const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const entrar = document.querySelector('#btnform');

entrar.addEventListener('click', (event)=> {
  event.preventDefault();
  try {
    teste = async ()=> {
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
    return;
  }

  if(conteudo == "Senha inválida!") {
    alert(conteudo)
    window.location.href="./index.html"
    return;
  }
  console.log(conteudo)

    }
  } catch (error) {
    return console.log(error);
  }
  teste()
});