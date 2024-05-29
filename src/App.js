// import React from "react";

// function App() {
//   const isAuthenticated = true; 
//   return isAuthenticated ? (
//     <div>
//       <h1>Welcome, User!</h1>
//     </div>
//   ) : (
//     <div>
//       <span>You are not logged in.</span>
//     </div>
//   );
// }

// export default App;

// import React from "react";

// function App() {
// const User_Details ="Verified"

//   switch (User_Details) {
//     case "Verified":
//       return (<div><h1>You are Verified.</h1></div>)
//       break;
//       case "Not Verified":
//         return (<div><h1>You are not Verified.</h1></div>)
//         break;
//         case "Account Dissabled":
//           return (<div><h1>Your Account is Dissabled.</h1></div>)
//           break;
//        default:
//           return (<div><h1>Contact Admin.</h1></div>)
        
//       break;
//   }
// }

// export default App;


import React from "react";
// import LoginForm from "./components/LoginForm";
import Register from "./components/Register";


function App() {
// window.addEventListener("resize",(event)=>{
//   console.log(window.innerHeight,window.innerWidth)
// })

  return <div>
    <Register />

{/* <LoginForm /> */}
</div>
}

export default App;