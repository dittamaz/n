import { Link } from "react-router-dom";

export function Header () {
    const userLogIn = false;

    const publicMenu = (
                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <button type="button" className="btn btn-primary">Sign-up</button>
                </div>
    );

    const userMenu = (
        <div className="col-md-3 dropdown text-end">
          <Link to="/" className="d-block link-body-emphasis text-decoration-none dropdown-toggle show" data-bs-toggle="dropdown" aria-expanded="true">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
          </Link>
          <ul className="dropdown-menu text-small">
            <li><Link className="dropdown-item"to="/">New project...</Link></li>
            <li><Link className="dropdown-item" to="/">Settings</Link></li>
            <li><Link className="dropdown-item" to="/">Profile</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/">Sign out</Link></li>
          </ul>
        </div>
    );

    return (
        <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                {/*<svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>*/}
                LOGO
            </Link>
          </div>
    
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
            <li><Link to="/" className="nav-link px-2">Features</Link></li>
            <li><Link to="/" className="nav-link px-2">Pricing</Link></li>
            <li><Link to="/" className="nav-link px-2">FAQs</Link></li>
            <li><Link to="/" className="nav-link px-2">About</Link></li>
          </ul>

          {userLogIn ? userMenu : publicMenu}

        </header>
      </div>
    );
}