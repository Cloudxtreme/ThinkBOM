MainLayout = React.createClass({
  render() {
    return (
      <div>
        <Navigation />
        <main>
          <div className="container-fluid">
            {this.props.content}
          </div>
        </main>
      </div>
    );
  }
});
