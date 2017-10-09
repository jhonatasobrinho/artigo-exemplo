import React, {Component} from 'react';
import Main from './components/main/Main';
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
            name: name.substr(0, name.length - 1),
            [optValue]: e.target[optValue].value
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
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Artigo</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li><a href="#">Sobre</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Main contatos={this.state.contatos}
                      onAdicionarContato={this.onAdicionarContato}
                      onRemoverContato={this.onRemoverContato}/>
            </div>
        );
    }

    limparCamposForm(e) {
        e.target[e.target.optradio.value].focus();
        e.target[e.target.optradio.value].value = '';
        e.target.nome.value = '';
    }
}

export default App;
