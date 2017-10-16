import React, {Component} from 'react';
import Main from './components/main/Main';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import contatos from './data/contatos';

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            contatos,
            form: {}
        };

        this.onAdicionarContato = this.onAdicionarContato.bind(this);
        this.onRemoverContato = this.onRemoverContato.bind(this);
        this.onEditHandle = this.onEditHandle.bind(this);
        this.editContact = this.editContact.bind(this);
        this.setName  = this.setName.bind(this);
        this.setEmail  = this.setEmail.bind(this);
    }

    setName(e) {

        const { value } = e.target;

        this.setState({ ...this.state.form, form:{ name: value } });
    }

    setEmail(e) {
        
        const { value } = e.target;

        this.setState({ ...this.state.form,  form:{ email: value }  });
    }
        

    onAdicionarContato(e) {
        const optValue = e.target.optradio.value;

        const name = e.target.nome.value;

        const { id, email } = this.state
        
        let contatos = this.state.contatos;
        
        // TODO - REFACTORY!
        if (id > 0) {
            
            contatos.map((contato, index) => {
                if (contato.id === id) {
                    contatos[index] = {
                        name: name,
                        email: email
                    }      
                          
                }
            })
       
        } else {

            const contato = {
                id: Math.max.apply(Math, this.state.contatos.map((c) => c.id)) + 1,
                name: name,
                [optValue]: e.target[optValue].value
            };
            contatos.push(contato);
    
        }
        
        this.setState({contatos});

        this.limparCamposForm(e);

        e.preventDefault();
    }

    onRemoverContato(id) {
        this.setState({
            contatos: this.state.contatos.filter(contato => contato.id !== id)
        })
    }

    editContact(contact, filteredId) {
        const { id, name, email } = contact 

        if (id === filteredId ) {
            this.setState({
                form: {
                    name: name,
                    email: email,
                    id: id
                }
            })
        }

    }

    onEditHandle(id) {
        const contact = this.state.contatos.find(contato => this.editContact(contato, id));
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
                <Main state={this.state}
                      setName={this.setName}
                      setEmail={this.setEmail}
                      onAdicionarContato={this.onAdicionarContato}
                      onRemoverContato={this.onRemoverContato} 
                      onEditHandle={this.onEditHandle}
                      onChangeNameHandle={this.onChangeNameHandle}
                      
                />
            </div>
        );
    }

    limparCamposForm(e) {
        e.target[e.target.optradio.value].focus();
        e.target[e.target.optradio.value].value = '';
        e.target.nome.value = '';
        this.setState({ form: {}, id: '' })
    }
}

export default App;
