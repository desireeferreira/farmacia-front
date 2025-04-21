function FormularioCategoria() {
    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                Cadastrar Categoria
            </h1>

            <form className="w-1/2 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        placeholder="Digite o nome da categoria"
                        name="nome"
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição</label>
                    <input
                        type="text"
                        id="descricao"
                        placeholder="Digite a descrição da nova categoria (opcional)"
                        name="descricao"
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>

                <button
                    className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit"
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default FormularioCategoria;

