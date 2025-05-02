import { Link } from 'react-router-dom';
import Categoria from '../../models/Categoria';

interface CardCategoriaProps {
    categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between bg-white w-full max-w-xs mx-auto h-[300px]"> {/* Altura ajustada para 300px */}
            <header className="py-2 px-6 bg-green-500 text-white font-bold text-2xl">
                {categoria.nome} {/* Exibe o nome da categoria */}
            </header>
            <p className="flex-grow p-4 text-xl bg-slate-200 overflow-hidden">{categoria.descricao}</p> {/* Flex-grow para preencher espaço */}
            
            <div className="flex">
                <Link
                    to={`/editarCategoria/${categoria.id}`} 
                    className="w-full text-slate-100 bg-green-400 hover:bg-green-600 
                        flex items-center justify-center py-2"
                >
                    Editar
                </Link>

                <Link
                    to={`/deletarCategoria/${categoria.id}`} 
                    className="text-slate-100 bg-green-300 hover:bg-green-500 w-full 
                        flex items-center justify-center py-2"
                >
                    Deletar
                </Link>
            </div>
        </div>
    );
}

export default CardCategoria;
