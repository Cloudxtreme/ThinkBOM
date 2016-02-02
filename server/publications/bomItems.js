Meteor.publish('bomItems', () => {
  return BOMItems.find();
});