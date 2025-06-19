import './Login.css';

function Signup() {
    return (
<div className='box'>
    <h1> Sign Up </h1>

    <div className='input-name'>
       <input type='name' className='first-name' placeholder='Enter your first name'></input>
       <input type='name' placeholder='Enter your last name'></input>
    </div>

    <div className='input-email'>
        <input type='email' placeholder='Enter your Email ID'></input>
    </div>

    <div className='mark-up'>
        <input type='checkbox' name='agreement'></input>
        <label for='agreement'> I agree to sign up...</label>
    </div>

    <button>Submit !</button>

    <span><a href='#'>Already sign in? </a></span>

</div>
    )
}

export default Signup;  