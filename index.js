const app = "I don't do much.";

const token = '0f3ef036df37b495f61f9c834ccf0c4d0144ee21'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
