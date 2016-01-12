Navigation = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mobile-menu" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">ThinkBOM</a>
          </div>
          <div className="collapse navbar-collapse" id="mobile-menu">
            <ul className="nav navbar-nav">
              <li><a data-toggle="collapse" data-target="#mobile-menu" href="/">Home</a></li>
              <li><a data-toggle="collapse" data-target="#mobile-menu" href="/BasicBOM">Manage BOM's</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Account <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a data-toggle="collapse" data-target="#mobile-menu" href="/Login">Login</a></li>
                  <li><a data-toggle="collapse" data-target="#mobile-menu" href="/Register">Register</a></li>
                  <li><a data-toggle="collapse" data-target="#mobile-menu" href="/MyAccount">My Account</a></li>
                  <li><a data-toggle="collapse" data-target="#mobile-menu" href="#">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});