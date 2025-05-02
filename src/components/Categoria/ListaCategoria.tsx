import { useEffect, useState } from "react";
import Categoria from "../../models/Categoria";
import { buscar } from "../../services/Service";
import CardCategoria from "./CardCategoria";

function ListaCategoria() {
    
    const [categoria, setCategoria] = useState<Categoria[]>([])

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategoria, {
                headers: {
                    Authorization: undefined
                }
            });
        } catch (error: any) {
            alert("Erro ao buscar categorias"); 
        }
    }
    
    useEffect(() => {
        buscarCategorias()
    }, [categoria.length])

    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {categoria.map((categoria) => (
                            <CardCategoria key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaCategoria;

