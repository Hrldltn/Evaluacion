import React,{useState,useEffect} from 'react';
import{Routes,Route,Link} from 'react-router-dom';
import Pokemon from './components/Pokemon';
import Recomendaciones from './components/Recomendaciones';
import Modal from './components/Modal';


const App=()=> {
  return (
      <>
        <Routes>
                <Route path='/' element={<Pokemon/>}/>
                <Route path='/Recomienda' element={<Recomendaciones/>}/>
                <Route path='/Modal' element={<Modal/>}/>
        </Routes>
        
      </>
  )
}

export default App;
