import { useState } from 'react';
 
 
 const OpenModal = () => {
    const [show, setShow] = useState(false);
    function handleOpen() {
      setShow(!show);    
    }
    return {handleOpen, show}
  }
  export default OpenModal