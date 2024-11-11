import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import RoboContext from "./RoboContext";
import { formatoMoeda } from "../../comuns/Uteis"

function Tabela() {

    const { alerta, listaObjetos, remover,
        novoObjeto, editarObjeto } = useContext(RoboContext);

    return (
        <div style={{ padding: '20px' }} className="tabela">
            <h1 style={{color : 'white', textAlign : "center"}}>Painel de Controle: Robôs</h1>
            <Alerta alerta={alerta} />
            <Button variant="primary" onClick={() => novoObjeto()}>
                Adicionar Novo Robô
            </Button><br /><br />
            {
        listaObjetos.length === 0 &&
        <h1>Nenhum registro encontrado</h1>
    }

    {
        listaObjetos.length > 0 && (
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center' }}>Ações</th>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Capacidade</th>
                        <th>Descrição</th>
                        <th>Valor Aluguel</th>
                        <th>Tipo do Robô</th>
                    </tr>
                </thead>
                <tbody>
                    {listaObjetos.map((objeto) => (
                        <tr key={objeto.codigo}>
                            <td align="center">
                                <Button variant="info"
                                    onClick={() => editarObjeto(objeto.codigo)}>
                                    <i className="bi bi-pencil-square"></i>
                                </Button>
                                <Button variant="danger"
                                    onClick={() => remover(objeto.codigo)}>
                                    <i className="bi bi-trash"></i>
                                </Button>
                            </td>
                            <td>{objeto.codigo}</td>
                            <td>{objeto.nome}</td>
                            <td>{objeto.capacidade}KG</td>
                            <td>{objeto.descricao}</td>
                            <td>{formatoMoeda(objeto.valor_aluguel)}</td>
                            <td>{objeto.tipo}</td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        )
    }
        </div >
    )

}

export default Tabela;