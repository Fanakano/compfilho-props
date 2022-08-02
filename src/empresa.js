//passo 1 - importar a api
import { LightningElement, api } from "lwc";

export default class Empresa extends LightningElement {
  //propriedades publicas para receber dados do pai?

  //passo 2 - criar os atributos publicos @api
  @api nome;
  @api cnpj;
}
