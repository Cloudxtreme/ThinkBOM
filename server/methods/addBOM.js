Meteor.methods({
  addBOM(itemNumber, itemDescription) {
    BOMItems.insert({
      bomItemNumber: itemNumber,
      bomDescription: itemDescription
    });
  }
});