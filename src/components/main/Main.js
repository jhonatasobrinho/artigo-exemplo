import React, {Component} from 'react';
import ListaContatos from '../contato/lista/ListaContatos';
import FormularioContato from '../contato/formulario/FormularioContato';

class Main extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            selected: 'phone'
        };

        this.isPhoneSelected = this.isPhoneSelected.bind(this);
        this.onSelectOption = this.onSelectOption.bind(this);
    }

    isPhoneSelected() {
        return this.state.selected === 'phone';
    }

    onSelectOption(e) {
        this.setState({selected: e.target.value});
    }

    render() {
        const {contatos, onAdicionarContato, onRemoverContato} = this.props;

        return (
            <div className="container container-fluid" style={{maxWidth: '650px'}}>
                <FormularioContato onAdicionarContato={onAdicionarContato}
                                   onSelectOption={this.onSelectOption}
                                   isPhoneSelected={this.isPhoneSelected}/>
                <ListaContatos contatos={contatos} onRemoverContato={onRemoverContato}/>
            </div>
        )
    }
}

export default Main;