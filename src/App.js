import React, {Component} from 'react';
import Main from './components/main/Main';
import Header from './components/common/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import contatos from './data/contatos';

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            contatos
        };

        this.onAdicionarContato = this.onAdicionarContato.bind(this);
        this.onRemoverContato = this.onRemoverContato.bind(this);
    }

    onAdicionarContato(e) {
        const optValue = e.target.optradio.value;
        const name = e.target.nome.value;

        const contato = {
            id: Math.max.apply(Math, this.state.contatos.map((c) => c.id)) + 1,
            name,
            [optValue]: e.target[optValue].value,
            insertDate: new Date()
        };

        let contatos = this.state.contatos;
        contatos.push(contato);

        this.setState({contatos});

        this.limparCamposForm(e);

        e.preventDefault();
    }

    onRemoverContato(id) {
        this.setState({
            contatos: this.state.contatos.filter(contato => contato.id !== id)
        })
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Main contatos={this.state.contatos}
                      onAdicionarContato={this.onAdicionarContato}
                      limparCamposForm={this.limparCamposForm}
                      onRemoverContato={this.onRemoverContato}/>
            </div>
        );
    }

    limparCamposForm(e) {
        document.getElementById('form').reset()
    }
}

export default App;
