import Crud from "../Components/Bases/Connector";

export default class Produto extends Crud{
    constructor(){
        super("produto");
        this.id = 0;
        this.categoria = "";
        this.preco = 0;
        this.nome = "";
    }
}