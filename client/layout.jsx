MainLayout = React.createClass({
  render() {
    return (
    <div>
      <header>
        <div className="ui four column grid container">
          <div className="row">
            <div className="column">
              <h1>ThinkBOM</h1>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="ui four column grid container">
          <div className="row">
            <div className="column">
              { this.props.content }
            </div>
          </div>
        </div>
      </main>
    </div>
    );
  }
});
