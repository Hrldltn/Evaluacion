import React, {useState,useEffect} from 'react'

const ModalFragment=({autor,frase})=>{

    return(
        <>
            <div className="modal-body">
                <h4>Autor: {autor}</h4>
                <p>Frase: {frase}</p>
            </div>
        </>
    )

}

export default ModalFragment