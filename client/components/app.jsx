App = React.createClass({
  componentDidMount() {
    $('.ui.form')
      .form({
        fields: {
          firstName: {
            identifier: 'first-name',
            rules: [
              {
                type   : 'empty',
                prompt : 'Please enter your name'
              }
            ]
          },
          
          lastName: {
            identifier: 'last-name',
            rules: [
              {
                type   : 'empty',
                prompt : 'Please select at least two skills'
              }
            ]
          }
        }
      });
  },
  
  handleSubmit(event) {
    event.preventDefault();
  },
  
  
  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>First Name</label>
          <input type="text" name="first-name" placeholder="First Name" />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input type="text" name="last-name" placeholder="Last Name" />
        </div>
        <button className="ui blue button" type="submit">Submit</button>
      </form>
    )
  }
});