import React, { Component } from 'react';
import style from './SignUp.module.css';

export class SignUp extends Component {
    constructor(props) {
      super(props)
      this.state = this.props
    }
    
  render() {
    return (
        <div className={style.signupcontainer}>
          <p>{this.state.message}</p>
        <h2>Create Account</h2>
        <p>Get started with your free account</p>
        <div className={style.buttons}>
            <button type='button'>Signup via Google</button>
            <button type='button'>Signup via Facebook</button>
        </div>
        <div className={style.line}>
            <hr />
            <p>Or</p>
        </div>
        <form action="" className={style.form} onSubmit={this.state.submit}>
            <input type="email" placeholder='Email address' name='email' />
            <input type="password" placeholder='Create password' name='password' />
            <input type="password" placeholder='Re-enter password' name='repassword' />
            <button type='submit'>Create Account</button>
        </form>
        <span>Have an account <a href="/" onClick={this.state.switch}>Log In</a></span>
      </div>
    )
  }
}
export default SignUp;
