import React from 'react';

const FormularioContato = ({onAdicionarContato, onSelectOption, isPhoneSelected, clearFields}) => {
    return (
        <form onSubmit={onAdicionarContato}>
            <div className="form-group">
                <div className="row">
                    <div className="col-md-4 col-sm-4">
                        <label className="radio-inline">
                            <input type="radio"
                                   name="optradio"
                                   value="phone"
                                   checked={isPhoneSelected()}
                                   onChange={onSelectOption}
                            />{'Phone'}
                        </label>
                        <label className="radio-inline">
                            <input type="radio"
                                   name="optradio"
                                   value="email"
                                   checked={!isPhoneSelected()}
                                   onChange={onSelectOption}
                            />{'Email'}
                        </label>
                    </div>

                    <div className="col-md-8 col-sm-8">
                        <input className="form-control"
                               name={isPhoneSelected() ? 'phone' : 'email'}
                               placeholder={isPhoneSelected() ? 'Phone' : 'Email'}
                               type={isPhoneSelected() ? 'text' : 'email'}
                               autoFocus
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
                     <div className="col-md-3 col-sm-2">
                        <input className="form-control"
                               value="Clear" type="button" onClick={clearFields}/>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default FormularioContato;