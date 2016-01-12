BasicBOM = React.createClass({
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>BOM Type</th>
                    <th>BOM Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Steel</td>
                    <td>#12383748293</td> 
                  </tr>
                  <tr>
                    <td>Steel</td>
                    <td>#12383748293</td> 
                  </tr>
                  <tr>
                    <td>Steel</td>
                    <td>#12383748293</td> 
                  </tr>
                  <tr>
                    <td>Steel</td>
                    <td>#12383748293</td> 
                  </tr>
                  <tr>
                    <td>Steel</td>
                    <td>#12383748293</td> 
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <button className="btn btn-success">Add BOM</button>
          </div>
        </div>
      </div>
    );
  }
});