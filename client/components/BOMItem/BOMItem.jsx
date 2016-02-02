import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

const BOMItem = ({bomItems}) => (
  <div>
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>BOM Item #</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bomItems.map(({bomItemNumber, bomDescription}) => (
              <TableRow>
                <TableRowColumn>{bomItemNumber}</TableRowColumn>
                <TableRowColumn>{bomDescription}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  </div>
);

export default BOMItem;