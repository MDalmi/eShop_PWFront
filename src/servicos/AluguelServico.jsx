export const getAluguelAPI = async () => {
    const response = await 
        fetch(`${process.env.REACT_APP_ENDERECO_API}/aluguel`,
            {
                method : "GET",
                headers : {
                    "Content-Type" : "application/json"
                }
            }
        );
    const data = await response.json();
    return data;
}

export const getAluguelPorCodigoAPI = async codigo => {
    const response = await 
        fetch(`${process.env.REACT_APP_ENDERECO_API}/aluguel/${codigo}`,
            {
                method : "GET",
                headers : {
                    "Content-Type" : "application/json"
                }
            }
        );
    const data = await response.json();
    return data;
}

export const deleteAluguelPorCodigoAPI = async codigo => {
    const response = await 
        fetch(`${process.env.REACT_APP_ENDERECO_API}/aluguel/${codigo}`,
            {
                method : "DELETE",
                headers : {
                    "Content-Type" : "application/json"
                }
            }
        );
    const data = await response.json();
    return data;
}

export const cadastraAluguelAPI = async (objeto, metodo) => {
    const response = await 
        fetch(`${process.env.REACT_APP_ENDERECO_API}/aluguel/`,
            {
                method : metodo,
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(objeto)
            }
        );
    const data = await response.json();
    return data;
}