import {useState,useEffect} from 'react'
import './App.css';
import Button from './compo/Button/Button'
import NewPage from './compo/NewPage/NewPage'
import Homepage from './compo/Homepage/Homepage';

function App() {
  localStorage.setItem('notelength', 1);
  let noteLength=localStorage.getItem('notelength').length;
  const [notelength, setNotelength] = useState(noteLength);
  
  useEffect(() => {
    console.log("useEffect loaded")
  }, [])

  
  return (
    <div className="App">
      {/*<Button title="Get Started" cl="white" bg="blue" padding="10px"></Button>*/}
      {
        notelength <= 0 ? <NewPage/>:<Homepage/>
        } 
   </div>
  );
}

export default App;
