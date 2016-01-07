MainLayout = React.createClass({
  render() {
    return (
      <div>
        <header>
          <Navigation />
        </header>
        <main>
          <div>
            {this.props.content}
          </div>
        </main>
      </div>
    );
  }
});
