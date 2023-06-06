import React from 'react'
import { Navbar } from 'Components/Layouts/Navbar'
import "./password.css"
// import Btn from "../Footer/Btn/btn"
// import { size } from 'lodash'
function Password(props) {
  return (
    <div>
    <Navbar/>
         <div className='Forget__password'>
           <h1 className='Forget__password__header'>Let Us Help You Reset Your Password</h1>
           <h5 className='Forget__password__header5'>Please provide the email linked with your account. We will sent you a password reset link</h5>
           <a href="/Reset"><button className='orangeBtn'>Email Reset Link</button></a>
            <form className='Forget__password__Form__layout'>
              <legend>Email</legend>
              <input type="email" placeholder="Johndoe@gmail.com" />
                 {/* <Btn text="Email Resent Link"/> */}
                  {/* <button>Email Resent Link</button> */}
                  <div className='btnOrne'>
                    <a href="/Reset"><button className='orangeBtn'>Email Reset Link</button></a>
                  </div>
          </form>
          </div>
    </div>
  )
}

export default Password;