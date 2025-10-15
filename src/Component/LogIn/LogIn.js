import React, { Component } from 'react';
import style from './LogIn.module.css';

export class LogIn extends Component {
    constructor(props) {
      super(props)
      this.state = this.props
    }
  render() {
    return (
      <div className={style.signupcontainer}>
        <h2>LogIn</h2>
        <div className={style.buttons}>
            <button type='button'>LogIn via Google</button>
            <button type='button'>LogIn via Facebook</button>
        </div>
        <div className={style.line}>
            <hr />
            <p>Or</p>
        </div>
        <form action="" className={style.form} onSubmit={this.state.logIn}>
            <input type="email" placeholder='Email address' name='email' />
            <input type="password" placeholder='Create password' name='password' />
            <button type='submit'>LogIn</button>
        </form>
        <span>Create Account <a href="/" onClick={this.state.switch}>SignUp</a></span>
      </div>
    )
  }
}
export default LogIn;
