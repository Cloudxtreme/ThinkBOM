MainLayout = React.createClass({
  render() {
    return (
      <div>
        <NavigationContainer/>
        <main className="container-fluid">
          {this.props.content}
        </main>
      </div>
    );
  }
});
