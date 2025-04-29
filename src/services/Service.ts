import axios from "axios";

const api = axios.create({
    baseURL: 'https://crud-farmacia-t80.onrender.com/'
});

// A função agora recebe corretamente o parâmetro de headers com o Authorization
export const buscar = async (url: string, setDados: Function, p0: { headers: { Authorization: any; }; }) => {
    try {
        const resposta = await api.get(url, p0); // Passando os headers na requisição
        setDados(resposta.data);
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error; 
    }
}

export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
    try {
        const resposta = await api.post(url, dados);
        setDados(resposta.data);
    } catch (error) {
        console.error("Erro ao cadastrar dados:", error);
        throw error;
    }
}

export const atualizar = async (url: string, dados: Object, setDados: Function) => {
    try {
        const resposta = await api.put(url, dados);
        setDados(resposta.data);
    } catch (error) {
        console.error("Erro ao atualizar dados:", error);
        throw error;
    }
}

export const deletar = async (url: string) => {
    try {
        await api.delete(url);
    } catch (error) {
        console.error("Erro ao deletar dados:", error);
        throw error;
    }
}
