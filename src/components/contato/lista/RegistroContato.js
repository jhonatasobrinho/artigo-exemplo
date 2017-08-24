import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const RegistroContato = ({contato: {id, name, phone, email}, onRemoverContato}) => {
    return (
        <li key={id} className="list-group-item">
            {name} / { phone ? phone : email}
            <i onClick={() => onRemoverContato(id)}
               style={{float: 'right', color: 'red', cursor: 'pointer', fontSize: '22px'}}
               className="fa fa-times fa-2x"
               aria-hidden="true"/>

        </li>
    );
};

export default RegistroContato;