import { Outlet, Link } from 'react-router-dom';
import Footer from "./Footer";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-md-3">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">ReactRouting</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-auto">
                <Link className="nav-link active" aria-current="page" to="home">Home</Link>
              </li>
              <li className="nav-item mx-auto">
                <Link className="nav-link" to="about">About</Link>
              </li>
              <li className="nav-item mx-auto">
                <Link className="nav-link" to="services">Services</Link>
              </li>
              <li className="nav-item mx-auto">
                <Link className="nav-link" to="contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
      <Footer />
    </>
  )
}

export default Navbar
