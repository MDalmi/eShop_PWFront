export const getRoboAPI = async () => {
    const response = await 
        fetch(`${process.env.REACT_APP_ENDERECO_API}/Robo`,
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

export const getRoboPorCodigoAPI = async codigo => {
    const response = await 
        fetch(`${process.env.REACT_APP_ENDERECO_API}/Robo/${codigo}`,
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

export const deleteRoboPorCodigoAPI = async codigo => {
    const response = await 
        fetch(`${process.env.REACT_APP_ENDERECO_API}/robo/${codigo}`,
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

export const cadastraRoboAPI = async (objeto, metodo) => {
    const response = await 
        fetch(`${process.env.REACT_APP_ENDERECO_API}/robo/`,
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