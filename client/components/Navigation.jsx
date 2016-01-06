Navigation = React.createClass({
  componentDidMount() {
    $('.button-collapse').sideNav({
      menuWidth: 210,
      edge: 'left',
      closeOnClick: true
    });
  },
  
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="blue-grey">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">ThinkBOM</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="/">Home</a></li>
              <li><a href="/Materials">Materials</a></li>
              <li><a href="/Payments">Payments</a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a href="/">Home</a></li>
              <li><a href="/Materials">Materials</a></li>
              <li><a href="/Payments">Payments</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
})
