// import React from 'react'
import { Link } from 'react-router-dom'
import '../login/login.css'

const SignUp = () => {
  return (
    <div>
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
                        <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                        <p className="text-center small">Enter your person details to create an account </p>
                      </div>
                      <form className="row g-3 needs-validation">
                        <div className="col-12">
                          <label htmlFor="yourName" className='form-label'>Your Name:</label>
                            <input type="text" name='name' id='yourName' placeholder='Enter Your Name' className="form-control" required />
                            <div className="invalid-feedback">Please, enter your Name!</div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="yourEmail" className='form-label'>Your Email:</label>
                            <input type="email" name='email' id='yourEmail' placeholder='Enter Your Email' className="form-control" required />
                            <div className="invalid-feedback">Please, enter a valid Email address!</div>
                        </div>
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
                            <input type="checkbox" name='terms' id='acceptTerms' value='true' className="form-check-input" required />
                            <label className="form-check-label" htmlFor='acceptTerms'>I agree ans accept the <Link to='/' className='text-decoration-none'>terms & conditions</Link> </label>
                            <div className="invalid-feedback">You must agree before submitting.</div>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn btn-primary w-100" type='submit'>Create Account</button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">Already have account? <Link to='/login' className='text-decoration-none'>Login</Link> </p>
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
    </div>
  )
}

export default SignUp
