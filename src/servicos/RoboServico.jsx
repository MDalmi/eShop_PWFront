import { getToken } from "../seguranca/Autenticacao";

export const getRoboAPI = async () => {
    const response = await 
        fetch(`${process.env.REACT_APP_ENDERECO_API}/privado/robo`,
            {
                method : "GET",
                headers : {
                    "Content-Type" : "application/json",
                    "authorization": getToken()
                }
            }
        );
    const data = await response.json();
    return data;
}

export const getRoboPorCodigoAPI = async codigo => {
    const response = await 
        fetch(`${process.env.REACT_APP_ENDERECO_API}/privado/robo/${codigo}`,
            {
                method : "GET",
                headers : {
                    "Content-Type" : "application/json",
                    "authorization": getToken()
                }
            }
        );
    const data = await response.json();
    return data;
}

export const deleteRoboPorCodigoAPI = async codigo => {
    const response = await 
        fetch(`${process.env.REACT_APP_ENDERECO_API}/privado/Robo/${codigo}`,
            {
                method : "DELETE",
                headers : {
                    "Content-Type" : "application/json",
                    "authorization": getToken()
                }
            }
        );
    const data = await response.json();
    return data;
}

export const cadastraRoboAPI = async (objeto, metodo) => {
    const response = await 
        fetch(`${process.env.REACT_APP_ENDERECO_API}/privado/Robo/`,
            {
                method : metodo,
                headers : {
                    "Content-Type" : "application/json",
                    "authorization": getToken()
                },
                body : JSON.stringify(objeto)
            }
        );
    const data = await response.json();
    return data;
}