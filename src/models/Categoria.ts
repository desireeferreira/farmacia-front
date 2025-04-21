import Produto from "./produto";

export default interface Categoria {
    nome: string;
    id: number;
    descricao: string;
    produto?: Produto [] | null;
}