import React from 'react'
import Navbar from '../components/Navbar'

const Login = (user) => {
   return (
      <>
         <Navbar />
         <div className="container mt-3 ">
            <div className=" d-flex justify-content-center">

               <div className="card col-md-6 ">
                  <div className="card-header">
                     <div className="cart-title">Login as {user.type}</div>
                  </div>
                  <div className="card-body">
                     <form className=''>
                        <div id="email " className='mb-1'>
                           <label className="">Email</label>
                           <input type='email' name="Email" className='form-control' />
                        </div>
                        <div id="password" className='mb-1 '>
                           <label className="">Password</label>
                           <input type='password' name="Password" className='form-control mb-1' />
                           <div className="form-check">

                              <input type="checkbox" className='form-check-input' value="" />
                              <label className='form-check-label'>Show Password</label>
                           </div>
                        </div>
                        <button id="login" className="form-control btn btn-primary">Login as {user.type}</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

Login.userTypes = {
   // navMessage:propType.string,
   type: propTypes.string
}

Login.defaultProps = {
   navMessage: "Online Examination Portal",
   type: "Admin"
}
export default Login