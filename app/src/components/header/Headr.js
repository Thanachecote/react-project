import React from "react";
import { NavLink , Link} from "react-router-dom";

function Headr() {
  return (
    <div className="container border-bottom box-shadow">
      <div className="d-flex flex-column flex-md-row align-items-center py-3 px-0 my-2 bg-white ">
        <Link className="my-0 mr-md-auto" to="/" style={{textDecoration: 'none',color: '#212529', fontWeight: 'bold'}}>
          <h5 className="font-weight-normal">
            <i className="fas fa-shopping-bag mr-2"></i>Shopping
          </h5>
        </Link>
        <nav className="my-2 my-md-0 mr-md-3">
          <NavLink className="p-2 text-dark" to="/">
            Home
          </NavLink>
          <NavLink className="p-2 text-dark" to="/about">
            Shirt
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Headr;
