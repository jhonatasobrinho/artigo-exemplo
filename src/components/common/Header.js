import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Artigo</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li>
                            <a href="#">Sobre</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;