// import React from 'react'
// import WOW from 'wowjs';

const Book = () => {
    // new WOW.WOW({
    //     live: false
    // }).init();
  return (
    <div>
        {/* <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay='0.1s'> */}
        <div className="container-fluid booking pb-5" >
            <div className="container">
                <div className="bg-white shadow" style={{padding:'35px'}}>
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <div className="col-md-3">
                                    <div className="date">
                                        <input 
                                            type="text" 
                                            className="form-control datetimepicker-input"
                                            placeholder='Check In' />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="date">
                                        <input 
                                            type="text" 
                                            className="form-control datetimepicker-input"
                                            placeholder='Check Out' />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <select name="" id="" className="form-select">
                                        <option value="selected">Adult</option>
                                        <option>1 Adult</option>
                                        <option>2 Adults</option>
                                        <option>3 Adults</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <select name="" id="" className="form-select">
                                        <option value="selected">Kid</option>
                                        <option>1 Kid</option>
                                        <option>2 Kids</option>
                                        <option>3 Kids</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-primary w-100">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Book
