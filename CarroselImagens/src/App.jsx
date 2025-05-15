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
          {/* <img className='Imagem mt-5 mx-auto'src="../Images/FundoDapagina.png" alt="" />  */}
          <div id='Controles' className="carrosel carousel slide mx-auto mt-5" data-ride='carousel'>
            <div className="carousel-inner">
              <div className='carousel-item active'>
                <img className='img-1car d-block' src="../Images/FundoDapagina.png" alt="" />
              </div>
              <div className='carousel-item'>
                <img className='img-2car d-block' src="..." alt="" />
              </div>
              <div className='carousel-item'>
                <img className='img-3car d-block' src="..." alt="" />
              </div>
            </div>
            <a className='carousel-control-prev' href="#Controles" role='button' data-slide='prev'>
              <span className='carousel-control-prev-icon' aria-hidden='false'></span>
              <span className='sr-only'>Anterior</span>
            </a>
            <a href="#Controles" className='carousel-control-next' role='button' data-slide='next'>
              <span class="carousel-control-next-icon" aria-hidden="false"></span>
              <span class="sr-only">Próximo</span>
            </a>
          </div>




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
