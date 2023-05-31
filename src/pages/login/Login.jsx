// import React from 'react'
import './login.css';

import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <Link to='/' className='d-flex align-items-center w-auto text-decoration-none'>
                      <h1><i className="ri-community-fill text-primary" style={{fontSize: '35px'}}></i>MTH
                      </h1>
                    </Link>
                  </div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                        <p className="text-center small">Enter Your Username & Password to login </p>
                      </div>
                      <form className="row g-3 needs-validation">
                        <div className="col-12">
                          <label htmlFor="yourUsername" className='form-label'>Username:</label>
                          <div className="input-group has-validation">
                            <span className="input-group-text" id='inputGroupPrepend'>@</span>
                            <input type="text" name='username' id='yourUsename' placeholder='Your Username' className="form-control" required />
                            <div className="invalid-feedback">Please enter your Username.</div>
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="yourPassword" className='form-label'>Password:</label>
                          <div className="input-group has-validation">
                            <input type="password" name='password' id='yourPassword' placeholder='Your Password' className="form-control" required />
                            <div className="invalid-feedback">Please enter your Password!</div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-check">
                            <input type="checkbox" name='remember' id='rememberMe' value='true' className="form-check-input" />
                            <label className="form-check-label" htmlFor='remeberMe'>Remember me</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn btn-primary w-100" type='submit'>Login</button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">Don{'\''}t have account? <Link to='/signup' className='text-decoration-none'>Create an account</Link> </p>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="credits">
                    Designed By <Link to='/' className='text-decoration-none'>Ink Hackers.</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Login
