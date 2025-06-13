import React, { useState } from 'react'

function Nav() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className='nav-wrapper w-100 z-2'>
        <nav className='navbar navbar-expand-lg bg-white' style={{height:'90px'}}>
          <div className='container-fluid text-center'>
            <a href='#' className='navbar-brand nav-logo fs-3 p-0'>DreamHouse</a>
            <div className='collapse navbar-collapse d-lg-flex d-none'>
              <ul className='navbar-nav navbar-menu gap-4 ms-xl-0 ms-auto mb-2 mb-lg-0'>
                <li className='nav-item fs-6 fw-normal p-0'>
                  <a href='#' className='nav-link text-black'>Home</a>
                </li>
                <li className='nav-item fs-6 dropdown p-0'>
                  <a href='#' className='nav-link dropdown-toggle text-black' role='button' data-bs-toggle='dropdown' aria-expanded='false' >Real Estate</a>
                  <ul className='dropdown-menu'>
                    <li><a href='#' className='dropdown-item text-black'>Properties</a></li>
                    <li><a href='#' className='dropdown-item text-black'>Agents</a></li>
                    <li><a href='#' className='dropdown-item text-black'>Agencies</a></li>
                  </ul>
                </li>
                <li className='nav-item fs-6 p-0'><a href='#' className='nav-link text-black'>Gallery</a></li>
                <li className='nav-item fs-6 p-0'><a href='#' className='nav-link text-black'>Contact</a></li>
              </ul>
            </div>

            <div className='nav-wrapper d-flex align-items-center gap-3 ms-auto'>
              <div className='nav-social d-xl-flex d-none'>
                <i className='bi bi-facebook mx-2 fs-6'></i>
                <i className='bi bi-twitter-x mx-2 fs-6'></i>
                <i className='bi bi-instagram mx-2 fs-6'></i>
                <i className='bi bi-youtube mx-2 fs-6'></i>
              </div>

              <div className='nav-user-phone px-3 border-start'>
                <div className='user-info'>
                  <i className='b bi-telephone pe-2 fs-6'></i>
                  <span>3-746-555-4548</span>
                </div>
              </div>

              <div className='user-profile position-relative'>
                <i className='bi bi-person-circle user-icon'></i>
                <div className='user-modal' onClick={() => setShowModal(true)}>
                  <div className='user-modal-box'>
                    <i className='bi bi-heart-fill'></i>
                    <span className='fs-6'>My Favorites</span>
                  </div>
                </div>                    

                {showModal && (
                  <div className='modal d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50' onClick={() => setShowModal(false)}>
                    <div className='position-absolute top-50 start-50 translate-middle w-100' style={{maxWidth: '900px'}} onClick={(e) => e.stopPropagation()}>
                      <div className='row w-100 rounded-4 overflow-hidden shadow'>
                        <div className='bg-dark col-md-6 text-white d-flex flex-column justify-content-center login-left align-items-center text-center'>
                          <div className='login-left-overlay'></div>
                          <div className='position-relative z-1'>
                            <i className='bi bi-quote fs-1'></i>
                            <p className='fs-5 fw-semibold'>Dolores amet erat nonumy consetetur stet lorem diam, tempor no dolore dolore duo tempor lorem, nonumy sadipscing dolor.</p>
                            <p className='fw-light'>Nick Dale</p>
                          </div>
                        </div>
                        <div className='col-md-6 p-4 position-relative login-right bg-light'>
                          <i className='bi-x-lg login-close position-absolute' aria-label='Close' onClick={() => setShowModal(false)}></i>
                          <h4 className='fw-500 fs-3 mb-3 text-muted'>Dreamhouse Utils</h4>
                          <h6 className='text-primary pb-2 mb-3' style={{cursor:'pointer',width:'fit-content'}}>Login</h6>
                          <div className='p-4 rounded-4 login-form'>
                            <div className='mb-3'>
                              <label className='form-label'>UserName</label>
                              <input type='text' className='form-control rounded-pill px-4 py-2' placeholder='UserName' />
                            </div>

                            <div className='mb-3'>
                              <label className='form-label d-flex justify-content-between'>Password
                              <a href='#' className='text-primary small'>Forgot Password</a></label>
                              <input type='password' className='form-control rounded-pill px-4 py-2' placeholder='Password' />
                            </div>
                            <button className='btn btn-primary w-100 rounded-pill py-2'>Login</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button className='navbar-toggler d-lg-none' type='button' data-bs-toggle='offcanvas' data-bs-target='#sidebarMenu' aria-controls='sidebarMenu'>
                <span className='bi bi-list fs-2'></span>
              </button>
            </div>
          </div>
          <div className='offcanvas-body'>
            <div className='offcanvas offcanvas-start d-lg-none d-flex' tabIndex={'-1'} id='sidebarMenun' aria-labelledby='sidebarMenuLabel'>
              <div className='offcanvas-header'>
                <a href='#' className='navbar-brand nav-logo fs-3 p-0'>DreamHouse</a>
                <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
              </div>            
              <div className='offcanvas-body'>
                <ul className='navbar-nav navbar-menu gap-4 ms-xl-0 ms-auto mb-2 mb-lg-0'>
                  <li className='nav-item fs-6 fw-normal p-0'>
                    <a href='#' className='nav-link text-black'>Home</a>
                  </li>
                  <li className='nav-item fs-6 dropdown p-0'>
                    <a href='#' className='nav-link dropdown-toggle text-black' role='button' data-bs-toggle='dropdown' aria-expanded='false' >Real Estate</a>
                    <ul className='dropdown-menu'>
                      <li><a href='#' className='dropdown-item text-black'>Properties</a></li>
                      <li><a href='#' className='dropdown-item text-black'>Agents</a></li>
                      <li><a href='#' className='dropdown-item text-black'>Agencies</a></li>
                    </ul>
                  </li>
                  <li className='nav-item fs-6 p-0'><a href='#' className='nav-link text-black'>Gallery</a></li>
                  <li className='nav-item fs-6 p-0'><a href='#' className='nav-link text-black'>Contact</a></li>
                </ul>
              </div>
            </div>
          </div> 
        </nav>

        <div className='nav-banner bg-white overflow-hidden'>
          <div className='row g-0'>
            <div className='col-lg-6 m-0 p-0'>
              <div className='nav-banner-left py-5 px-4 px-lg-5'>
                <h2>Find Your Sweet House</h2>
              </div>
            </div>
            <div className='col-lg-6 m-0 p-0'>
              <div className='nav-banner-right justify-content-lg-start justify-content-center flex-wrap py-5 px-4 px-lg-5 d-flex align-items-center gap-sm-5 gap-3'>
                <h2 className='fs-5 fw-bolder text-center mb-0'>Need Help to choose your property</h2>
                <button className='custome-btn1'>Let Us Call You!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>    
  )
}

export default Nav
