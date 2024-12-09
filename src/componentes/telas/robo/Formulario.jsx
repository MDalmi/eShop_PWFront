import { useContext } from 'react';
import Alerta from '../../comuns/Alerta';
import { Col } from 'react-bootstrap';
import CampoEntrada from '../../comuns/CampoEntrada';
import Dialogo from '../../comuns/Dialogo';
import RoboContext from './RoboContext';
import CampoTextArea from '../../comuns/CampoTextArea';

function Formulario() {
    const { objeto, handleChange, acaoCadastrar,
        alerta, exibirForm, setExibirForm } = useContext(RoboContext);


    return (
        <Dialogo id="modalEdicao" titulo="Robos"
            idform="formulario" acaoCadastrar={acaoCadastrar}
            exibirForm={exibirForm} setExibirForm={setExibirForm}>
            <Alerta alerta={alerta} />
            <Col xs={12} md={12}>
                console.log(objeto)
                <CampoEntrada value={objeto.codigo}
                    id="txtCodido" name="codigo" label="Código"
                    tipo="number" onchange={handleChange}
                    readonly={false}
                    maxCaracteres={5} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.nome}
                    id="txtNome" name="nome" label="Nome"
                    tipo="text" onchange={handleChange}
                    msginvalido="Informe o nome"
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.capacidade}
                    id="txtCapacidade" name="capacidade" label="Capacidade Máxima"
                    tipo="number" onchange={handleChange}
                    msginvalido="Informe a capacidade"
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>
            <Col xs={12} md={12}>
                <CampoTextArea value={objeto.descricao}
                    id="txtDescricao" name="descricao" label="Descrição"
                    tipo="text" onchange={handleChange}
                    msgvalido="" msginvalido=""
                    requerido={false} readonly={false}
                    maxCaracteres={40} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.valor_aluguel}
                    id="txtValorAluguel" name="valor_aluguel" label="Valor do Aluguel"
                    tipo="number" onchange={handleChange}
                    msginvalido="Informe o valor"
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.tipo}
                    id="txtTipo" name="tipo" label="Tipo"
                    tipo="text" onchange={handleChange}
                    msgvalido="" msginvalido=""
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>
        </Dialogo>
    )

}

export default Formulario;