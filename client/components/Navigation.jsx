Navigation = React.createClass({
  render() {
    return (
      <ul className="nav nav-tabs nav-justified nav-stacked">
        <li role="presentation" className="active"><a href="/">Home</a></li>
        <li role="presentation"><a href="#">Profile</a></li>
        <li role="presentation"><a href="#">Messages</a></li>
      </ul>  
    )
  }
});