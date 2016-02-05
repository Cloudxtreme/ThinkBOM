import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import AddBOM from './AddBOM.jsx';

const BOMItem = ({bomItems}) => (
  <div>
    <div className="row">
      <div className="col-lg-8 center-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>BOM Item #</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bomItems.map(({_id, bomItemNumber, bomDescription}) => (
              <TableRow key={_id}>
                <TableRowColumn>{bomItemNumber}</TableRowColumn>
                <TableRowColumn>{bomDescription}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="col-lg-4 center-lg">
        <AddBOM />
      </div>
    </div>
  </div>
);

export default BOMItem;