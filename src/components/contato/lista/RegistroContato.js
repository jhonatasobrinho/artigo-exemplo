import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import moment from 'moment';
import 'moment/locale/pt-br';

const InsertDate = ({insertDate}) => {
    moment.locale('pt-BR');
    const date = moment(insertDate).add(0, 'h').format('L LTS');

    return (
        <span> - <i>Inserido em {date}</i></span>
    );
};

const RegistroContato = ({contato, onRemoverContato}) => {
    const {id, name, phone, email, insertDate} = contato;
    return (
        <li key={id} className="list-group-item">
            {name} / { phone ? phone : email} { typeof insertDate !== 'undefined' ? <InsertDate insertDate={insertDate}/>: ''}
            <i onClick={() => onRemoverContato(id)}
               style={{float: 'right', color: 'red', cursor: 'pointer', fontSize: '22px'}}
               className="fa fa-times fa-2x"
               aria-hidden="true"/>

        </li>
    );
};

export default RegistroContato;