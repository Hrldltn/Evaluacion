import React,{useState,useEffect} from 'react'

const PokemonFragment =({imagen,titulo,textoDescripcion,año}) =>{
    return(
        <>
           <div className="card" style={{width: "18rem", height: "38rem"}}>
                <img src={imagen} className="card-img mt-4" alt="Pokemon" height="290rem" />
                <div className="card-body">
                    <h5 className="card-title"><span className="text-dark">Nombre: </span>{titulo}</h5>
                    <p className="card-text"><span className="fw-bold">Descipción: </span>{textoDescripcion}</p>
                    <p className="card-text"><span className="fw-bold">Año: </span>{año}</p>
                </div>
            </div>     
        </>

    )

}

export default PokemonFragment