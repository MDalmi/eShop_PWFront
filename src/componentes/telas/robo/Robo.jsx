import { useState, useEffect } from "react";
import {
    getRoboAPI, getRoboPorCodigoAPI, deleteRoboPorCodigoAPI,
    cadastraRoboAPI
} from "../../../servicos/RoboServico";
import Tabela from "./Tabela";
import Formulario from "./Formulario";
import Carregando from "../../comuns/Carregando";
import './robos.css'
import RoboContext from "./RoboContext";

function Robo() {

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [exibirForm, setExibirForm] = useState(false);
    const [objeto, setObjeto] = useState({ codigo: "", nome: "" });
    const [carregando, setCarregando] = useState(false);

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({
            codigo: 0,
            nome: ""
        })
        setExibirForm(true);
    }

    const editarObjeto = async codigo => {
        setObjeto(await getRoboPorCodigoAPI(codigo));
        setEditar(true);
        setAlerta({ status: "", message: "" });
        setExibirForm(true);
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraRoboAPI(objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) {
                setEditar(true);
            }
        } catch (err) {
            console.log("Erro: " + err);
        }
        recuperaRobo();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    const recuperaRobo = async () => {
        setCarregando(true);

        setListaObjetos(await getRoboAPI());
        /*        
        // Para testar o componente carregando sendo exibido
         setTimeout(()=> {
                    console.log('atraso de 3 segundos');
                    setCarregando(false);
                }, 3000); */
        setCarregando(false);

    }

    const remover = async codigo => {
        if (window.confirm('Deseja remover este objeto?')) {
            let retornoAPI = await deleteRoboPorCodigoAPI(codigo);
            setAlerta({
                status: retornoAPI.status,
                message: retornoAPI.message
            });
            recuperaRobo();
        }
    }

    useEffect(() => {
        recuperaRobo();
    }, []);

    return (
        <RoboContext.Provider value={{
            alerta, listaObjetos, remover, objeto, editarObjeto,
            novoObjeto, acaoCadastrar, handleChange, exibirForm, setExibirForm
        }}>
            <Carregando carregando={carregando}>
                <div className="tabela">
                    <Tabela />
                </div>
            </Carregando>
            <Formulario />
        </RoboContext.Provider>
    )
}

export default Robo;
