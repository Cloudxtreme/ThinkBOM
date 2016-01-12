Navigation = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-default">
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
              <li><a href="/">Home</a></li>
              <li><a href="/BasicBOM">BOM'S</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Account <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="/Login">Login</a></li>
                  <li><a href="/Register">Register</a></li>
                  <li><a href="/MyAccount">My Account</a></li>
                  <li><a href="#">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});