MainLayout = React.createClass({
  render() {
    let mainLayoutStyle = {
      paddingTop: "40px"
    };

    return (
      <div>
        <Navigation />
        <main>
          <div style={mainLayoutStyle} className="container-fluid">
            {this.props.content}
          </div>
        </main>
      </div>
    );
  }
});
