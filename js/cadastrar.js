const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const confirma = document.querySelector('#confirma');
const cadastrar = document.querySelector('#cadastrar');

cadastrar.addEventListener('click', (event)=> {
  event.preventDefault();

  if(!nome.value){
    return alert("O nome é obrigatŕio!");
  }
  if(!email.value){
    return alert("O email é obrigatŕio!");
  }
  if(!senha.value){
    return alert("A senha é obrigatŕia!");
  }
  if(!confirma.value){
    return alert("Confirma a senha");
  }
  if(senha.value != confirma.value){
    return alert("Senhas não conferem!");
  }


  try {
    teste = async ()=> {
      const raw = {
        nome: nome.value,
        email: email.value,
        senha: senha.value,
        confirma: confirma.value
      }

      const requestOptions = {
        method: "POST",
        body: JSON.stringify(raw),
        headers: {
          "Content-Type": "application/json"
        }    
      }

  const resposta = await fetch(`https://piunivesp.cyclic.app/users`, requestOptions);
  const conteudo = await resposta.json();

  if(conteudo == "Usuário já cadastrado!") {
    alert('Usuário já cadastrado!');
    window.location.href="./cadastrar.html"
    return;
  }
  alert(`Usuário cadastrado com sucesso!`);
  window.location.href="./index.html"
  console.log(conteudo)

    }
  } catch (error) {
    return console.log(error);
  }
  teste()
});