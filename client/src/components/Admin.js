import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const Admin = () => {
    const [passIn,setPassIn] = useState("");
    const [errors, setErrors] = useState("");

    let truePass;
    axios.get('http://localhost:8000/api/admin')
        .then(res=>{truePass = res.data;})
        
    
    let navigate = useNavigate();
    const checkPassword = (e) =>{
        e.preventDefault();
        if (passIn === truePass){
            navigate('/', { state : {admin: true}});
        }
        else {
                setErrors('incorrect password');
            }
        }

    return (
        <>
            <form onSubmit={checkPassword}>
                <p>{errors}</p>
                <label>password</label>
                <input type='password' onChange={(e)=>setPassIn(e.target.value)}></input>
                <button type='submit'>Enter</button>
            </form>
        </>
    )
}

export default Admin;

