import React,{useState} from 'react'
import SinguoForm from './SinguoForm'
import SignFormSuccess from './SignFormSuccess'
function Form() {

  const [formIsSubmitted,setFormIsSubmitted]=useState(false);

  const submitForm =()=>{
    setFormIsSubmitted(true);
  }
  return (
    <div>
       {!formIsSubmitted?<SinguoForm submitform={submitForm}/>:<SignFormSuccess/>}
       </div>
 
  )
}

export default Form