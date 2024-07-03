import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/main/Main';


function App() {
  
  const data = []

  const [color , setColor] = useState(data)

  const colorHandler = (e) =>{
    setColor((prevState) =>{
      return [...prevState , e]
    })
  }

  console.log(colorHandler);

  return (
    <div className="App">
      <Header add={colorHandler}/>
      <Main data={color}/>
    </div>
  );
}

export default App;
