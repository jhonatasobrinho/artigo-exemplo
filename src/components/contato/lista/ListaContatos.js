import React from 'react';
import RegistroContato from './RegistroContato';

const ListaContatos = ({contatos, onRemoverContato}) => {
    return (
        <div className="row">
            <ul className="list-group">
                {contatos.map((contato, i) => <RegistroContato key={i} contato={contato} onRemoverContato={onRemoverContato} />)}
            </ul>
        </div>
    );
};

export default ListaContatos;