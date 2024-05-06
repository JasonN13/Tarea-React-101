import {useState } from 'react'

function App() {
  const [nombre, setnombre]= useState('');
  const [numero1, setnumero1]= useState('');
  const [numero2, setnumero2]=useState('');
  const [suma, setsuma]=useState('');
  const [resta, setresta]=useState('');

  const cambio_de_nombre = (e) =>{
    setnombre(e.target.value);
  }

  const Cambio_Numero1 = (e) =>{
    setnumero1(e.target.value);
  }

  const Cambio_Numero2 = (e) =>{
    setnumero2(e.target.value);
  }

  const Sumatoria = () =>{
    const Resultado1 = parseFloat(numero1) + parseFloat(numero2);
    setsuma(Resultado1);
  }

  const Resta = () =>{
    const Resultado2 = parseFloat(numero1) - parseFloat(numero2);
    setresta(Resultado2);
  }

  const Limpiar =()=>{
    setnombre('');
    setnumero1('');
    setnumero2('');
    setresta('');
    setsuma('');
  }

  return(
    <div>
      <h1>Bienvenido a mi primer proyecto </h1>
      <input
      type="text"
      placeholder="Ingrese su nombre "
      value={nombre}
      onChange={cambio_de_nombre}
      />
      {nombre && <p>Espero te encuentres bien, {nombre} </p>}

      <h1> Operaciones Numericas </h1>

       <input
       type="number"
       placeholder="Ingrese el primer numero"
       value={numero1}
       onChange={Cambio_Numero1}
       />  

       <input
       type="number"
       placeholder="Ingrese el segundo numero"
       value={numero2}
       onChange={Cambio_Numero2}
       /> 

       <button onClick={Sumatoria}>Sumar</button>
       <button onClick={Resta}>Restar</button>
       <button onClick={Limpiar} > Limpiar</button>
       {suma}  <div>La suma es : {suma} </div>
       {resta}  <div>La resta es : {resta} </div>

    </div>
  )

}

export default App
