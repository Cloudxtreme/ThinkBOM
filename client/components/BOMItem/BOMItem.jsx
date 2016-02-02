import React from 'react';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

const BOMItem = ({bomItems}) => (
  <div>
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
);

export default BOMItem;