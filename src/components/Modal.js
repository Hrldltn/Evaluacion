import React,{useState,useEffect,Link} from 'react'
import ModalFragment from './Fragments/ModalFragment'
import '../assets/Modal.css'

const Modal = () =>{
    const[show,setShow] = useState(false);
    const closed=()=>setShow(false);
    return(
        <>
            <div>
                <button className="btn m-5 fs-4 text-white" style={{backgroundColor:"#2360A9"}} onClick={()=> setShow(true)}>Abrir Frases</button>
            </div>
            <div style={{backgroundColor:"#fff" , height:"100vh"}}>
                <div className="modal-wrapper" style={{opacity:show ? '1':'0'}}>
                    <div className="modal-header">
                        <p>Bienvenido a las Frases del dia</p>
                        <span className="close-modal-btn btn" onClick={closed}>X</span>
                    </div>
                    <div className="modal-content">
                        <div className="modal-body">
                            <ModalFragment
                                autor="Sócrates."
                                frase="Emplea tu tiempo cultivándote  a través de los escritos de otros,
                                     así ganaras fácilmente lo que para nosotros ha sido una dura tarea."
                            >   
                            </ModalFragment>
                        </div>
                        <div className="modal-body">
                            <ModalFragment
                                autor="John Lasseter."
                                frase="El arte desafía A la tecnología y la tecnología inspira al arte."
                            >
                            </ModalFragment>
                        </div>
                        <div className="modal-body">
                            <ModalFragment
                                autor="Larry Page, CEO de Google."
                                frase="Muchas empresas no triunfan a pesar del tiempo. ¿qué hicieron fundamentalmente mal? Usualmente dejan de lado el futuro."
                            >
                            </ModalFragment>
                        </div>
                        <div className="modal-footer">
                            <button onClick={closed} className="btn-cancel btn">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Modal