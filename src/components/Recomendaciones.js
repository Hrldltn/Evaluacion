import React,{useState,useEffect} from 'react'
import RecomendacionFragment from './Fragments/RecomendacionFragment'
import mascarilla from "../assets/img/mascarilla.png"
import nomascarilla from "../assets/img/mascarilla-abajo.png"
import { Link } from "react-router-dom"

const Recomendaciones =()=>{
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 m-5 mb-5">
                        <h1>Recomendaciones</h1>
                    </div>
                        <div className="col-6">
                            <RecomendacionFragment
                                tipoAlerta="alert-danger"
                                titulo="sin mascarilla"
                                >
                               <br/>
                                <img src={nomascarilla} alt="Mascarilla" width="560" height="400"/>
                            </RecomendacionFragment>
                        </div>
                        <div className="col-6">
                            <RecomendacionFragment
                                tipoAlerta="alert-success"
                                titulo="con mascarilla">
                                <br/>
                                <img src={mascarilla} alt="Mascarilla" width="500" height="400"/>
                            </RecomendacionFragment>
                        </div>
                </div>
                <Link className="text-black fs-5" to="/Modal">Ver Frases</Link>
            </div>
        </>

    )

}

export default Recomendaciones