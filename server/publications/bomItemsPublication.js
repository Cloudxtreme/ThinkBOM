Meteor.publish('bomItems', () => {
  return BOMItemsCollection.find();
});