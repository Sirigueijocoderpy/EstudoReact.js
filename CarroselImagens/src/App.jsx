import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {
  return (
    <div className='gu'>

      <nav className='navbar navbar-expand header'>
        <img className='navbar-brand logo' src="../Images/Logo.png" alt="" />
        <ul className='navbar-nav lista justify-content-around'>
          <li className="elementolista nav-item">  Home</li>
          <li className="elementolista nav-item">  Discover</li>
          <li className="elementolista nav-item">  For Men</li>
          <li className='elementolista nav-item'>  For Woman</li>
        </ul>
      </nav>
      <main>
        <div className='Fundo '>
          <img className='Imagem mt-5 mx-auto'src="../Images/FundoDapagina.png" alt=""/>
          




          <article className='Escritura text-center mt-4'>
            Ralph Lauren: feito para ser usado, <span className='Efeito'>feito para marcar sua história.</span>
          </article>

        </div>



      </main>
      <footer className='text-center '>© Ralph Lauren 2025.</footer>


    </div>
  )
}




export default App
