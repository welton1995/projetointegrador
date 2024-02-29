const container = document.querySelector('#container');
const verificaToken = localStorage.getItem('token');

try {
  if(!verificaToken){
    alert('Usuário não autorizado!');
    window.location.href = './index.html';
  }
  acessarAplicacao = async ()=> {
      const token = localStorage.getItem('token')
      const requestOptions = {
        method: "GET",
        follow: "redirect",
        headers: {
          "Authorization":`'${token}'`,
          "Content-Type": "application/json",
        }    
      }

  const resposta = await fetch(`https://piunivesp.cyclic.app/users`, requestOptions);
  const conteudo = await resposta.json();

  // Válida requisição da API
  if(conteudo == "Não Autorizado!") {
    alert("Usuário não autenticado!");
    console.log(conteudo)
    window.location.href="./index.html"
    return;
  }

  let usuarios = conteudo.usuarios.reverse();

  usuarios.forEach((elemento)=>{
    let UserComponente = document.createElement(`div`);
    let UserNameTag = document.createElement(`b`);

    UserNameTag.innerHTML = `${elemento.nome.split(" ")[0]}`

    UserComponente.appendChild(UserNameTag);
    container.appendChild(UserComponente);
  });

  console.log(conteudo.usuarios)
  container.style.display = "block";
    }
  } catch(error) {
    console.log(error);
  }

  acessarAplicacao()

  // 10 min token válido
  setTimeout(() => {
    localStorage.removeItem('token');
    alert('Sesão expirada! Entre novamente!');
    window.location.reload();
    return
  }, 600000);

