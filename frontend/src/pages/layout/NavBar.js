import React, { Component } from "react";
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom';

class Navabar extends Component {
    componentDidMount() {

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });

    }

    render() {
        return (
            <section id="top">
                <div>
                <div className="navbar-fixed">
                    <nav>
                        <div className=" nav-wrapper teal lighten-2">

                            <a href="\" className="brand-logo center"><i className="large material-icons">ac_unit</i>&nbsp;Team Work</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link to = "/">Home</Link></li>
                                <li><Link to = "/Cadastro">Login</Link></li>
                                <li><a className="yellow-text lighten-4-text" href="#">Sobre</a></li>
                            </ul>
                            <ul id="nav-desktop" className="left hide-on-large-only">
                                <li><a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a></li>
                            </ul>
                        </div>
                    </nav>

                </div>


                <ul id="slide-out" className="sidenav">
                    <li><div className="user-view">
                        <div className="background">
                            <img src="https://ik.imagekit.io/VictorParavatti/Stalin-610x350_BnPbTIG5Kf.jpg?updatedAt=1635376514724" />
                        </div>
                        <a href="#user"><img class="circle" src="https://ik.imagekit.io/VictorParavatti/png-transparent-soviet-union-russian-revolution-hammer-and-sickle-red-star-communism-martillo-angle-triangle-logo_m7IjMfBe5.png?updatedAt=1635376169589" /></a>
                        <a href="#name"><span class="white-text name">Victor</span></a>
                        <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
                    </div></li>
                    <li><a href="#!"><i class="material-icons"><img src="https://img.icons8.com/material-outlined/24/000000/github.png" /></i>conect-se com o GitHub</a></li>
                    <li><a href="#!"><i class="material-icons">person</i>Victor</a></li>
                    <li><div className="divider"></div></li>
                    <li><a href="#!"><i class="material-icons">reply</i>Logof</a></li>

                </ul>

            </div>
                
            </section>
            
        )
    }
}

export default Navabar