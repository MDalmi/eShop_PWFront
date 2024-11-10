import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import AluguelContext from "./AluguelContext";

function Tabela() {

    const { alerta, listaObjetos, remover, 
        novoObjeto, editarObjeto  } = useContext(AluguelContext);

    return (
        <div style={{ padding: '20px' }} >
            <h1>Produtos</h1>
            <Alerta alerta={alerta} />
            <Button variant="primary" onClick={()=>  novoObjeto()}>
                Novo <i className="bi bi-file-earmark-plus"></i>
            </Button>
            {listaObjetos.length === 0 &&
                <h1>Nenhum registro encontrado</h1>}
            {listaObjetos.length > 0 && (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>Ações</th>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Robo</th>
                            <th>Planeta</th>
                            <th>Descrição</th>                          
                        </tr>
                    </thead>
                    <tbody>
                        {listaObjetos.map((objeto) => (
                            <tr key={objeto.codigo}>
                                <td align="center">
                                    <Button variant="info" 
                                    onClick={ () => editarObjeto(objeto.codigo)}>
                                        <i className="bi bi-pencil-square"></i>
                                    </Button>
                                    <Button variant="danger"
                                        onClick={() => remover(objeto.codigo)}>
                                        <i className="bi bi-trash"></i>
                                    </Button>
                                </td>
                                <td>{objeto.codigo}</td>
                                <td>{objeto.nome}</td>
                                <td>{objeto.robo_nome}</td>
                                <td>{objeto.planeta}</td>
                                <td>{objeto.descricao}</td>
                                {/*<td>{formatoMoeda(objeto.valor)}</td>*/}
                              
                            </tr>
                        ))}

                    </tbody>
                </Table>
            )}
        </div>
    )

}

export default Tabela;