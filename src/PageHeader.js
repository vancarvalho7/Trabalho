import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PageHeader extends Component {
    constructor() {
        super();
        this.state = {
            model: {}
        };

        this.changeModel = this.changeModel.bind(this);
    }
    changeModel(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav nav">
                        <li className="navbar-brand">
                            React FrontEnd Project
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/produto">Produtos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cliente">Clientes</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default PageHeader;