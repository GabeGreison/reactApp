import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal.js";



const App = () => {
  const [modal, setModal] = React.useState(false)


  return(
    <div>
      <Modal modal ={modal} setModal ={setModal} />
      <ButtonModal setModal={setModal} />
      
    </div>
  )
 
};

export default App;
