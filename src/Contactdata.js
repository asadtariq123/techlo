import React from 'react'

const Contactdata = () => {
    return (
        <>
        <div className="text-center my-3">
            <h1>Contact Information</h1>
        </div>
        <div className="container ">
            <div className="row">
                <div className="col-md-6 col-12 mx-auto contact_form">
                <form>
  <div class="form-group ">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>



                </div>
            </div>

        </div>


        </>
    )
}

export default Contactdata
