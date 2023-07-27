import { useState } from 'react';

import Modal from './modal';
import Fundo from './fundo';

function Tasks(props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function deletar(){
        setModalIsOpen(true);
    }

    function fecharModal() {
        setModalIsOpen(false);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
            <button className="btn" onClick={deletar}>Deletar</button>
            </div>
            { modalIsOpen && <Modal onCancelar={fecharModal} onConfirmar={fecharModal} />}
            { modalIsOpen && <Fundo onFechar={fecharModal} />}        
        </div>
    )
}

export default Tasks;