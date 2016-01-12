Register = React.createClass({
  handleRegistration(e) {
    e.preventDefault();
    alert("thank you for registering");
  },
  
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
          <h1>Create Account</h1>
          <form onSubmit={this.handleRegistration}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" className="form-control" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className="form-control" placeholder="Last Name" />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
      </div>
    );
  }
});