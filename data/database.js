const {Client} = require('pg');

// le connecter avec les infos du .env , déclarer la target ici ! Database:jeuxvideo
const client = new Client({
    database: 'mailsender'
  })

// executer la connexion
client.connect(()=>{ 
  //console.log(client) pour vérifier a quelle db je suis branché si besoin

});

// exporter pour qu'il soit dispo partout
module.exports = client;