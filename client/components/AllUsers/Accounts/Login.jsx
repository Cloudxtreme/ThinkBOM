Login = React.createClass({
  handleLogin(e) {
    e.preventDefault();
  },
  
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Login</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.handleLogin}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" placeholder="Username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});