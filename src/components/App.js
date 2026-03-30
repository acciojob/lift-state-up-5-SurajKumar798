
import React, {useState} from "react";
import './../styles/App.css';

function LoginForm({ isLoggedIn, onLogin }){
  const handleSubmit = (e)=>{
    e.preventDefault();
    onLogin();
  };
  return(
    <div>
  {isLoggedIn ? (
    <form onSubmit={handleSubmit}>
     <h3>Parent Component</h3>
     <label>Username</label>
     <input type="text" placeholder="Username" required />

     <label>Password</label>
     <input type="password" placeholder="Password" required />

     <button type="submit">Login</button>
    </form>
  ) : (
    <h2>You are Logged in!</h2>
  )}
</div>
);
}
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin=()=>{
    setIsLoggedIn(true);
  }
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
