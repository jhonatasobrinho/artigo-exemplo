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

        const contato = {
            id: Math.max.apply(Math, this.state.contatos.map((c) => c.id)) + 1,
            name: e.target.nome.value,
            [optValue]: e.target[optValue].value,
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
                            <a className="navbar-brand" href="#">Brand</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a>
                                </li>
                                <li><a href="#">Link</a></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                       aria-haspopup="true" aria-expanded="false">Dropdown <span
                                        className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else here</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="#">Separated link</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="#">One more separated link</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="navbar-form navbar-left">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Search"/>
                                </div>
                                <button type="submit" className="btn btn-default">Submit</button>
                            </form>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#">Link</a></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                       aria-haspopup="true" aria-expanded="false">Dropdown <span
                                        className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else here</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                </li>
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
