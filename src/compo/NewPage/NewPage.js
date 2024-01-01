import React, { useEffect} from 'react'
import './NewPage.css'
import Button from '../Button/Button';

const NewPage = (props) => {
  
  
   useEffect(() => {
     
   }, []);
  let loacalStorageUpdates = () => {
    localStorage.setItem("notelength", 1);
    console.log("Loaded");
  }

  return (
    <div className="container">
      <div>
        <h1>You have no notes !</h1>
        <Button
          cl="white"
          bg="blue"
          title="Create new one"
          padding="15px 40px"
          click={loacalStorageUpdates}
        ></Button>
      </div>
    </div>
  );
}

export default NewPage
