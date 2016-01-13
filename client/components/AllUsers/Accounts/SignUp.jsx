SignUp = React.createClass({
  handleRegistration(e) {
    e.preventDefault();
    
    //Collect user data from the form
    let userData = {
      username: this.refs.username.value,
      password: this.refs.password.value,
      email: this.refs.email.value,
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value
    };
    
    //Call server method to register the user
    Meteor.call("registerUser", userData, (error) => {
      //Error registering user
      if (error) {
        //Pop up an alert to show the error
        Bert.alert(error.reason, 'danger', 'growl-top-right');
      } else {
        //Login user with provided credentials
        Meteor.loginWithPassword(userData.username, userData.password, (error) => {
          //Failed to login
          if (error) {
            //Pop up an alert to show the reason for failed login
            Bert.alert(error.reason, 'danger', 'growl-top-right');
          } else {
            //Route the newly logged in user
            FlowRouter.go('/');
          }
        });
      }
    });
  },
  
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
          <h1>Create Account</h1>
          <form onSubmit={this.handleRegistration}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" ref="username" className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" ref="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" ref="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" ref="firstName" className="form-control" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" ref="lastName" className="form-control" placeholder="Last Name" />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
      </div>
    );
  }
});