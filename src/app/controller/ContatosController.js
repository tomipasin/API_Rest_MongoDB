//chamamos o model/Contatos
const Contatos = require('../model/Contatos');

//e criamos uma classe ContatosController que será composta por duas 
//funções assíncronas: uma index e outra store.
class ContatosController {
  //store recebe uma req ao ser invocada e usa o método create para adicionar
  //os dados no body.
  async store(req, res) {
    const data = await Contatos.create(req.body);
    return res.json(data);
  }
  //index recebe uma req e uma res ao ser invocada e usa o método find para 
  //adicionar buscar por tudo que há registrado em Contatos. O find nesse caso é 
  //feito sem parâmetros e por este motivo retorna tudo.
  async index(req, res) {
    const data = await Contatos.find({});
    return res.json(data);
  }
}
//e no final não podemos esquecer de exportar.
module.exports = new ContatosController();