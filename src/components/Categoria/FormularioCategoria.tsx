import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categorias from "../../models/Categoria";
import { buscar, atualizar, cadastrar } from "../../services/Service";

function FormularioCategoria() {
    const navigate = useNavigate();
    const [categorias, setCategorias] = useState<Categorias>({} as Categorias);
    const { id } = useParams<{ id: string }>();

    async function listarCategorias(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategorias, {
                headers: {
                    Authorization: "" // Add your token or authorization logic here
                }
            });
        } catch (error: any) {
            alert("Erro ao buscar a categoria:");
            navigate("/categorias");
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            listarCategorias(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategorias({
            ...categorias,
            [e.target.name]: e.target.value,
        });
    }

    function retornar() {
        navigate("/categorias");
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            if (id !== undefined) {
                await atualizar(`/categorias`, categorias, setCategorias);
                alert("A categoria foi atualizada com sucesso!");
            } else {
                await cadastrar(`/categorias`, categorias, setCategorias);
                alert("A categoria foi cadastrada com sucesso!");
            }
        } catch (error: any) {
            alert("Erro ao salvar a categoria.");
            console.error(error);
        }

        retornar();
    }

    return (
        <div className="container w-full md:w-1/2 mx-auto flex flex-col items-center justify-center py-10 px-4">
            <h1 className="text-4xl text-center my-8 text-green-700">
                {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
            </h1>

            <form className="w-full flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className="text-green-700">
                        Nome da Categoria
                    </label>
                    <input
                        type="text"
                        placeholder="Digite o nome da categoria:"
                        name="nome"
                        className="border-2 border-green-700 rounded p-2 text-[#2E2E2E]"
                        value={categorias.nome || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao" className="text-green-700">
                        Descrição da Categoria
                    </label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria:"
                        name="descricao"
                        className="border-2 border-green-700 rounded p-2 text-[#2E2E2E]"
                        value={categorias.descricao || ""}
                        onChange={atualizarEstado}
                    />
                </div>

                <button
                    className="rounded text-white bg-green-700 hover:bg-green-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit"
                >
                    <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
                </button>
            </form>
        </div>
    );
}

export default FormularioCategoria;
