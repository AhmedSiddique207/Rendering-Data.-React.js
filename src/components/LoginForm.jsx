import React from "react";

function LoginForm (){

return (


//  <form method="POST" action="/api/login"  > 
 
  <form onSubmit={(event)=>{
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = FormData.get("username");
    const password = FormData.get("password");
    fetch("http://localhost:3000/api/login",{
        body:{
            username,
            password,
        },
        method :"Post",
    })
}}> 

<label htmlFor="UserName">User Name</label>
    <br />
    <input id="username" onChange={(event)=>{
        console.log(`UserName:${event.target.value}`);
         }     } name="username"/>

  <br />

  <label htmlFor="Password">Password</label>
    <br />
    <input id="Password" type="password" onChange={(event)=>{
        console.log(`Password:${event.target.value}`);
         }     } name="password"/>

    <br /> <br/>

    <button>Login</button>

</form>

);

}

export default LoginForm;