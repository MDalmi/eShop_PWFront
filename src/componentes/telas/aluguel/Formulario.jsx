import { useContext } from 'react'
import Alerta from '../../comuns/Alerta';
import Col from 'react-bootstrap/Col';
import CampoEntrada from '../../comuns/CampoEntrada';
import Dialogo from '../../comuns/Dialogo';
import CampoSelect from '../../comuns/CampoSelect';
import AluguelContext from './AluguelContext';
import CampoTextArea from '../../comuns/CampoTextArea';

function Formulario() {

    const { objeto, handleChange, acaoCadastrar, alerta,
        exibirForm, setExibirForm, listaRobos } = useContext(AluguelContext);

    return (
        <Dialogo id="modalEdicao" titulo="Aluguel"
            idform="formulario" acaoCadastrar={acaoCadastrar}
            exibirForm={exibirForm} setExibirForm={setExibirForm}>
            <Alerta alerta={alerta} />
            <Col xs={12} md={4}>
                <CampoEntrada value={objeto.codigo}
                    id="txtCodido" name="codigo" label="Código"
                    tipo="number" onchange={handleChange}
                    readonly={true}
                    maxCaracteres={5} />
            </Col>
            <Col xs={12} md={8}>
                <CampoEntrada value={objeto.nome}
                    id="txtNome" name="nome" label="Nome"
                    tipo="text" onchange={handleChange}
                    msginvalido="Informe o nome"
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>
            <Col xs={12} md={12}>
                <CampoSelect value={objeto.robo}
                    id="selectRobo" name="robo" label="Robô"
                    onchange={handleChange}
                    msgvalido="Robô Escolhido" msginvalido="Informe o robô"
                >
                    {listaRobos.map((robo) => (
                            <option key={robo.codigo}
                                value={robo.codigo}>{robo.nome}</option>
                        ))
                    }
                </CampoSelect>
            </Col>
            <Col xs={12} md={6}>
                <CampoEntrada value={objeto.planeta}
                    id="txtPlaneta" name="planeta" label="Planeta"
                    tipo="text" onchange={handleChange}
                    msgvalido="Planeta informado" msginvalido="Informe o planeta"
                    requerido={true} readonly={false} />
            </Col>
            <Col xs={12} md={12}>
                <CampoTextArea value={objeto.descricao}
                    id="txtDescricao" name="descricao" label="Descrição"
                    tipo="text" onchange={handleChange}
                    msgvalido="" msginvalido=""
                    requerido={false} readonly={false}
                    maxCaracteres={40} />
            </Col>
        </Dialogo>
    )
}

export default Formulario;