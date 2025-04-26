import React,{ useState } from "react";

 function Greeting(){
    const [message,setMessage] = useState("");
    return( <div>
     <p>Enter your name:</p>
       <input type="text" onChange={(e)=>setMessage(e.target.value)} />
       {message && <p>Hello, {message}!</p>}   
    </div>
    )
}

export default Greeting