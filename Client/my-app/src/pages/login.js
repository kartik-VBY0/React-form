import React,{useState} from 'react'

function Login() {
  const [checked,checktDetails]=useState({
    email:"",
    password:""
  });

  function handleChange(e){
    checktDetails((prevValue)=>{
      return{...prevValue, [e.target.type]:e.target.value}});
  }
  async function handleClick(e){
    e.preventDefault();
    const response=await fetch("http://localhost:8080/login",{
      method:"POST",
      body:JSON.stringify(checked),
      headers:{
        "Content-Type":"application/json"
      }
    });
    const result=response.json();
    console.log(result);
  }

  return (    
    <div className="container">
    <div className="signup" >
    <h1>Login</h1>  
            <form onSubmit={handleClick}>
                <input onChange={handleChange} type="email" placeholder="Email"  />
                <input onChange={handleChange} type="password" placeholder="Password"  />
                <button type="submit">Login</button>
            </form>
    </div>
    </div>    
  )
}

export default Login;
