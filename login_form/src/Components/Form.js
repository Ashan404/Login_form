import React,{useState} from 'react'
import SignupForm from './SignupForm'
import SignFormSuccess from './SignFormSuccess'


function Form() {

  const [formIsSubmitted,setFormIsSubmitted]=useState(false);

  const submitForm =()=>{
    setFormIsSubmitted(true);
  };
  return (
    <div>
       {!formIsSubmitted?<SignupForm submitForm={submitForm}/>:<SignFormSuccess/>}
       </div>
 
  )
}

export default Form;