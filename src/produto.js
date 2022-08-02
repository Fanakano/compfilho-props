import { LightningElement, api } from "lwc";

export default class Produto extends LightningElement {
  /*crie duas propriedades publicas
  
    nome e preco, mostrar seus valores no produto.html

    e chamar o componente dentro do App.
    3x com valores de produtos diferentes
  
    1 - importar o api
    2 - criar as props com @api
    3 - exibir as props no html {prop}
    4 - chamar o componente no pai com os atributos passados
  */
  @api nome;
  @api preco;

}
