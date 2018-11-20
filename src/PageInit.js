import React, { Component } from "react";
import { Route } from "react-router-dom";
import ListProduto from "./Components/Produto/ListProduto";
import ClienteList from "./Components/Cliente/ClienteList";
import FormProduto from "./Components/Produto/FormProduto";
import ClienteForm from "./Components/Cliente/ClienteForm";

export default class PageInit extends Component {
    render() {
        return (
            <div className="container body-container">
                <Route exact path="/" component={Index} />
                <Route exact path="/produto" component={ListProduto} />
                <Route exact path="/cliente" component={ClienteList} />

                <Route exact path="/produto/criar" component={FormProduto} />
                <Route exact path="/cliente/criar" component={ClienteForm} />

                <Route exact path="/cliente/editar/:id" render={({ match }) => <ClienteForm id={match.params.id} />} />
                <Route exact path="/produto/editar/:id" render={({ match }) => <FormProduto id={match.params.id} />} />
            </div>
        )
    }
}

class Index extends Component {
    render() {
        return (<div>
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Está é uma aplicação utilizando a biblioteca React.js</h2>
                </div>
            </div>
        </div>);
    }
}