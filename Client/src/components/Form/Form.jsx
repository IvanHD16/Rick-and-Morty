import React from "react";
import { useState } from "react";
import validation from "./validation";

const Form = ({login})=>{
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const[error, setError] = useState({
        email: '',
        password: ''
    })
    
    const handleChange = (event)=>{
        const property = event.target.name;
        const value = event.target.value;
        setUserData({...userData, [property]: value});
        validation({...userData, [property]: value}, error, setError)
    }

    const submitHandler = (event) =>{
        event.preventDefault()
        login(userData)
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='email'>email</label>
                    <input 
                        type='text' 
                        name='email' 
                        value={userData.email}
                        onChange={handleChange}
                        ></input>
                    <span>{error.email}</span>
                </div>
                
                <div>
                    <label htmlFor='password'>password</label>
                    <input 
                        name='password'
                        value={userData.password}
                        onChange={handleChange}
                        ></input>
                        <span>{error.password}</span>
                </div>
                <div>
                    <button>login</button>
                </div>
            
            </form>
        </div>
    )
}

export default Form;