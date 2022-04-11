import React, { Component } from "react";
import M from 'materialize-css/dist/js/materialize.min.js'

class Header extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems, {});
          });
    }



    render() {
        return (
            <div>
                <div className="slider">
                    <ul className="slides">
                        <li>
                            <img className="responsive-img" className="" src="https://ik.imagekit.io/VictorParavatti/Aula_desenvolvimento_de_redes/cherrydeck-rMILC1PIwM0-unsplash_UHPps12C5.jpg?updatedAt=1636833008147"/> 
                            <div className ="caption left-align">
                            <h3 className ="black-text">É hora de brilhar!</h3>
                            <h5 className ="black-text">O trabalho em equipe engrandece as pessoas</h5>
                            </div>
                        </li>
                        <li>
                            <img className="responsive-img" src="https://ik.imagekit.io/VictorParavatti/Aula_desenvolvimento_de_redes/chang-duong-Sj0iMtq_Z4w-unsplash__q8rle-nurT.jpg?updatedAt=1636833009562"/> 
                            <div className ="caption left-align">
                            <h3 className ="black-text">Temos integração com GitHub para vc ficar desperocupado</h3>
                            <h5 className ="black-text">Indo sempre na vanguarda da tecnologia</h5>
                            </div>
                        </li>
                        <li>
                            <img className="responsive-img" src="https://ik.imagekit.io/VictorParavatti/Aula_desenvolvimento_de_redes/kristin-wilson-z3htkdHUh5w-unsplash_bcpAdFeMQ.jpg?updatedAt=1636833009666"/> 
                            <div className ="caption right-align">
                            <h3 className ="black-text">Nunca para de sonhar com uma equipe unida </h3>
                            <h5 className ="black-text">Pense grande 
                            </h5>
                            </div>
                        </li>
                        <li>
                            <img className="responsive-img" src="https://ik.imagekit.io/VictorParavatti/Aula_desenvolvimento_de_redes/clay-banks-LjqARJaJotc-unsplash_6u7rbh9Kr.jpg?updatedAt=1636833010915"/> 
                            <div className ="caption center-align">
                            <h3 className ="black-text">Siga o seu caminho </h3>
                            <h5 className ="black-text"></h5>
                            </div>
                        </li>
                        <li>
                            <img className="responsive-img" src="https://ik.imagekit.io/VictorParavatti/Aula_desenvolvimento_de_redes/surface-AKOlQ6dE8Nc-unsplash_3__ktTDydVxz.jpg?updatedAt=1636836767726"/> 
                            <div className ="caption center-align">
                            <h3 className ="black-text">Tenha a melhor equipe </h3>
                            <h5 className ="black-text"></h5>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Header
