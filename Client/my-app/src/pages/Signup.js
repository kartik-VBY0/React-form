import React,{useState} from 'react'
import signup from '../styles/signup.css';

function Signup() {
  const [details,setDetails]=useState({
    text:"",
    email:"",
    password:""
  });
  function handleChange(e){
    setDetails((prevValue)=>{
      return{...prevValue, [e.target.type]:e.target.value}});
  }
  async function handleClick(e){
    e.preventDefault();
    const response=await fetch("http://localhost:8080/adduser",{
      method:"POST",
      body:JSON.stringify(details),
      headers:{
        "Content-Type":"application/json"}
    })
    const result=await response.json();
    console.log(result);
    
  }
  
  return (
    <div className="container">
    <div className="signup" >
    <h1>Signup</h1>  
            <form onSubmit={handleClick}>                          
                <input onChange={handleChange} type="text" placeholder="Name" value={details.text} />
                <input onChange={handleChange} type="email" placeholder="Email" value={details.email} />
                <input onChange={handleChange} type="password" placeholder="Password" value={details.password} />
                <button type="submit">Signup</button>
            </form>
    </div>
    </div>
  )
}

export default Signup;
