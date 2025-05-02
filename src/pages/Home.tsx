import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { buscar } from "../services/Service";

interface Categorias {
    id: number;
    nome: string;
    descricao: string;
}

function Home() {
    const [categorias, setCategorias] = useState<Categorias[]>([]);

    useEffect(() => {
        async function carregarCategorias() {
            try {
                await buscar("/categorias", setCategorias, {
                    headers: {
                        Authorization: ""
                    }
                });
            } catch (error) {
                console.error("Erro ao carregar categorias", error);
            }
        }

        carregarCategorias();
    }, []);

    return (
        <>
            <div className="bg-green-500 flex justify-center">
                <div className="container grid grid-cols-1 md:grid-cols-2 text-white py-10">
                    <div className="flex flex-col items-center justify-center gap-4 px-4">
                        <h2 className="text-5xl font-bold">FarmaBem!</h2>
                        <p className="text-xl">
                            Se até seu deploy precisa de saúde, imagina você.
                        </p>
                    </div>

                    <div className="flex justify-center items-center">
                        <img
                            src="src/assets/acne.png"
                            alt="Imagem acne"
                            className="w-1/2 h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Cards de Categorias Clicáveis */}
            <div className="container mx-auto py-10 px-4">
                <h3 className="text-2xl font-bold mb-6 text-center text-[#006D77]">
                    Conheça nossas categorias
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {categorias.map((cat) => (
                        <Link to={`/categorias/${cat.id}`} key={cat.id}>
                            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 text-black hover:scale-105">
                                <h4 className="text-xl font-bold mb-2">{cat.nome}</h4>
                                <p>{cat.descricao}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
