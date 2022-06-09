import React from 'react'
import "./Register.scss"

export default function Register() {
  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
                <img className="logo" 
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png'
                />
        <button className="loginButton">Sign in</button>
        </div>
        </div>
        <div className="container-register">
            <h1>Unlimited movies, TV shows and more</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
                Ready to watch? Enter you email to create or restart your membership.
            </p>
        <div className="input">
            <input type={"email"} placeholder="email address"/>
            <button className="registerButton">Get Started</button>
        </div>
        </div>
    </div>
  )
}