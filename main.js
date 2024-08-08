document.addEventListener('DOMContentLoaded', async function () {
  const nameElement = document.querySelector('#name');
  const usernameElement = document.querySelector('#username');
  const avatarElement = document.querySelector('#avatar');
  const reposElement = document.querySelector('#repos');
  const followersElement = document.querySelector('#followers');
  const followingElement = document.querySelector('#following');
  const linkElement = document.querySelector('#link');

  try {
    const resposta = await fetch('https://api.github.com/users/ericbortoleto');
    if (!resposta.ok) {
      throw new Error('Erro ao buscar dados do GitHub');
    }
    const json = await resposta.json();

    nameElement.innerText = json.name;
    usernameElement.innerText = json.login;
    avatarElement.src = json.avatar_url;
    reposElement.innerText = json.public_repos;
    followersElement.innerText = json.followers;
    followingElement.innerText = json.following;
    linkElement.href = json.html_url;
  } catch (error) {
    console.error('Erro ao buscar dados do GitHub:', error);
    alert(
      'Ocorreu um erro ao carregar os dados do perfil. Tente novamente mais tarde.'
    );
  }
});
