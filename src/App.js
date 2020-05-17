import React, {useState, useEffect} from 'react';
import Header from './components/layout/Header';
import Write from './components/Write';
import Result from './components/Result';

import './App.css';

function App() {
  // const[mierda, setMierda] = useState('Popo')
  // const[usuario, setUsuario] = useState('Andres')
  const[name, setName] = useState('')

  useEffect(() => {
    switch(name) {
      case 'Tavo':
        return setName('Chavo')
      case 'tavo':
        return setName('chavo')
      case 'Gustavo':
        return setName('Volteado')
      case 'gustavo':
        return setName('volteado')
      case 'Sofi':
        return setName('Choflis')
      case 'sofi':
        return setName('choflis')
      case 'Sofia':
        return setName('Cofia')
      case 'sofia':
        return setName('cofia')
      case 'Jean':
        return setName('Jean Book')
      case 'jean':
        return setName('jean book')
      default:
    }
    
    /* if(name === 'Tavo'){
      return setName('Chavo')
    } */
  }, [name])

  const handleChange = (e) => { setName(e.target.value) }

  return (
    <div className="App">
      <div className="Content">
        <Header />
        <Write handleMierda={handleChange} />
        <Result /* perra={mierda} */ usuario={name} />
      </div>
    </div>
  );
}

export default App;
