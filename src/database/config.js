//aqui as configs de conexão com o bando de dados.Eu estou usando um db
//noSQL Mongo DB, neste caso a versão cloud, o Atlas, mas tu pode usar
//uma versão local ou remota que seja da tua preferência. 
//No caso de usar o Atlas tens que ter username e senha além do replicaset. Tudo isso é fornecido no menu de 
//conexões.
//Caso use uma base local é só colocar na uri algo do tipo:
//uri: "mongodb://localhost:35000/$teu_banco"

module.exports = {
    uri: "mongodb+srv://<usuário>:<senha><teu réplica set>/<teu banco de dados>?retryWrites=true&w=majority"
  };


  
