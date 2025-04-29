import React,{ useState } from "react";

 export function Greeting(){
    const [message,setMessage] = useState("");
    return( <div>
     <p>Enter your name:</p>
       <input onBlur={()=>setMessage("")} type="text" onChange={(e)=>setMessage(e.target.value)} />
       {message && <p>Hello {message}!</p>}   
    </div>
    )
}

