import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Colors from 'material-ui/lib/styles/colors';

export default class AddBOM extends React.Component {
  addBOM(e) {
    e.preventDefault();
    let itemNumber = this.refs.itemNumber.getValue();
    let itemDescription = this.refs.itemDescription.getValue();

    Meteor.call("addBOM", itemNumber, itemDescription);
  };

  render() {
    return (
      <div>
        <TextField
          hintText="BOM Item Number"
          ref="itemNumber"
        /><br/>
        <TextField
          hintText="BOM Description"
          ref="itemDescription"
        /><br />
        <RaisedButton
          label="Add BOM"
          primary={ true }
          onTouchTap={ this.addBOM.bind(this) }
          backgroundColor={ Colors.green500 }
        />
      </div>
    );
  }
}