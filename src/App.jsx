import { useState } from "react"
import './app.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const alturaMetros = altura / 100;
  let IMC = peso / (alturaMetros * alturaMetros);
  const CaculaIMC = () => {
  console.log(IMC)

  if (IMC < 18.5) {
    return (<p>Você está abaixo do peso</p>)
  } else if (IMC < 24.99) {
    return (<p>Seu Peso está normal</p>)
  } else if (IMC < 29.99) {
    return ( <p>Você está acima do peso</p>)
  } else if (IMC < 34.99) {
    return (<p>Você está com Obesidade grau 1</p>)
  } else if (IMC < 39.99) {
    return ( <p>Você está com Obesidade grau 2</p>)
  } else if (IMC > 40) {
    return (<p>Você está com Obesidade grau 3</p>)
  }
  }
  return (
    <div className="container">
    <form>
      <h1>Calculadora de IMC</h1>
      <label>Insira sua altura em centimetros</label>
      <input type="number" placeholder="000" onChange={evento => setAltura(evento.target.value)}/>
      <label>Insira seu peso</label>
      <input type="number" placeholder="000" onChange={evento => setPeso(evento.target.value)}/>
      <p>Seu IMC é {IMC.toFixed(1)}</p>
      {CaculaIMC()}
    </form>
    </div>
  )
}

export default App
