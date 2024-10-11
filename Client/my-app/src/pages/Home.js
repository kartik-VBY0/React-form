import React from 'react'
import {Link} from "react-router-dom";
function Home() {
  return (
    <div>
      <Link to="/Signup"><button > signup</button></Link>
      <Link to="/users"><button > login</button></Link>
    </div>
  )
}

export default Home;
