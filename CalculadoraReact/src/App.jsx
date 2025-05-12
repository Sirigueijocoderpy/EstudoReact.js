import { useState } from 'react'

import './App.css'

function Limpar(){
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
}
function AdicionarValor(valor){
  const resultado = document.getElementById('resultado');
  resultado.innerHTML += valor;
}
function Calcular(){
  resultado.innerHTML = eval(resultado.innerHTML);
}





function App() {
  
  return (
    <>
      <div className='container'>
        <div class="row">
          <div class="col d-flex justify-content-center">
            <br />
  
            <div class="calculadora ">
              <button id='resultado' class="form-control resultado" placeholder="0" disabled="disabled"></button>
              
              <div class="row">
                <button id="btnclear" onClick={Limpar} type="button" class="btn btn-dark btn-lg clear font-weight-light">C</button>
                <button id="btndiv"  onClick={() => AdicionarValor(' / ')} type="button" class="btn btn-dark btn-lg font-weight-light">/</button>
                <button id="btnmul"  onClick={() => AdicionarValor(' * ')} type="button" class="btn btn-dark btn-lg font-weight-light">*</button>
              </div>
  
              <div class="row">
                <button id="btn7" onClick={() => AdicionarValor('7')} type="button" class="btn btn-dark btn-lg font-weight-light">7</button>
                <button id="btn8"  onClick={() => AdicionarValor('8')} type="button" class="btn btn-dark btn-lg font-weight-light">8</button>
                <button id="btn9"  onClick={() => AdicionarValor('9')} type="button" class="btn btn-dark btn-lg font-weight-light">9</button>
                <button id="btnsub" onClick={() => AdicionarValor(' - ')} type="button" class="btn btn-dark btn-lg font-weight-light">-</button>
              </div>
              
              <div class="row">
                <button id="btn4" onClick={() => AdicionarValor('4')} type="button" class="btn btn-dark btn-lg font-weight-light">4</button>
                <button id="btn5" onClick={() => AdicionarValor('5')} type="button" class="btn btn-dark btn-lg font-weight-light">5</button>
                <button id="btn6" onClick={() => AdicionarValor('6')} type="button" class="btn btn-dark btn-lg font-weight-light">6</button>
                <button id="btnsom" onClick={() => AdicionarValor(' + ')} type="button" class="btn btn-dark btn-lg font-weight-light">+</button>
              </div>
  
              <div class="row">
                <button id="btn1" onClick={() => AdicionarValor('1')} type="button" class="btn btn-dark btn-lg font-weight-light">1</button>
                <button id="btn2" onClick={() => AdicionarValor('2')} type="button" class="btn btn-dark btn-lg font-weight-light">2</button>
                <button id="btn3" onClick={() => AdicionarValor('3')} type="button" class="btn btn-dark btn-lg font-weight-light">3</button>
                <button id="btnigu" onClick={Calcular}type="button" class="btn btn-dark btn-lg enter">=</button>
              </div>
  
              <div class="row mg">
                <button id="btn0" onClick={() => AdicionarValor('0')} type="button"  class="btn btn-dark zero btn-lg font-weight-light">0</button>
                <button id="btnpon" onClick={() => AdicionarValor('.')} type="button" class="btn btn-dark btn-lg font-weight-light">.</button>
              </div>
  
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
