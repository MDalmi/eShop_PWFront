import { useState, useEffect } from "react";
import AluguelContext from "./AluguelContext";
import { getRoboAPI } from "../../../servicos/RoboServico";
import {
    getAluguelAPI, getAluguelPorCodigoAPI, cadastraAluguelAPI,
    deleteAluguelPorCodigoAPI
} from "../../../servicos/AluguelServico";
import Tabela from "./Tabela";
import '../Home.css'
import Formulario from "./Formulario";
import Carregando from "../../comuns/Carregando";
import { Navigate } from "react-router-dom";

function Aluguel() {

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [listaRobos, setListaRobos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [exibirForm, setExibirForm] = useState(false);
    const [objeto, setObjeto] = useState({
        codigo: 0,
        nome: "",
        robo: "",
        planeta: "",
        descricao: ""
    });
    const [carregando, setCarregando] = useState(false);

    const novoObjeto = () => {
        try {
            setEditar(false);
            setAlerta({ status: "", message: "" });
            setObjeto({
                codigo: 0,
                nome: "",
                robo: "",
                planeta: "",
                descricao: ""
            })
            setExibirForm(true);
        } catch (error) {
            Navigate("/login", { replace: true });
        }

    }

    const editarObjeto = async codigo => {
        try {
            setObjeto(await getAluguelPorCodigoAPI(codigo));
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
            let retornoAPI = await cadastraAluguelAPI(objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) {
                setEditar(true);
            }
        } catch (err) {
            console.log("Erro: " + err);
            Navigate("/login", { replace: true });

        }
        recuperaAluguel();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    const recuperaRobo = async () => {
        try {
            setListaRobos(await getRoboAPI());
        } catch (error) {
            Navigate("/login", { replace: true });
        }

    }

    const recuperaAluguel = async () => {
        try {
            setCarregando(true);
            setListaObjetos(await getAluguelAPI());
            setCarregando(false);
        } catch (error) {
            Navigate("/login", { replace: true });
        }

    }

    const remover = async codigo => {
        try {
            if (window.confirm('Deseja remover este objeto?')) {
                let retornoAPI = await deleteAluguelPorCodigoAPI(codigo);
                setAlerta({
                    status: retornoAPI.status,
                    message: retornoAPI.message
                });
                recuperaAluguel();
            }
        } catch (error) {
            Navigate("/login", { replace: true });
        }

    }

    useEffect(() => {
        recuperaRobo();
        recuperaAluguel();
    }, []);

    return (
        <div className="robo">
            <AluguelContext.Provider value={{
                alerta, listaObjetos, remover, objeto, editarObjeto,
                novoObjeto, acaoCadastrar, handleChange, exibirForm, setExibirForm, listaRobos
            }}>
                <div className="tabela">
                    <Carregando carregando={carregando}>
                        <Tabela />
                    </Carregando>
                </div>
                <Formulario />
            </AluguelContext.Provider>
        </div>
    );
}

export default Aluguel;