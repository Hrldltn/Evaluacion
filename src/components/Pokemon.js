import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom"
import Pikachu from '../assets/img/pikachu.jpg'
import Charmander from '../assets/img/charmander.jpg'
import alakazam from '../assets/img/alakazam.jpg'
import PokemonFragment from "./Fragments/PokemonFragment.js"

const Pokemon =()=>{

    return(
        <>
            <div  style={{backgroundColor:"#90CAF9" , height:"100vh"}}>
                <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="m-5 mt-5 text-light">Pokedex!</h1> 
                            </div>
                        </div>
                        <div className="row mt-200" >
                            <div className="col-4">
                                <PokemonFragment
                                    textoDescripcion="Pikachu is an Electric type Pokémon introduced in Generation 1. It is known as the Mouse Pokémon."
                                    imagen={Pikachu}
                                    titulo="Pikachu"
                                    año=" El año de aparicion fue 1995"
                                />
                            </div>
                            <div className="col-4">
                                    <PokemonFragment
                                        textoDescripcion="Charmander is a Fire type Pokémon introduced in Generation 1. It is known as the Lizard Pokémon."
                                        imagen={Charmander}
                                        titulo="Charmander"
                                        año="El año de aparicion fue 1996"
                                    />
                            </div>
                            <div className="col-4">
                                    <PokemonFragment
                                        textoDescripcion="Descripción: Alakazam is a Psychic type Pokémon introduced in Generation 1. It is known as the Psi Pokémon. Alakazam has a Mega Evolution, available from X & Y onwards."
                                        imagen={alakazam}
                                        titulo="Alakazam"
                                        año="El año de aparicion fue 2000"
                                    />
                            </div>
                        </div><br></br>
                        <Link className="text-black fs-5" to="/recomienda">Ir a Recomendaciones</Link>
                    </div>
            </div>
        </>
    )
}

export default Pokemon;