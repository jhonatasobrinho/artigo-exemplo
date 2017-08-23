import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Main extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            selected: 'phone'
        };

        this.selectOption = this.selectOption.bind(this);
    }

    isPhoneSelected() {
        return this.state.selected === 'phone';
    }

    selectOption(e) {
        this.setState({selected: e.target.value});
    }

    render() {
        const {contatos, onAdicionarContato, onRemoverContato} = this.props;

        return (
            <div className="container container-fluid" style={{maxWidth: '650px'}}>
                <form onSubmit={onAdicionarContato}>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <label className="radio-inline">
                                    <input type="radio"
                                           name="optradio"
                                           value="phone"
                                           checked={this.isPhoneSelected()}
                                           onChange={this.selectOption}
                                    />{'Phone'}
                                </label>
                                <label className="radio-inline">
                                    <input type="radio"
                                           name="optradio"
                                           value="email"
                                           checked={!this.isPhoneSelected()}
                                           onChange={this.selectOption}
                                    />{'Email'}
                                </label>
                            </div>

                            <div className="col-md-8 col-sm-8">
                                <input className="form-control"
                                       name={this.isPhoneSelected() ? 'phone' : 'email'}
                                       placeholder={this.isPhoneSelected() ? 'Phone' : 'Email'}
                                       type={this.isPhoneSelected() ? 'text' : 'email'}
                                       autofocus
                                       required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-9 col-sm-10">
                                <input className="form-control"
                                       name="nome"
                                       placeholder="Contact name"
                                       type="text"/>
                            </div>
                            <div className="col-md-3 col-sm-2">
                                <input className="form-control"
                                       value="Submit"
                                       type="submit"/>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="row">
                    <ul className="list-group">
                        {contatos.map((contato) => {
                            const {id, name, phone, email} = contato;
                            return (
                                <li key={id} className="list-group-item">
                                    {name} / { phone ? phone : email}
                                    <i onClick={() => onRemoverContato(id)}
                                       style={{float: 'right', color: 'red', cursor: 'pointer', fontSize: '22px'}}
                                       className="fa fa-times fa-2x"
                                       aria-hidden="true"/>

                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
    )
    }
    }

    export default Main;