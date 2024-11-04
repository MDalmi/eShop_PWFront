import { useContext, useState } from 'react';
import CategoriaContext from './CategoriaContext';
import Alerta from '../../comuns/Alerta';
import { Col } from 'react-bootstrap';
import CampoEntrada from '../../comuns/CampoEntrada';
import Dialogo from '../../comuns/Dialogo';

function Formulario() {
    const { objeto, handleChange, acaoCadastrar,
        alerta, exibirForm, setExibirForm } = useContext(CategoriaContext);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        if (form.checkValidity() === true) {
            acaoCadastrar(event);
        }
    };

    return (
        <Dialogo id="modalEdicao" titulo="Categoria"
            idform="formulario" acaoCadastrar={acaoCadastrar}
            exibirForm={exibirForm} setExibirForm={setExibirForm}>
            <Alerta alerta={alerta} />
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.codigo}
                    id="txtCodido" name="codigo" label="Código"
                    tipo="number" onchange={handleChange}
                    readonly={true}
                    maxCaracteres={5} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.nome}
                    id="txtNome" name="nome" label="Nome"
                    tipo="text" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe o nome"
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>
        </Dialogo>
    )

}

export default Formulario;