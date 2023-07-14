import React ,{useState}from 'react'
import Validation from './Validation';

function SinguoForm() {

    const[values,setValues]=useState({
        name:"",
        email:"",
        password:"",
    });

    const [errors,setErrors]= useState({});
    const handleChange=(event)=>{
        setValues({
            ...values,
            [event.target.name]:event.target.value,
        });// recheak  this line
    }
    const handleFormSubmit= (event)=>{
        event.preventDefault();
        setErrors(Validation(values));
    };
  return ( 
    <div className="container">
        <div className="app-wrapper">
            <div>
                <h2 className="title">Create Account</h2>
                <form className="form-wrapper">

                    <div className="name">
                        <label className="label">Full Name</label>
                        <input 
                        className="input" 
                        type="text" 
                        name="fullName"
                        value={values.fullName}
                        onChange={handleChange}
                        />

                        {errors.fullname && <p className="error">{errors.fullname}</p>}
                    </div>

                    <div className="email">
                        <label className="label">Email</label>
                        <input className="input"
                        type="email"
                        name="email"
                        value={values.email}/>
                         {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div className="passward">
                        <label className="label">Password</label>
                        <input className="input"
                        type="password"
                        name="password"
                        value={values.password}/>
                         {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div>
                        <button className="sumbit" onClick={handleFormSubmit}>Sign Up</button>
                    </div>

                </form>
            </div>
        </div>



    </div>
  )
}

export default SinguoForm