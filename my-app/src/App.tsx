import React  from 'react';
import './App.css';
import NavBar from './component/navbar';
import { useDispatch } from 'react-redux';


function App() {
  const [value, setValue] = React.useState(0);
 


  return (
    <div>
      < NavBar values={value} setValue={setValue} />

    </div>
  );
}

export default App;
