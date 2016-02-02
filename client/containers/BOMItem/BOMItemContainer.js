import {composeWithTracker} from 'react-komposer';
import BOMItem from '../../components/BOMItem/BOMItem.jsx';

function composer(props, onData) {
  const handle = Meteor.subscribe('bomItems');
  if(handle.ready()) {
    const bomItems = BOMItems.find().fetch();
    onData(null, {bomItems});
  };
};

export default composeWithTracker(composer)(BOMItem);