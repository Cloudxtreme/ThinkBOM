MainLayout = React.createClass({
  render() {
    return (
      <div>
        <Navigation/>
        <main className="container-fluid">
          {this.props.content}
        </main>
      </div>
    );
  }
});
