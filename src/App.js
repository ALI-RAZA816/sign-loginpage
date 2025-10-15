import './App.css';
import React, { Component } from 'react';
import SignUp from './Component/SignUp/SignUp';
import LogIn from './Component/LogIn/LogIn';

export class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
         page:false, 
         email:null,
         password:null,
         isRegister:false,
         reEnterPassword:null,
         message:null,
      };
    };

    pageSwitchHandler = (event)=>{
        event.preventDefault();
        this.setState({
            page:!this.state.page,
        });
    };

    registerFormHandler = (event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const reEnterPassword = event.target.repassword.value;
        if(email === null || email === ''){
            alert("Email is required");
            return;
        }
        if(password !== reEnterPassword){
            alert("Password does not match");
            return;
        };
        this.setState({
            email,
            password,
            reEnterPassword,
            isRegister:!this.state.isRegister
        },()=>{
            console.log(this.state);
            event.target.email.value = null;
            event.target.password.value = null;
            event.target.repassword.value = null;
        });

    }

    logInFormHandler = (event)=>{
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value
        if(this.state.email === null){
            alert("Account not Found");
            return
        }

        if(this.state.email !== email){
            alert("enter correct email");
            return;
        }

        if(this.state.password !== password){
            alert("enter correct password");
            return;
        }
        alert("Login");
    }
    
  render() {
    return (
      <>
        {this.state.page === false && this.state.isRegister === false ? <SignUp switch = {this.pageSwitchHandler} submit={this.registerFormHandler}/> : <LogIn switch = {this.pageSwitchHandler} logIn = {this.logInFormHandler}/>}
      </>
    )
  }
}
export default App
