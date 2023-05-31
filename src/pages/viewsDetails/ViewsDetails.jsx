import React from 'react'

const ViewsDetails = () => {
  return (
    <>
        <div className="container-fluid page-header mb-5 p-0 bg-dark" style={{ backgroundImage: "url(../../assets/image/notes/mth18.jpg)" }}>
            <div className="container-fluid page-fluid-inner py-5">
                <div className="container text-center pb-5">
                <h1 className="display-3 text-white mb-3 aniamted slideInDown">Booking</h1>
                <nav aria-label='breadcrumb'>
                    <ol className="breadcrumb justify-content-center text-uppercase">
                    <li className="breadcrumb-item"><a href="/" className='text-decoration-none'>Home</a> </li>
                    <li className="breadcrumb-item"><Link to="/rooms" className='text-decoration-none'>Rooms</Link> </li>
                    <li className="breadcrumb-item text-white active">Booking</li>
                    </ol>
                </nav>
                </div>
            </div>
        </div>
    </>
  )
}

export default ViewsDetails
