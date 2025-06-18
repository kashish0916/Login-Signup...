import './Login.css';
function App() {
  return (
    <div className="App">
      <h1> Log in to your account </h1>
    <div className="input">

<div class="one">
      <label id="username"> Username: </label>
      <input type="name" placeholder="Enter your Username"></input>
</div>

<div class="one">
      <label id="password"> Password: </label>
      <input type="password" placeholder="Enter your password"></input>
</div>

      <button> Log in </button>

      <div class="login-footer">
        <span><a href="#">Forgot Password?</a></span>
        <span><a href="#">Sign up</a></span>
      </div>

      </div>
   </div>
  );
}

export default App;
