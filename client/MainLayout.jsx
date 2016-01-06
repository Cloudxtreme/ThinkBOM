MainLayout = React.createClass({
  render() {
    return (
      <div>
        <Navigation />
        <main>
          <div>
            {this.props.content}
          </div>
        </main>
      </div>
    );
  }
});
