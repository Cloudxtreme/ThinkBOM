HomeContainer = React.createClass({
  render() {
    return (
      <div>
        {/* Home page header*/}
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <HomePageHeader />
          </div>
        </div>
        
        {/* Home page content*/}
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <HomePageContent />
          </div>
        </div>
        
        {/* Home page footer*/}
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <HomePageFooter />
          </div>
        </div>
      </div>
    );
  }
});