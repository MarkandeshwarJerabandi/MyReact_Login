import React, {useState} from 'react';
import {Navigate} from 'react-router-dom';
function Login(props) {
  const initValues = {username:'',password:''};
    const [formValues,setFormValues] = useState(initValues);
    const [formErrors,setFormErrors] = useState({});
    const [isSubmit,setIsSubmit] = useState(false); 

    const handleChange = (event) => {
        const {id,value} = event.target;
        setFormValues({...formValues,[id]:value});
        console.log(formValues);
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      setFormErrors(validate(formValues));
      const errors = {};
      if(formValues.username=="admin" && formValues.password=="admin")
      {
        setIsSubmit(true);
      }
      else
      {
        errors.errMsg = "Username/Password is Incorrect!!!";
        setFormErrors(errors);
        //formErrors.error = ;
      }
    }
    const validate = (values) => {
      const errors = {};
      if(!values.username)
          errors.username = "Username is Required";
      if(!values.password)
          errors.password ="Password is Required";
      return errors;
  }
  return (
    <div className='container'>
      {
        Object.keys(formErrors).length===0 && isSubmit?
          (<Navigate to="/home" />)
          :<h4 style={{color:"red"}}>{formErrors.errMsg}</h4>
        
      }
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <div className='row'>
                  <div className='mb-3'>
                      <label>Username</label>
                      <input type="text" id="username" 
                              placeholder='Type Username Here'
                              value = {formValues.username}
                              onChange={handleChange}
                      />
                  </div>
                  <p style={{color:"red"}}>{formErrors.username}</p>
                  <div className='mb-3'>
                      <label>Password</label>
                      <input type="password" id="password" 
                              placeholder='Type Password Here'
                              value = {formValues.password}
                              onChange={handleChange}
                      />
                  </div>
                  <p style={{color:"red"}}>{formErrors.password}</p>

                  <div className='mb-4'>
                      <button className='btn btn-primary'>Login</button>
                  </div>
                </div>
            </form>
        </div>

  );
}

export default Login;
