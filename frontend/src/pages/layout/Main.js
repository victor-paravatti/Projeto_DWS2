import React, { Component } from "react";
import M from 'materialize-css/dist/js/materialize.min.js'
import '../css/Principal.css'

class Main extends Component {
    render() {
        return (
            <><div className="row ">

                <div className="esp"></div>
                <div className="col m12 l12 s1 teal lighten-4">
                    <div className="col s1 m5 l5">
                        <div align="left">
                            <h4>O que o Team Works pode te ajudar ?
                                <p className="flow-text"> O team works é uma plataforma que te auxilia na criação de
                                    grupos de estudo e de desenvolvimento.
                                    Recupere a clareza e a tranquilidade, tirando todas essas tarefas da sua cabeça e
                                    colocando na sua lista de amigos do GitHub para trabalhar junto (não importa onde você esteja ou qual dispositivo use).

                                </p>
                                <p className="flow-text">Nos 14 anos e 290 dias que levamos criando o Team Works, nunca consideramos
                                    a possibilidade de vendê-lo ou de sermos comprados.Nossa equipe está comprometida a permanecer
                                    independente e conquistar sua confiança pelo tempo em que você precisar de nossos aplicativos.
                                </p>
                            </h4>
                            <a href="/"><i className="material-icons blue-text">east</i> Conhesa nosta história</a>
                        </div>
                    </div>
                    <div className="col s1 m7 l7">
                        <h4>Relatos dos nossos usuarios</h4>
                        <div class="col s1 m8 offset-m2 l6 offset-l3">
                            <div class="card-panel grey lighten-5 z-depth-2">
                                <div class="row valign-wrapper">
                                    <div class="col s7">
                                        <img src="https://ik.imagekit.io/VictorParavatti/Aula_desenvolvimento_de_redes/jaroslav-devia-ILY7a3Zsxxs-unsplash_GF-BJdwx-li.jpg?updatedAt=1636980259327"
                                            alt="" class="circle responsive-img" />
                                    </div>
                                    <div class="col s1 m12 l12">
                                        <h5 classNam="text-bold"><span class="badge"><i className="material-icons blue-text ">verified</i></span>Ana clara</h5>
                                        <span class="grey-text">
                                            "Esta ferramenta mudou a minha vida"
                                        </span>
                                    </div>
                                </div>
                                <span class="grey-text">
                                    Engenheira de Produto Sênior IBM
                                </span>
                            </div>
                        </div>

                        <div class="col s1 m8 offset-m2 l6 offset-l3">
                            <div class="card-panel grey lighten-5 z-depth-2 ">
                                <div class="row valign-wrapper">
                                    <div class="col s7">
                                        <img src="https://ik.imagekit.io/VictorParavatti/Aula_desenvolvimento_de_redes/nico-marks-763-mBawsfg-unsplash_zwf--R-Jg-K.jpg?updatedAt=1636981270061"
                                            alt="" class="circle responsive-img" />
                                    </div>
                                    <div class="col s1 m12 l12">
                                        <h5 classNam="text-bold"><span class="badge"><i className="material-icons blue-text ">verified</i></span>Jonas Sales</h5>
                                        <span class="grey-text">
                                            "Que trabalho fenomenal sinto que foi desenvolvida para min"
                                        </span>
                                    </div>
                                </div>
                                <span class="grey-text">
                                    Diretor de Marketing Sênior ADIDAS
                                </span>
                            </div>
                        </div>


                        <div class="col s1 m8 offset-m2 l6 offset-l3">
                            <div class="card-panel grey lighten-5 z-depth-2">
                                <div class="row valign-wrapper">
                                    <div class="col s7">
                                        <img src="https://ik.imagekit.io/VictorParavatti/Aula_desenvolvimento_de_redes/art-hauntington-jzY0KRJopEI-unsplash_WFrwxvKXlQ.jpg?updatedAt=1636981421088"
                                            alt="" class="circle responsive-img" />
                                    </div>
                                    <div class="col s12">
                                        <h5 classNam="text-bold"><span class="badge"><i className="material-icons blue-text ">verified</i></span>Maria Jonson</h5>
                                        <span class="grey-text">
                                            "Tive uma exelente experiaencia com esta ferramenta era tudo que estava faltando para minha empresa"
                                        </span>
                                    </div>
                                </div>
                                <span class="grey-text">
                                    Coordenadora de Programação NETFLIX
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
                <div className="esp"></div>
                <div className="row fund ">

                    <div className="col s1 m12 l12">
                        <div className="col s1 l5 m6">
                            <div className="fram">
                                <iframe className="vide" id="ytplayer" type="text/html" width="100%" height="40%"
                                    src="https://www.youtube.com/embed/kzeKlbq4enI?autoplay=1&controls=1&loop=0&fs=0"
                                    frameborder="0" allowfullscreen />
                            </div>

                        </div>
                        <div className="col s1 l7 m6">
                            <h4>Os principios do trabalho em grupo </h4>
                            <p className="flow-text"> No team works sequimos a risca os principios da :
                            </p>
                            <div align="left">
                                <h5>
                                    <p>
                                        COMUNICAÇÃO: Sem comunicação você não tem equipe e sim apenas grupo de pessoas reunido.
                                        Maxwell cita que na comunicação há uma regra importante, os problemas devem ser resolvidos
                                        em até 24h, por isso é tão essencial que a comunicação entre a equipe esteja em sintonia.<br /><br />

                                        DISCIPLINA: O colaborador deve ser disciplinado, para fazer as coisas certas, nos momentos certos e pelas razões certas.<br /><br />
                                        COMPETÊNCIA: O funcionário não deve se contentar com um trabalho mediano, ele deve concentrar
                                        esforços em algo que ele sabe que pode fazer bem feito, e dessa forma deve dar o melhor de si.<br /><br />
                                        CONFIANÇA: Para Maxwell, membros de equipes confiáveis possuem o desejo de fazer as coisas que são
                                    </p>
                                </h5>

                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default Main