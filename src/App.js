import logo from './logo.svg';
import './App.css';
import Form from './ParentComponent';
import Table from './ChildComponent';
import { useState } from 'react';

function App() {

  const [data, setData] = useState([])

  function onDataChange(newProduct) {
    setData([...data, newProduct])
  }


  return (
    <div className="App">
      <header className="App-header">
          <Form onDataChange={onDataChange} />
          <Table data={data} />
      </header>
    </div>
  );
}

export default App;
