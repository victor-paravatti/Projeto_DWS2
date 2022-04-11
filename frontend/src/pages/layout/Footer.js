import React, { Component } from "react";
import M from 'materialize-css/dist/js/materialize.min.js'
import '../css/Principal.css'
import { Link } from "react-scroll";

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer teal lighten-2">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="Textt white-text">Junte-se a milhões de pessoas que organizam trabalho e vida pessoal com Team Works.</h5>
                                <p className="grey-text text-lighten-4">O team works é uma plataforma gratuita para criar grupos de estudo e trabalho </p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="white-text">Links Dos desenvolvedores</h5>
                                <ul>
                                    <li><a className="grey-text text-lighten-3" href="#!"><img src="https://img.icons8.com/material-outlined/30/000000/instagram-new--v2.png" />Guilherme Paravatti</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!"><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" />Victor-Paravatti</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!"><img src="https://img.icons8.com/material-outlined/30/000000/instagram-new--v2.png" />Demetrios Pantaleão</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!"><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" />Demetrios Pantaleão</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!"><img src="https://img.icons8.com/material-outlined/30/000000/instagram-new--v2.png" />Thyago Arthur Higgins Domingues</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!"><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" />Thyago Arthur Higgins Domingues</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!"><img src="https://img.icons8.com/material-outlined/30/000000/instagram-new--v2.png" />Gabriel Da Silva Camargo</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!"><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" />Gabriel Da Silva Camargo</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2021 Copyright Text
                            
                        </div>
                    </div>
                    <div id="btnScroll" className="fixed-action-btn">
                        <Link className="btn-floating btn-large" to="top" smooth={true} duration={1000}>
                            <i className="large material-icons">arrow_upward</i>
                        </Link>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer