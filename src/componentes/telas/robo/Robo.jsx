import { useState, useEffect } from "react";
import {
    getRoboAPI, getRoboPorCodigoAPI, deleteRoboPorCodigoAPI,
    cadastraRoboAPI
} from "../../../servicos/RoboServico";
import Tabela from "./Tabela";
import Formulario from "./Formulario";
import Carregando from "../../comuns/Carregando";
import '../Home.css'
import RoboContext from "./RoboContext";
import { Navigate } from "react-router-dom";

function Robo() {

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [exibirForm, setExibirForm] = useState(false);
    const [objeto, setObjeto] = useState({ codigo: "", nome: "" });
    const [carregando, setCarregando] = useState(false);

    const novoObjeto = () => {
        try {
            setEditar(false);
            setAlerta({ status: "", message: "" });
            setObjeto({
                codigo: 0,
                nome: "",
                capacidade: 0,
                descricao: "",
                valor_aluguel: 0,
                tipo: ""
            })
            setExibirForm(true);
        } catch (error) {
            Navigate("/login", { replace: true });
        }

    }

    const editarObjeto = async codigo => {
        try {
            setObjeto(await getRoboPorCodigoAPI(codigo));
            setEditar(true);
            setAlerta({ status: "", message: "" });
            setExibirForm(true);
        } catch (error) {
            Navigate("/login", { replace: true });
        }

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
            Navigate("/login", { replace: true });
        }
        recuperaRobo();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    const recuperaRobo = async () => {
        try {
            setCarregando(true);
            setListaObjetos(await getRoboAPI());
            setCarregando(false);
        } catch (error) {
            Navigate("/login", { replace: true });

        }


    }

    const remover = async codigo => {
        try {
            if (window.confirm('Deseja remover este objeto?')) {
                let retornoAPI = await deleteRoboPorCodigoAPI(codigo);
                setAlerta({
                    status: retornoAPI.status,
                    message: retornoAPI.message
                });
                recuperaRobo();
            }
        } catch (error) {
            Navigate("/login", { replace: true });
        }

    }

    useEffect(() => {
        recuperaRobo();
    }, []);

    return (
        <div className="robo">
            <RoboContext.Provider value={{
                alerta, listaObjetos, remover, objeto, editarObjeto,
                novoObjeto, acaoCadastrar, handleChange, exibirForm, setExibirForm
            }}>
                <div className="tabela-container">
                    <Carregando carregando={carregando}>
                        <Tabela />
                    </Carregando>
                </div>
                <Formulario />
            </RoboContext.Provider>
        </div>
    );

}

export default Robo;
